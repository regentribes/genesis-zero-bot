# Smolvm Portable Microvm Runtime

smolvm is a CLI tool for managing and running custom Linux virtual machines locally.
Sub-second cold start, cross-platform (macOS, Linux).
Elastic memory usage, hardware isolation via hypervisor.
Single file artifact (.smolmachine) for portability and rehydration on any supported platform.

Install command:
```bash
curl -sSL https://smolmachines.com/install.sh | bash
```

Repository is smol-machines/smolvm on GitHub.

Capability 1 is sandboxing untrusted code.
Run untrusted programs in a hardware-isolated VM.
Host filesystem, network, and credentials separated by a hypervisor boundary.
Network is off by default by default.
Untrusted code cannot phone home.
Egress control via --allow-host flag to permit specific hosts only.

Capability 2 is portable executables.
Turn any workload into a self-contained binary.
All dependencies are pre-baked.
No install step, no runtime downloads.
Boots in under 200ms.

Capability 3 is persistent development machines.
Create, stop, start machines.
Installed packages survive restarts.

Capability 4 is secure git and SSH.
Forward SSH agent into VM without exposing keys to guest.
Hypervisor enforces that private keys cannot be extracted from inside the VM.
Requires SSH agent running on host (ssh-add -l to check).

Capability 5 is declarative environments via Smolfile.
Smolfile is a TOML file for reproducible VM configuration.
Fields: image, net, network.allow_hosts, dev.init, dev.volumes, auth.ssh_agent.

Each workload gets real hardware isolation.
Own kernel on Hypervisor.framework (macOS) or KVM (Linux).
libkrun VMM with custom kernel (libkrunfw).
No daemon process.
VMM is a library linked into the smolvm binary.

Defaults: 4 vCPUs, 8 GiB RAM.
Memory is elastic via virtio balloon.
Host only commits what guest actually uses and reclaims the rest automatically.
vCPU threads sleep in hypervisor when idle.
Over-provisioning has near-zero cost.
Override with --cpus and --mem.

Images use the OCI format.
Same open standard Docker uses.
Any image on Docker Hub, ghcr.io, or other OCI registries can be pulled and booted as a microVM.
No Docker daemon required.

smolvm: VM per workload, hardware isolation, less than 200ms boot, library (libkrun), embeddable SDK, portable .smolmachine.

Containers: namespace (shared kernel), 100ms boot, daemon required, no hardware isolation.

Colima: namespace (1 VM), 15 to 30 seconds boot, daemon.

QEMU: separate VM, seconds boot, process.

Firecracker: separate VM, less than 125ms boot, process.

Kata: VM per container, 500ms boot, runtime stack.

macOS Apple Silicon hosts arm64 Linux guests.
macOS 11 plus required.

macOS Intel hosts x86_64 Linux guests.
macOS 11 plus (untested).

Linux x86_64 hosts x86_64 Linux guests.
Requires KVM (/dev/kvm).

Linux aarch64 hosts aarch64 Linux guests.
Requires KVM (/dev/kvm).

Network is opt-in (--net on machine create).
TCP and UDP only, no ICMP.

Volume mounts: directories only, no single files.

macOS: binary must be signed with Hypervisor.framework entitlements.

--ssh-agent requires SSH_AUTH_SOCK set on host.

GPU support is under development in a separate branch.

Secure sandboxing for community-developed code.
Portable tool distribution without dependency hell.
Air-gapped deployment of community tools.
Isolated testing environments for agricultural IoT software.
Local development matching production edge deployment.
Safe execution of untrusted third-party tools for land management.

System (metaphor for an integrated whole or network):

Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): 



145 111 061

