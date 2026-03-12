---
name: radicle
description: Radicle p2p code collaboration protocol - decentralized Git hosting, issues, and patches. Use for: (1) Initializing new projects with rad init, (2) Cloning repositories with rad clone, (3) Managing seeding policies, (4) Syncing with rad sync, (5) Creating issues and patches, (6) Managing delegates. Requires rad CLI installed and node running.
---

# Radicle Skill

Radicle is a peer-to-peer protocol for code collaboration - a decentralized alternative to GitHub/GitLab.

## Prerequisites

- Radicle CLI installed: `curl -sSLf https://radicle.xyz/install | sh`
- Node must be running: `rad node start` (requires RAD_PASSPHRASE env var)

## Environment Setup

```bash
export PATH="$HOME/.radicle/bin:$PATH"
export RAD_PASSPHRASE="your-passphrase"
```

## Core Commands

### Identity & Node
```bash
rad self                    # Show identity (DID, Node ID)
rad node status             # Check if node is running
rad node start              # Start the node
rad node stop               # Stop the node
```

### Repository Operations
```bash
rad init                    # Initialize current dir as Radicle project
rad clone <rid>             # Clone repository by RID (e.g., rad:z3gqcJUo...)
rad .                       # Show current repo RID
rad sync                    # Sync with network
rad sync status             # Check replication status
rad ls                      # List repositories
rad ls --seeded             # List seeded repos
```

### Seeding
```bash
rad seed <rid>              # Seed a repository
rad unseed <rid>            # Stop seeding
```

### Collaboration
```bash
rad issue new --title "Bug" --description "..."  # Create issue
rad issue list              # List issues
rad patch create            # Create patch
rad patch list              # List patches
```

### Configuration
```bash
rad id update --name <name>     # Update project name
rad id update --description "..."  # Update description
rad id update --visibility public|private  # Set visibility
```

## Radicle URLs

- Web interface: https://app.radicle.xyz/nodes/iris.radicle.xyz/rad:<RID>
- Example: https://app.radicle.xyz/nodes/iris.radicle.xyz/rad:z3gqcJUoA1n9HaHKufZs5FCSGazv5

## Key Concepts

- **RID (Repository ID)**: Unique identifier like `rad:z3gqcJUoA1n9HaHKufZs5FCSGazv5`
- **DID**: Your identity `did:key:z6M...`
- **Node ID**: Your peer ID (same as DID without did:key: prefix)
- **Seed node**: Public nodes that replicate repositories (iris.radicle.xyz, rosa.radicle.xyz)
- **Delegate**: Person/project authorized to push canonical state

## Tips

- Radicle works offline - push to local rad remote, sync when online
- Use `git push rad <branch>` to push changes
- All data is cryptographically signed
- Default seeding scope is 'all' - change with `--scope followed`
