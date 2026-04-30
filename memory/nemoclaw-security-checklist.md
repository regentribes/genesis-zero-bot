# NemoClaw Security Baseline Checklist

Based on the NemoClaw project structure and DeepWiki documentation analysis.

---

## 1. Installation & Runtime Security

### Pre-Install Checks
- [ ] Verify hardware meets minimum requirements (8GB RAM minimum to avoid OOM during image push)
- [ ] Confirm Ubuntu 22.04 LTS or later
- [ ] Verify Node.js 20+ and npm 10+ installed
- [ ] Confirm Docker is installed and running
- [ ] Verify OpenShell is installed

### Installation Script Security (`install.sh`)
- [ ] Script uses HTTPS for downloads (nvm, Ollama)
- [ ] SHA256 integrity check on nvm installer
- [ ] Version gating: Node.js >=20, npm >=10
- [ ] Runtime verification after installation
- [ ] PATH management documented for shell profile

---

## 2. Sandbox Isolation Layers

### Network Policy
| Control | Status | Notes |
|---------|--------|-------|
| Default deny all egress | ✅ | Blocks unauthorized outbound connections |
| Per-endpoint allowlist | ✅ | Only approved hosts accessible |
| TLS termination | ✅ | `tls: terminate` on enforced endpoints |
| Method restrictions | ✅ | e.g., GET-only for CDN, full for APIs |
| Hot-reloadable | ✅ | Can update at runtime via `openshell policy set` |

**Approved Endpoints (baseline):**
- `api.anthropic.com:443` - Claude API
- `integrate.api.nvidia.com:443` - NVIDIA inference
- `inference-api.nvidia.com:443` - NVIDIA inference
- `github.com:443` / `api.github.com:443` - GitHub access
- `build.nvidia.com` - NVIDIA API key management

### Filesystem Policy
| Control | Status | Notes |
|---------|--------|-------|
| Read-only system dirs | ✅ | `/usr`, `/lib`, `/proc`, `/etc` |
| Read-write sandbox | ✅ | `/sandbox`, `/tmp` only |
| Creation-locked | ✅ | Locked at sandbox creation |

### Process Policy
| Control | Status | Notes |
|---------|--------|-------|
| Run as non-root | ✅ | `run_as_user: sandbox`, `run_as_group: sandbox` |
| Landlock enabled | ✅ | `compatibility: best_effort` |
| Privilege escalation blocked | ✅ | Dangerous syscalls blocked |
| seccomp enabled | ✅ | Part of the sandbox profile |

### Inference Policy
| Control | Status | Notes |
|---------|--------|-------|
| No direct API calls | ✅ | All calls routed through OpenShell gateway |
| Transparent to agent | ✅ | Agent uses `inference.local` |
| Hot-reloadable | ✅ | Can switch providers at runtime |

---

## 3. Container Security (Dockerfile)

### Image Hardening
- [ ] Non-root user (`sandbox` user created)
- [ ] Minimal base image (`node:22-slim`)
- [ ] No unnecessary packages installed
- [ ] Filesystem permissions set (`chmod 700` on `.openclaw`)
- [ ] OpenClaw config written with `0600` permissions
- [ ] Plugin installed with `--omit=dev`

### Credentials Management
- [ ] No API keys in image (uses `openshell-managed`)
- [ ] Provider config routes through `inference.local`
- [ ] Credentials injected at runtime by OpenShell

---

## 4. Policy Management

### Baseline Policy (`openclaw-sandbox.yaml`)
- [ ] Version defined (`version: 1`)
- [ ] Deny-by-default principle
- [ ] Binary restrictions per policy
- [ ] Endpoint allowlisting with enforcement

### Preset Policies (Optional Extensions)
| Preset | Purpose | Review Status |
|--------|---------|---------------|
| `discord.yaml` | Discord API + gateway + CDN | GET/POST allowed |
| `docker.yaml` | Docker Hub + NVIDIA registry | GET/POST allowed |
| `huggingface.yaml` | HF Hub + LLF + Inference | Pending review |
| `jira.yaml` | Jira REST API | Pending review |
| `npm.yaml` | npm registry | Pending review |
| `outlook.yaml` | Microsoft Graph API | Pending review |
| `pypi.yaml` | PyPI registry | Pending review |
| `slack.yaml` | Slack API | Pending review |
| `telegram.yaml` | Telegram Bot API | Pending review |

### Policy Update Flow
- [ ] Static fields: creation-locked (filesystem, process)
- [ ] Dynamic fields: hot-reloadable (network, inference)
- [ ] Migration command: `openclaw nemoclaw migrate`
- [ ] Runtime update: `openshell policy set`

---

## 5. Operational Security

### Access Control
- [ ] Sandbox requires operator approval for new endpoints
- [ ] TUI (`openshell term`) for monitoring and approvals
- [ ] Network requests surfaced for operator decision

### Monitoring
- [ ] Logs accessible via `nemoclaw <name> logs --follow`
- [ ] Status command: `nemoclaw <name> status`
- [ ] OpenShell sandbox list: `openshell sandbox list`

### Cleanup (`uninstall.sh`)
- [ ] Stops all services
- [ ] Removes sandboxes, gateways, providers
- [ ] Deletes Docker containers and images
- [ ] Removes state directories (`~/.nemoclaw`, `~/.config/openshell`)
- [ ] Optional: preserve Ollama models (`--keep-openshell`)

---

## 6. Known Security Considerations

### Alpha Status Warnings
- ⚠️ Project is alpha software
- ⚠️ Interfaces/APIs may change without notice
- ⚠️ Not yet production-ready

### Known Limitations
| Issue | Workaround |
|-------|-------------|
| <8GB RAM + image push = OOM | Add 8GB swap or use 16GB+ |
| cgroup v2 on Spark | `setup-spark` configures `cgroupns=host` |
| Docker permissions | `usermod -aG docker $USER` |

### Attack Surface Areas
1. **Installer script** - Verify HTTPS + integrity checks
2. **API key handling** - Keys never stored in image, runtime injection
3. **Network policy presets** - Review before enabling
4. **Remote deployment** (`nemoclaw deploy`) - Marked experimental

---

## 7. Verification Commands

```bash
# Check sandbox status
nemoclaw <name> status
openshell sandbox list

# View applied policies
openshell policy get <sandbox>

# Monitor network requests
openshell term

# Check logs
nemoclaw <name> logs --follow

# Verify filesystem restrictions
# (filesystem policy is creation-locked)
```

---

## 8. Security Review Checklist for Custom Policies

When adding custom network policies:

- [ ] **Principle of least privilege** - Only allow what's needed
- [ ] **Binary restrictions** - Specify which binaries can use each endpoint
- [ ] **Method restrictions** - GET-only where possible, avoid `method: "*"`
- [ ] **TLS verification** - Ensure `tls: terminate` for sensitive endpoints
- [ ] **Operator approval workflow** - Test the approval flow in TUI
- [ ] **Audit logging** - Verify logs capture policy decisions

---

*Generated from NemoClaw project analysis. Check https://docs.nvidia.com/nemoclaw/latest for latest documentation.*
