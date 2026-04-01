# deepwiki-repo-analyzer

Analyzes software repositories by fetching documentation from DeepWiki and converting to markdown.

## Trigger Phrases

- "analyze this repo"
- "deepwiki"
- "fetch repo docs"
- "analyze github repo"
- "get repo documentation"
- "repo analysis"

## What It Does

1. Takes a GitHub or DeepWiki URL (or just `owner/repo`)
2. Converts GitHub URLs to DeepWiki format (swap `github.com` → `deepwiki.com`)
3. Uses `dw2md` to fetch and convert repository documentation
4. Saves output to `~/workspace-genesis/deepwiki_{repo_name}.md`
5. Returns the file path and a summary

## Requirements

- `dw2md` must be installed: `cargo binstall -y dw2md`
- `$HOME/.cargo/bin` in PATH

## Usage

### Direct URL:
```
analyze https://github.com/regentribes/genesis-zero-bot
```

### Owner/Repo format:
```
analyze regentribes/genesis-zero-bot
```

### DeepWiki format:
```
analyze https://deepwiki.com/regentribes/genesis-zero-bot
```

## Output

- Saves markdown to: `~/workspace-genesis/deepwiki_{owner}_{repo}.md`
- Returns: file path, line count, first 1000 chars preview
