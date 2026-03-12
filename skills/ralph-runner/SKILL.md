---
name: ralph-runner
description: Trigger Ralph orchestrator runs. Use when a user wants to start a Ralph AI agent loop for task completion. Triggers on: "run ralph", "ralph do", " Ralph ", "/ralph", or any request to start a Ralph orchestration task.
---

# Ralph Runner

Execute Ralph orchestrator tasks from chat.

## Usage

When triggered, run:

```bash
cd ~/.ralph && ralph run -p "USER_TASK"
```

Replace `USER_TASK` with the user's request.

## Output

- Capture stdout/stderr
- Return summary of result
- If loop completes: report iterations, time, outcome
- If error: report the error

## Notes

- Ralph is installed at: `~/.ralph/`
- Config: `~/.ralph/ralph.yml`
- Uses Claude backend by default
- Telegram bot is configured for human-in-loop
