---
name: skill-creator
description: Create and validate Agent Skills (agentskills.io format). Use when: building new skills, updating skill metadata, validating skill structure, or ensuring skills comply with the Agent Skills specification.
license: Apache-2.0
compatibility: Requires skills-ref Python package or equivalent validation logic
---

# Skill Creator

Creates and validates Agent Skills following the official [Agent Skills](https://agentskills.io) specification.

## When to Use

- Creating a new skill for OpenClaw or other AI agent systems
- Updating existing skill metadata
- Validating skill structure before deployment
- Ensuring skills comply with the Agent Skills specification

## Required Format

### Directory Structure

```
my-skill/
└── SKILL.md          # Required: skill definition (uppercase)
```

### SKILL.md Structure

```yaml
---
name: my-skill
description: What this skill does and when the model should use it
license: Apache-2.0          # Optional
compatibility: Required X    # Optional
allowed-tools: Bash(jq:*)    # Optional, experimental
metadata:                   # Optional, key-value pairs
  author: Your Name
  version: 1.0
---
# Skill content here
```

## Creation Process

### Step 1: Validate Skill Name

- Lowercase only (a-z, 0-9, hyphens)
- Cannot start or end with hyphen
- No consecutive hyphens (--)
- Max 64 characters
- Directory name MUST match skill name

### Step 2: Create Frontmatter

Add YAML frontmatter at top of SKILL.md:

```yaml
---
name: skill-name
description: Clear description of what skill does
---
```

### Step 3: Write Skill Content

After frontmatter, include:
- When to use this skill
- Step-by-step instructions
- Examples of invocation
- Any required tools or dependencies

### Step 4: Validate

Run validation to ensure compliance:

```
skills-ref validate /path/to/skill
```

## Validation Rules

| Rule | Requirement |
|------|-------------|
| name | Required, lowercase, kebab-case, max 64 chars |
| description | Required, max 1024 chars |
| directory match | Directory name must equal skill name |
| frontmatter | Must start with --- and close with --- |
| allowed fields | name, description, license, compatibility, allowed-tools, metadata |

## Common Errors

### Name Errors

- **Uppercase**: Use lowercase (my-skill not MySkill)
- **Starts/ends with hyphen**: Remove leading/trailing hyphens
- **Consecutive hyphens**: Use single hyphens (my-skill not my--skill)
- **Invalid characters**: Only letters, digits, hyphens allowed
- **Directory mismatch**: Folder name must match name in frontmatter

### Content Errors

- **Missing description**: Always include description field
- **Description too long**: Keep under 1024 characters
- **Unexpected fields**: Only use allowed frontmatter fields

## Example: Creating a New Skill

```bash
# Create skill directory
mkdir -p my-new-skill

# Create SKILL.md
cat > my-new-skill/SKILL.md << 'EOF'
---
name: my-new-skill
description: A skill that does something useful
license: Apache-2.0
---
# My New Skill

Use this skill when you need to do X.

## Activation

Use "do X" to activate this skill.

## Steps

1. Do this first
2. Then do this
3. Finally do this
EOF

# Validate
skills-ref validate my-new-skill
```

## Integration with OpenClaw

Skills created with this skill are automatically discovered by OpenClaw when placed in the skills directory. The `<available_skills>` prompt block is generated from validated skills.

## References

- [Agent Skills Specification](https://agentskills.io/specification)
- [Example Skills](https://github.com/anthropics/skills)
- [skills-ref Library](https://github.com/agentskills/agentskills)
