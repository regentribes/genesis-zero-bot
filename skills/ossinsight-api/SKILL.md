---
name: ossinsight-api
description: Query the OSSInsight Public API for GitHub repository analytics, trends, rankings, stargazers, issue creators, and pull request metrics. Use when analyzing open source project health, comparing repositories, tracking trends, or researching the OSS ecosystem.
metadata:
  openclaw:
    tags:
      - "github"
      - "oss"
      - "analytics"
      - "trends"
      - "repositories"
      - "stars"
      - "issues"
      - "prs"
      - "open-source"
    source: "https://github.com/pingcap/ossinsight"
    license: "Apache-2.0"
    requires:
      bins:
        - "curl"
        - "jq"
      os:
        - "linux"
        - "darwin"
---

# OSSInsight API Skill

Access the OSSInsight Public API to query GitHub repository analytics, trends, rankings, and contributor demographics. No authentication required (beta, rate-limited to 600 requests/hour per IP).

**Base URL:** `https://api.ossinsight.io/v1`
**Rate Limit:** 600 requests/hour per IP · 1000 requests/minute global
**Format:** All responses are JSON with `data.rows` array and `data.columns` describing fields.

## Quick Reference

### TRENDS
```bash
# NOTE: The /trends/repos/ endpoint may be unstable in beta.
# If it returns errors, fall back to https://ossinsight.io/explore for trending data.
# Try 24h period:
curl "https://api.ossinsight.io/v1/trends/repos/?period=24h"
```

### COLLECTIONS
```bash
# List all collections (returns id + name)
curl -s "https://api.ossinsight.io/v1/collections/" | jq '.data.rows[] | {id, name}'

# Hot collections (top repos per collection)
curl -s "https://api.ossinsight.io/v1/collections/hot/" | jq '.data.rows[:5]'

# Repos ranked by stars in a collection
# period: past_24h | past_7d | past_28d | past_365d
curl -s "https://api.ossinsight.io/v1/collections/{id}/ranking_by_stars/?period=past_28_days" | jq '.data.rows[:10]'

# Repos ranked by issues in a collection
curl -s "https://api.ossinsight.io/v1/collections/{id}/ranking_by_issues/?period=past_28_days" | jq '.data.rows[:10]'

# Repos ranked by PRs in a collection
curl -s "https://api.ossinsight.io/v1/collections/{id}/ranking_by_prs/?period=past_28_days" | jq '.data.rows[:10]'

# List repos in a collection
curl -s "https://api.ossinsight.io/v1/collections/{id}/repos/?page=1&page_size=30" | jq '.data.rows[] | {name: .repo_name, description: .description}'
```

### STARGAZERS
```bash
# Stargazer count history for a repo
# per: day | week | month
curl -s "https://api.ossinsight.io/v1/repos/{owner}/{repo}/stargazers/history/?per=month&from=2020-01-01&to=2026-01-01" | jq '.data.rows[-12:]'

# Countries/regions of stargazers
curl -s "https://api.ossinsight.io/v1/repos/{owner}/{repo}/stargazers/countries" | jq '.data.rows[] | {country: .country_code, count: .stargazers, pct: .percentage}'

# Organizations of stargazers
curl -s "https://api.ossinsight.io/v1/repos/{owner}/{repo}/stargazers/organizations" | jq '.data.rows[:10]'
```

### ISSUE CREATORS
```bash
# Top issue creators for a repo
# sort: issues-desc | issues-asc | login-asc | login-desc
curl -s "https://api.ossinsight.io/v1/repos/{owner}/{repo}/issue_creators/?sort=issues-desc&exclude_bots=true&page=1&page_size=30" | jq '.data.rows[] | {login, name, issues: .issues}'

# Countries/regions of issue creators
curl -s "https://api.ossinsight.io/v1/repos/{owner}/{repo}/issue_creators/countries" | jq '.data.rows[]'

# Organizations of issue creators
curl -s "https://api.ossinsight.io/v1/repos/{owner}/{repo}/issue_creators/organizations" | jq '.data.rows[:10]'

# Issue creator history
# per: day | week | month
curl -s "https://api.ossinsight.io/v1/repos/{owner}/{repo}/issue_creators/history/?per=month&from=2024-01-01&to=2026-01-01" | jq '.data.rows[-12:]'
```

### PULL REQUEST CREATORS
```bash
# Top PR creators for a repo
# sort: prs-desc | prs-asc | login-asc | login-desc
curl -s "https://api.ossinsight.io/v1/repos/{owner}/{repo}/pull_request_creators/?sort=prs-desc&exclude_bots=true&page=1&page_size=30" | jq '.data.rows[] | {login, name, prs: .prs, first_pr: ."first_pr_opened_at"}'

# Countries/regions of PR creators
curl -s "https://api.ossinsight.io/v1/repos/{owner}/{repo}/pull_request_creators/countries" | jq '.data.rows[]'

# Organizations of PR creators
curl -s "https://api.ossinsight.io/v1/repos/{owner}/{repo}/pull_request_creators/organizations" | jq '.data.rows[:10]'

# PR creator history
# per: day | week | month
curl -s "https://api.ossinsight.io/v1/repos/{owner}/{repo}/pull_request_creators/history/?per=month&from=2024-01-01&to=2026-01-01" | jq '.data.rows[-12:]'
```

## Response Format

All endpoints return JSON. Parse with `jq`:

```bash
# Pretty print full response
curl -s "URL" | jq .

# Extract just the rows
curl -s "URL" | jq '.data.rows'

# Extract specific columns from first 5 rows
curl -s "URL" | jq '.data.rows[:5]'

# Table format: repo name + stars/issues/prs (tab-separated, top 10)
curl -s "URL" | jq -r '.data.rows[:10] | .[] | [.repo_name, (.total // .stargazers // .issues // .prs // empty)] | @tsv'

# Count rows
curl -s "URL" | jq '.data.rows | length'

# Sum a numeric field
curl -s "URL" | jq '[.data.rows[].stargazers // .issues // .prs // 0 | tonumber] | add'

# Show columns available in response
curl -s "URL" | jq '.data.columns[] | .col'
```

## Common Patterns

### Analyze a Repository's Health
```bash
# Stars over time (monthly for last 12 months)
curl -s "https://api.ossinsight.io/v1/repos/{owner}/{repo}/stargazers/history/?per=month" | jq '.data.rows[-12:] | .[] | {date: .date, stars: .stargazers}'

# Top issue creators
curl -s "https://api.ossinsight.io/v1/repos/{owner}/{repo}/issue_creators/?sort=issues-desc&page=1&page_size=10" | jq '.data.rows[] | {login, issues: .issues}'

# Top PR creators
curl -s "https://api.ossinsight.io/v1/repos/{owner}/{repo}/pull_request_creators/?sort=prs-desc&page=1&page_size=10" | jq '.data.rows[] | {login, prs: .prs}'

# Stargazer geography (top 10 countries)
curl -s "https://api.ossinsight.io/v1/repos/{owner}/{repo}/stargazers/countries" | jq '.data.rows[:10] | .[] | {country: .country_code, count: .stargazers, pct: .percentage}'
```

### Compare Two Repositories
```bash
# Stars comparison (get last 6 months for both, compare)
curl -s "https://api.ossinsight.io/v1/repos/{owner1}/{repo1}/stargazers/history/?per=month" | jq '{repo: "{owner1}/{repo1}", history: .data.rows[-6:]}'
curl -s "https://api.ossinsight.io/v1/repos/{owner2}/{repo2}/stargazers/history/?per=month" | jq '{repo: "{owner2}/{repo2}", history: .data.rows[-6:]}'
```

### Check Dark Factory Stack Repos
```bash
# rust-lang/rust — stars and geography
curl -s "https://api.ossinsight.io/v1/repos/rust-lang/rust/stargazers/history/?per=month" | jq '.data.rows[-6:]'
curl -s "https://api.ossinsight.io/v1/repos/rust-lang/rust/stargazers/countries" | jq '.data.rows[:5]'

# Ferrous Systems/ferrocene
curl -s "https://api.ossinsight.io/v1/repos/ferrous-systems/ferrocene/stargazers/history/?per=month" | jq '.data.rows[-6:]'

# seL4
curl -s "https://api.ossinsight.io/v1/repos/seL4/seL4/stargazers/history/?per=month" | jq '.data.rows[-6:]'

# colmena (zhaofengli/colmena)
curl -s "https://api.ossinsight.io/v1/repos/zhaofengli/colmena/stargazers/history/?per=month" | jq '.data.rows[-6:]'

# nix-community/nixpkgs stars history
curl -s "https://api.ossinsight.io/v1/repos/NixOS/nixpkgs/stargazers/history/?per=month" | jq '.data.rows[-6:]'
```

### Find Top Repos in a Collection
```bash
# List all collections first
curl -s "https://api.ossinsight.io/v1/collections/" | jq '.data.rows[] | {id, name}'

# Then rank repos by stars in a specific collection
# Example: collection id=2 is "Open Source Database"
curl -s "https://api.ossinsight.io/v1/collections/2/ranking_by_stars/?period=past_28_days" | jq '.data.rows[:10] | .[] | {name: .repo_name, total_stars: .total, growth_28d: .current_period_growth}'

# Same for Rust-related collection if one exists
curl -s "https://api.ossinsight.io/v1/collections/" | jq '.data.rows[] | select(.name | contains("Rust";"Embedded";"Systems"))'
```

## All Endpoints Summary

| Category | Endpoint | Key Response Fields |
|---|---|---|
| Trends | `GET /trends/repos/` | (beta — may be unstable) |
| Collections | `GET /collections/` | `id`, `name`, `description` |
| Collections | `GET /collections/hot/` | `id`, `name`, `repos`, `repo_name`, `repo_rank_changes` |
| Ranking | `GET /collections/{id}/ranking_by_stars/` | `repo_name`, `total`, `current_period_growth`, `current_period_rank` |
| Ranking | `GET /collections/{id}/ranking_by_issues/` | `repo_name`, `total`, `current_period_growth`, `current_period_rank` |
| Ranking | `GET /collections/{id}/ranking_by_prs/` | `repo_name`, `total`, `current_period_growth`, `current_period_rank` |
| Repos | `GET /collections/{id}/repos/` | `repo_name`, `description`, `stars`, `rank` |
| Stargazers | `GET /repos/{o}/{r}/stargazers/history/` | `date`, `stargazers` |
| Stargazers | `GET /repos/{o}/{r}/stargazers/countries/` | `country_code`, `stargazers`, `percentage` |
| Stargazers | `GET /repos/{o}/{r}/stargazers/organizations/` | `organization`, `stargazers` |
| Issues | `GET /repos/{o}/{r}/issue_creators/` | `login`, `name`, `issues`, `first_issue_opened_at` |
| Issues | `GET /repos/{o}/{r}/issue_creators/countries/` | `country_code`, `issues`, `percentage` |
| Issues | `GET /repos/{o}/{r}/issue_creators/history/` | `date`, `issue_creators` |
| Issues | `GET /repos/{o}/{r}/issue_creators/organizations/` | `organization`, `issues` |
| PRs | `GET /repos/{o}/{r}/pull_request_creators/` | `login`, `name`, `prs`, `first_pr_opened_at`, `first_pr_merged_at` |
| PRs | `GET /repos/{o}/{r}/pull_request_creators/countries/` | `country_code`, `prs`, `percentage` |
| PRs | `GET /repos/{o}/{r}/pull_request_creators/history/` | `date`, `pull_request_creators` |
| PRs | `GET /repos/{o}/{r}/pull_request_creators/organizations/` | `organization`, `prs` |

## Verified Working Examples

These exact commands return real data (tested 2026-05-04):

```bash
# rust-lang/rust — 115K stargazers
curl -s "https://api.ossinsight.io/v1/repos/rust-lang/rust/stargazers/history/?per=month" | jq '.data.rows[-6:]'

# Stargazer geography
curl -s "https://api.ossinsight.io/v1/repos/rust-lang/rust/stargazers/countries" | jq '.data.rows[:5]'

# Top PR contributors to rust-lang/rust
curl -s "https://api.ossinsight.io/v1/repos/rust-lang/rust/pull_request_creators/?sort=prs-desc&page=1&page_size=5" | jq '.data.rows[] | {login, name, prs}'

# Hot collections
curl -s "https://api.ossinsight.io/v1/collections/hot/" | jq '.data.rows[:5]'

# Collection ranking by stars (id=2 is "Open Source Database")
curl -s "https://api.ossinsight.io/v1/collections/2/ranking_by_stars/?period=past_28_days" | jq '.data.rows[:5]'

# All collections
curl -s "https://api.ossinsight.io/v1/collections/" | jq '.data.rows[] | {id, name}'
```

## Notes

- **Authentication:** None required for beta API
- **Rate limits:** 600/hr per IP, 1000/min global. Check headers: `x-ratelimit-limit`, `x-ratelimit-remaining`
- **Trends endpoint:** Beta — may return errors. Fall back to ossinsight.io/explore if needed
- **Dates:** `YYYY-MM-DD` format. `from`/`to` for history endpoints. `per`: `day` | `week` | `month`
- **Pagination:** `page=1&page_size=30` (default page_size varies by endpoint)
- **Bot exclusion:** `exclude_bots=true` on issue/PR creator endpoints
- **Sorting:** `sort=issues-desc` or `sort=prs-desc` on creator lists
- **Collection IDs:** Numeric. List all collections first to find the ID you need
- **Field names:** `issues` (not `issues_count`), `prs` (not `pr_count`), `stargazers` (not `star_count`)
- **Null values:** Some fields may be null — use `// empty` in jq to filter
