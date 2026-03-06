#!/usr/bin/env bash
# capture.sh — Capture text into Genesis' knowledge graph
# Usage: bash capture.sh "<text content>" [title]
# Output: JSON with doc_id, concepts_count, relations_count
set -euo pipefail

CONTENT="$1"
TITLE="${2:-capture-$(date +%s)}"

# Save to temp file
mkdir -p /tmp/genesis-ingest
TMPFILE="/tmp/genesis-ingest/${TITLE}.md"
echo "$CONTENT" > "$TMPFILE"

SKILL_DIR="$HOME/.openclaw/workspace-genesis/skills/semantic-graph"
cd "$SKILL_DIR"
source .venv/bin/activate
export $(grep -v "^#" "$HOME/.openclaw/.env" | xargs)

# Ingest
OUTPUT=$(python pipeline.py ingest "$TMPFILE" --embed -v 2>&1)

# Parse summary
SUMMARY=$(echo "$OUTPUT" | grep -oP 'Done in \K.*' || echo "")

if [ -z "$SUMMARY" ]; then
  echo '{"captured": true, "concepts_count": 0, "relations_count": 0, "note": "Text was too short for extraction"}'
  exit 0
fi

CONCEPTS=$(echo "$SUMMARY" | grep -oP 'concepts=\K\d+' || echo "0")
RELATIONS=$(echo "$SUMMARY" | grep -oP 'relations=\K\d+' || echo "0")
DOC_ID=$(echo "$SUMMARY" | grep -oP 'doc=\K\S+' || echo "unknown")

echo "{\"captured\": true, \"doc_id\": \"$DOC_ID\", \"concepts_count\": $CONCEPTS, \"relations_count\": $RELATIONS}"

# Cleanup
rm -f "$TMPFILE"
