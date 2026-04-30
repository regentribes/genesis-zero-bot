#!/bin/bash
CONFIG="$HOME/.openclaw/openclaw.json"
BOT_TOKEN=$(jq -r '.channels.telegram.accounts.genesis.botToken' "$CONFIG")

# Send intro message
curl -s -X POST "https://api.telegram.org/bot${BOT_TOKEN}/sendMessage" \
  -H "Content-Type: application/json" \
  -d '{
    "chat_id": "-1001921904187",
    "text": "<b>🎵 COMPLETE EMOTIONAL SEQUENCING SYSTEM</b>\n<i>PART 03 — SYNCHRONIZATION BRIDGES</i>\n\nA bridge is not a transition track. It contains <i>two emotional territories simultaneously</i> — so the group does not have to make a jump. The listener crosses while staying in the same room.\n\nBridges give the body a reason to stay while the mind adjusts. The room shifts without anyone having to choose.",
    "parse_mode": "HTML",
    "message_thread_id": 18519,
    "link_preview_options": {"is_disabled": true}
  }' | jq '.'