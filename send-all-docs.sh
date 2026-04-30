#!/bin/bash
set -e

CONFIG="$HOME/.openclaw/openclaw.json"
BOT_TOKEN=$(cat "$CONFIG" | jq -r '.channels.telegram.accounts.genesis.botToken')
BASE_DIR="$HOME/.radicle/regen-tribes-notes"
CHAT_ID="-1001921904187"
THREAD_ID="1958"

send_message() {
    local text="$1"
    local response
    response=$(curl -s -X POST "https://api.telegram.org/bot${BOT_TOKEN}/sendMessage" \
        -H "Content-Type: application/json" \
        -d "$(jq -n \
            --arg chat "$CHAT_ID" \
            --arg text "$text" \
            --argjson thread "$THREAD_ID" \
            '{
                chat_id: $chat,
                text: $text,
                parse_mode: "HTML",
                message_thread_id: $thread,
                link_preview_options: { is_disabled: true }
            }')")
    
    local ok=$(echo "$response" | jq -r '.ok // empty')
    if [ "$ok" = "true" ]; then
        echo "OK"
    else
        local desc=$(echo "$response" | jq -r '.description // "unknown error"')
        echo "ERROR: $desc"
        # Try without thread
        response=$(curl -s -X POST "https://api.telegram.org/bot${BOT_TOKEN}/sendMessage" \
            -H "Content-Type: application/json" \
            -d "$(jq -n \
                --arg chat "$CHAT_ID" \
                --arg text "$text" \
                '{
                    chat_id: $chat,
                    text: $text,
                    parse_mode: "HTML",
                    link_preview_options: { is_disabled: true }
                }')")
        ok=$(echo "$response" | jq -r '.ok // empty')
        if [ "$ok" = "true" ]; then
            echo "OK (fallback)"
        else
            desc=$(echo "$response" | jq -r '.description // "unknown error"')
            echo "ERROR: $desc"
        fi
    fi
}

escape() {
    local s="$1"
    # Escape & first, then < and >
    s="${s//&/&amp;}"
    s="${s//</&lt;}"
    s="${s//>/&gt;}"
    echo "$s"
}

send_document() {
    local num="$1"
    local filename="$2"
    
    # Extract title from filename (remove number prefix and extension)
    local title=$(echo "$filename" | sed 's/^[0-9]*-//' | sed 's/\.md$//' | sed 's/-/ /g')
    
    # Read file content
    local content=$(cat "$BASE_DIR/$filename")
    
    # Strip markdown headers (# at start of line)
    content=$(echo "$content" | sed 's/^# //')
    
    # Escape special HTML chars
    content=$(escape "$content")
    
    # Format heading
    local heading="📄 <b>$(printf '%03d' "$num")-$title</b>"
    
    local full_text="$heading"$'\n\n'"$content"
    
    local len=${#full_text}
    if [ "$len" -le 4096 ]; then
        send_message "$full_text"
    else
        # Split at blank line boundaries
        local parts=$(echo "$full_text" | awk 'BEGIN{RS="\n\n"; parts[0]=""} {parts[NR-1]=$0} END{for(i in parts) printf "%s%s%s\n", (i>0?"\n\n":""), parts[i], ""}')
        
        # Actually use awk to split by paragraph (double newline)
        local current=""
        local first=1
        while IFS= read -r line; do
            if [ -z "$line" ]; then
                if [ -n "$current" ]; then
                    if [ "$first" -eq 1 ]; then
                        send_message "$heading"$'\n\n'"$current"
                        first=0
                    else
                        send_message "<i>(continued)</i>"$'\n\n'"$current"
                    fi
                    current=""
                fi
            else
                if [ -n "$current" ]; then
                    current="$current"$'\n'"$line"
                else
                    current="$line"
                fi
            fi
        done < <(echo "$content")
        
        # Send remaining
        if [ -n "$current" ]; then
            if [ "$first" -eq 1 ]; then
                send_message "$heading"$'\n\n'"$current"
            else
                send_message "<i>(continued)</i>"$'\n\n'"$current"
            fi
        fi
    fi
}

# Get sorted list of files
files=$(ls "$BASE_DIR" | grep -E '^[0-9]+-' | sort -V)

total=0
success=0

while IFS= read -r filename; do
    total=$((total + 1))
    num=$(printf '%03d' $((10#$total - 1)))
    
    echo "[$total/248] Sending $filename..."
    result=$(send_document $((10#$num)) "$filename")
    
    if echo "$result" | grep -q "^OK"; then
        success=$((success + 1))
        echo "  -> OK"
    else
        echo "  -> $result"
    fi
    
    # Rate limit: 300ms between messages
    sleep 0.3
done <<< "$files"

echo ""
echo "=== COMPLETE ==="
echo "Total: $total"
echo "Successful: $success"