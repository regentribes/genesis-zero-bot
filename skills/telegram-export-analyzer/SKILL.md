# SKILL.md — Telegram Export Analyzer

Analyze Telegram chat exports (JSON format) and extract key insights.

## Trigger
- "analyze telegram export"
- "extract telegram chat"
- "telegram snapshot"

## Tools Required
- `jq` — JSON query tool (installed by default on most systems)

## Input
- Path to Telegram JSON export file

## What It Does

### 1. Basic Stats
```bash
# Message count
jq '.messages | length' "$FILE"

# Date range
jq '[.messages[].date] | min, max' "$FILE"

# Unique senders
jq '[.messages[] | select(.from != null) | .from] | unique' "$FILE"
```

### 2. Message Types
```bash
# User messages only
jq '[.messages[] | select(.type == "message")]' "$FILE"

# Service events (joins, topics, etc)
jq '[.messages[] | select(.type == "service")]' "$FILE"
```

### 3. Content Extraction
```bash
# All links shared
jq -r '.messages[] | .text_entities[]? | select(.type == "link") | .text' "$FILE"

# All topics created
jq -r '.messages[] | select(.action == "topic_created") | .title' "$FILE"

# All reactions
jq -r '.messages[] | .reactions[]? | .emoji' "$FILE"
```

### 4. Summary Output
The skill outputs:
- Total messages
- Date range
- Unique participants
- Top contributors
- Links shared (count + unique)
- Topics created
- Reactions summary

## Output Location
Saves to: `memory/telegram-snapshots/`

Filename format: `telegram-export-YYYY-MM-DD.json` or based on chat name + date

## Example Usage
```
analyze telegram export /path/to/result.json
```
