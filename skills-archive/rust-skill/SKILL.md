---
name: rust-skill
description: Create and distribute Rust-based skills for OpenClaw. Use when: (1) Building CLI tools as skills, (2) Packaging Rust binaries for distribution, (3) Setting up cross-platform builds, (4) Using cargo install for dev workflow.
---

# Rust Skill Template

Use Rust to build high-performance CLI tools that can be packaged as skills.

## Distribution Options

### Option 1: Compiled Binaries (Recommended for Distribution)
- Build: `cargo build --release`
- Output: `target/release/<binary>`
- Cross-compile with `cross` or GitHub Actions for multiple platforms
- Users download pre-built binaries - no Rust needed

### Option 2: cargo install (For Rust Developers)
```bash
cargo install --path .
# Or from crates.io
cargo install my-crate
```
- Installs to `~/.cargo/bin`
- Good for internal tools

### Option 3: Embed in Skill with Install Script
- Include compiled binary in skill's `scripts/` folder
- Or use install script to build from source
- See skill-creator for packaging

## Example: Creating a Rust Skill

```bash
# 1. Create project
cargo new --bin my-skill

# 2. Add to skill structure
mkdir skills/my-skill/
cp -r my-skill/ skills/my-skill/scripts/
# Add SKILL.md

# 3. Build
cargo build --release

# 4. Distribute (pick one):
#   a) Share binary directly
#   b) Publish to crates.io
#   c) Package with skill (via clawhub)
```

## Cross-Platform Builds

Use [cross](https://github.com/cross-rs/cross) for CI:
```bash
cross build --target x86_64-unknown-linux-musl
cross build --target aarch64-unknown-linux-musl
cross build --target x86_64-apple-darwin
cross build --target aarch64-apple-darwin
```

## OpenClaw Integration

1. Build binary
2. Place in skill's `scripts/` folder
3. Document usage in SKILL.md
4. Package with `clawhub publish` or share repo URL
