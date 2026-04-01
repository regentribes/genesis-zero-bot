#!/bin/bash
# deepwiki-repo-analyzer - Fetch and analyze repo docs from DeepWiki
# Usage: ./analyze.sh <owner/repo or URL>

set -e

DW2MD="$HOME/.cargo/bin/dw2md"
OUTPUT_DIR="$HOME/.openclaw/workspace-genesis"

# Check dw2md exists
if [ ! -x "$DW2MD" ]; then
    echo "ERROR: dw2md not found. Install with: cargo binstall -y dw2md"
    exit 1
fi

# Parse input
INPUT="$1"
if [ -z "$INPUT" ]; then
    echo "Usage: $0 <owner/repo or URL>"
    echo "Examples:"
    echo "  $0 regentribes/genesis-zero-bot"
    echo "  $0 https://github.com/regentribes/genesis-zero-bot"
    echo "  $0 https://deepwiki.com/regentribes/genesis-zero-bot"
    exit 1
fi

# Normalize to owner/repo format
NORMALIZED="$INPUT"

# Handle full URLs
if [[ "$INPUT" == *"github.com"* ]]; then
    # Extract owner/repo from github URL
    NORMALIZED=$(echo "$INPUT" | sed -E 's|https?://[^/]+/([^/]+)/([^/]+).*|\1/\2|' | sed 's/\.git$//')
elif [[ "$INPUT" == *"deepwiki.com"* ]]; then
    # Extract owner/repo from deepwiki URL  
    NORMALIZED=$(echo "$INPUT" | sed -E 's|https?://[^/]+/([^/]+)/([^/]+).*|\1/\2|')
fi

# Sanitize for filename
FILENAME=$(echo "$NORMALIZED" | tr '/' '_')

OUTPUT_FILE="$OUTPUT_DIR/deepwiki_${FILENAME}.md"

echo "Fetching DeepWiki docs for: $NORMALIZED"
echo "Output: $OUTPUT_FILE"

# Fetch with dw2md (no-toc for cleaner output)
"$DW2MD" "$NORMALIZED" -o "$OUTPUT_FILE" --no-toc -q

if [ -f "$OUTPUT_FILE" ]; then
    LINES=$(wc -l < "$OUTPUT_FILE")
    CHARS=$(wc -c < "$OUTPUT_FILE")
    echo "✓ Saved to: $OUTPUT_FILE"
    echo "  Lines: $LINES"
    echo "  Size: $((CHARS / 1024)) KB"
    echo ""
    echo "=== PREVIEW (first 80 lines) ==="
    head -80 "$OUTPUT_FILE"
else
    echo "ERROR: Failed to fetch documentation"
    exit 1
fi
