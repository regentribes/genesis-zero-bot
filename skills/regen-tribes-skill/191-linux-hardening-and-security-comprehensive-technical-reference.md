# Linux Hardening And Security Comprehensive Technical Reference

System (metaphor for an integrated whole or network):

Linux security is a layered discipline spanning kernel hardening, system configuration, access control, and operational practices.

This note documents the hardening landscape from kernel exploitation research to automated Ansible-based hardening.

The goal is practical security that regenerative community infrastructure can implement.

The Linux kernel is the foundation of system security.

Kernel exploits can bypass all security mechanisms.

Understanding exploits is essential for defense.

The xairy/linux-kernel-exploitation repository documents attack techniques.

Class 1 is kernel heap exploitation.
Heap layout manipulation.
Use-after-free in kernel heap.
Double-free vulnerabilities.

Class 2 is kernel stack exploitation.
Stack buffer overflow.
Stack canaries bypass.
Return-oriented programming.

Class 3 is kernel mutex exploits.
Use-after-free on mutex.
Race conditions in syscalls.
Concurrent access vulnerabilities.

Class 4 is bypass techniques.
SMEP and SMAP bypass.
KASLR bypass.
KPTI bypass.
DEP and PAN emulation.

Mechanism 1 is kernel isolation.
Kernel page table isolation (KPTI).
Supervisor Mode Access Prevention (SMAP).
Supervisor Mode Execution Prevention (SMEP).

Mechanism 2 is hardening options.
Memory layout randomization.
Stack protection.
Heap hardening.

Mechanism 3 is access control.
Capabilities bounding.
Secure level.
Mode bits.

Kpatch applies patches without reboot.
Ksplice was the original implementation.
Kpatch is the upstream solution.
Kpatch enables immediate security response.

K Graft is another livepatching solution.
Automatic updates without reboots.
Security patches applied immediately.
Downtime eliminated for security patches.

Kernel address sanitizer (KASAN) detects memory errors.
KASAN detects use-after-free.
KASAN detects out-of-bounds access.
KASAN is for kernel development only.

Kernel address sanitizer infrastructure (KASAN) works during development.
Production kernels do not run KASAN.
Runtime detection requires different tools.

The trimstray/linux-hardening-checklist is a comprehensive operational security guide.

The guide covers 100+ security controls.

Controls are categorized and prioritized.

Each control has verification steps.

Categories include physical, boot, network, services, logging, and monitoring.

Control 1 is boot order protection.
Set BIOS password.
Disable boot from external devices.
Enable trusted boot.

Control 2 is disk encryption.
LUKS encryption for all disks.
Keys stored securely.
Encrypted swap configured.

Control 3 is secure erase.
Secure deletion of old data.
Disk wiping procedures.
Media sanitization.

Control 1 is UEFI Secure Boot.
Enable UEFI Secure Boot.
Sign bootloaders and kernels.
Manage Secure Boot keys.

Control 2 is GRUB security.
GRUB password protection.
Disable boot menu timeout.
Secure boot parameters.

Control 3 is kernel parameters.
Disable USB auto-mount.
Enable kernel lockdown mode.
Set secure kernel parameters.

Control 1 is firewall configuration.
iptables or nftables rules.
Default deny policy.
Only necessary ports open.

Control 2 is network hardening.
Disable IP forwarding.
Disable send redirects.
Disable source routing.

Control 3 is SSH hardening.
Disable root login.
Use key-based authentication.
Change default port.

Control 4 is wireless security.
Disable wireless if not needed.
Use strong encryption.
Hide SSID broadcast.

Control 1 is unnecessary services.
Disable unused services.
Check running services regularly.
Use systemctl to manage.

Control 2 is service permissions.
Run services with minimal privileges.
Use systemd isolation.
Configure security contexts.

Control 3 is package management.
Enable automatic security updates.
Use only trusted repositories.
Verify package signatures.

Control 1 is centralized logging.
Remote syslog configuration.
Log rotation policies.
Secure log storage.

Control 2 is audit rules.
Configure auditd.
Monitor privileged commands.
Track file access.

Control 3 is intrusion detection.
AIDE for file integrity.
RKHunter for rootkits.
Fail2ban for brute force.

The dev-sec/ansible-collection-hardening automates security hardening.

Ansible playbooks apply hardening automatically.

The collection covers multiple operating systems.

Consistent security across deployments.

The collection is open source and community-maintained.

System 1 is Debian and Ubuntu.
Package updates.
Firewall configuration.
SSH hardening.
Fail2ban installation.
AIDE setup.

System 2 is Red Hat and CentOS.
Security-focused package updates.
Firewall configuration.
SSH hardening.
Audit rules.

System 3 is Amazon Linux.
AWS-specific hardening.
Cloud-native security.
AWS security tools integration.

Module 1 is authentication.
Disable password authentication.
Enable public key authentication.
Configure allowed users.
Set key strength requirements.

Module 2 is connection limits.
MaxAuthTries configuration.
LoginGraceTime configuration.
ClientAliveInterval configuration.

Module 3 is encryption.
Configure allowed ciphers.
Configure allowed MACs.
Configure allowed key exchanges.

Module 1 is iptables configuration.
Default deny policy.
Allow established connections.
Rate limiting rules.

Module 2 is ports management.
Only necessary ports open.
Close unused ports.
Configure service-specific rules.

Module 3 is logging.
Log dropped packets.
Configure log levels.
Centralized logging.

Module 1 is package management.
Enable automatic security updates.
Configure unattended upgrades.
Lock unused packages.

Module 2 is kernel parameters.
Sysctl configuration.
Network hardening.
Memory protection.

Module 3 is user management.
Password policy enforcement.
Lock inactive accounts.
Remove root access.

Module 1 is auditd configuration.
Configure audit rules.
Monitor privileged commands.
Track file changes.

Module 2 is file integrity.
AIDE installation.
Baseline creation.
Scheduled checks.

Module 3 is log management.
Centralized logging.
Log rotation.
Secure log storage.

The practical guide provides detailed hardening procedures.

The guide is intended for production systems.

Every recommendation has rationale.

Every procedure is tested.

Step 1 is firewall selection.
Choose iptables or nftables.
nftables is the modern choice.
Configure default policies.

Step 2 is rule creation.
Allow necessary services.
Block unnecessary traffic.
Rate limit connections.

Step 3 is verification.
Test firewall rules.
Verify blocking.
Monitor for bypass attempts.

Step 1 is key configuration.
Generate strong keys.
Configure authorized keys.
Disable empty passwords.

Step 2 is daemon configuration.
Edit sshd_config.
Disable root login.
Disable password authentication.

Step 3 is access control.
Allow specific users.
Deny by default.
Use AllowUsers and AllowGroups.

Step 4 is connection limits.
MaxStartups configuration.
LoginGraceTime configuration.
ClientAliveInterval configuration.

Step 1 is auditd installation.
Install auditd package.
Configure audit rules.
Start and enable auditd.

Step 2 is rule definition.
Monitor system calls.
Track file access.
Log privileged commands.

Step 3 is log management.
Configure log rotation.
Secure audit logs.
Monitor for anomalies.

The githubixx/ansible-role-harden-linux provides Ansible hardening.

The role is idempotent.

The role is well-documented.

The role covers multiple distributions.

The role uses sensible defaults.

Variable 1 is harden_linux_kernel_parameters.
Boolean to enable kernel hardening.
Sysctl configuration.
Network parameters.

Variable 2 is harden_linux_users.
Boolean to enable user hardening.
Password policies.
User restrictions.

Variable 3 is harden_linux_firewall.
Boolean to enable firewall.
iptables or nftables.
Service-specific rules.

Task 1 is system update.
Update package cache.
Upgrade all packages.
Configure automatic updates.

Task 2 is kernel hardening.
Apply sysctl configuration.
Enable kernel protections.
Configure network settings.

Task 3 is user hardening.
Configure PAM.
Set password policies.
Restrict sudo access.

Task 4 is firewall configuration.
Install firewall.
Configure default policies.
Add service rules.

Handler 1 is restart firewall.
Restart iptables or nftables.
Apply new rules.
Verify connectivity.

Handler 2 is reload sysctl.
Apply new kernel parameters.
Verify no errors.
Test network connectivity.

The EmreOvunc/Linux-System-Management-Scripts-Tricks provides practical scripts.

Scripts cover system management tasks.

Scripts cover security hardening.

Scripts are tested in production.

Scripts are well-documented.

Category 1 is system information.
System inventory scripts.
Hardware information gathering.
Software inventory.

Category 2 is network diagnostics.
Network scanning scripts.
Connection diagnostics.
Traffic analysis.

Category 3 is security scripts.
User management scripts.
File permission scripts.
Service hardening scripts.

Usage 1 is system inventory.
Run scripts to document systems.
Track installed software.
Identify security gaps.

Usage 2 is automated hardening.
Execute security scripts.
Apply hardening consistently.
Verify applied changes.

Usage 3 is monitoring.
Set up periodic checks.
Monitor for changes.
Alert on anomalies.

The Linux-Security-and-Hardening-Security-Guide provides comprehensive hardening.

The guide covers Ubuntu, Debian, CentOS, and RHEL.

The guide is beginner-friendly.

The guide provides step-by-step instructions.

Topic 1 is initial setup.
Fresh install security.
Minimal installation.
Repository configuration.

Topic 2 is user management.
Root account security.
Sudo configuration.
Password policies.

Topic 3 is network security.
Firewall configuration.
SSH hardening.
Network parameters.

Topic 4 is file system security.
File permissions.
ACLs.
Encryption.

Topic 5 is monitoring.
Log management.
Intrusion detection.
Alerting.

The imthenachoman/How-To-Secure-A-Linux-Server is a practical hardening guide.

The guide is updated regularly.

The guide covers basics to advanced.

The guide includes verification steps.

Step 1 is system updates.
Update all packages.
Enable automatic updates.
Configure security repositories.

Step 2 is user security.
Create non-root user.
Configure sudo access.
Disable root SSH.

Step 3 is SSH security.
Use key-based auth.
Change default port.
Configure firewall.

Step 4 is firewall setup.
Install ufw or iptables.
Configure default deny.
Allow SSH and essential services.

Step 1 is fail2ban.
Install fail2ban.
Configure SSH protection.
Monitor banned IPs.

Step 2 is unattended upgrades.
Install unattended-upgrades.
Configure automatic security updates.
Monitor update status.

Step 3 is logwatch.
Install logwatch.
Configure log monitoring.
Review daily reports.

Step 4 is AIDE.
Install AIDE.
Create baseline database.
Schedule integrity checks.

Step 1 is auditd.
Install and configure auditd.
Define audit rules.
Monitor system events.

Step 2 is SELinux or AppArmor.
Enable SELinux on RHEL/CentOS.
Configure AppArmor on Ubuntu/Debian.
Set enforcing mode.

Step 3 is network hardening.
Configure sysctl parameters.
Enable reverse path filtering.
Disable ICMP redirects.

Step 4 is kernel hardening.
Install kernel hardening parameters.
Configure kernel lockdown.
Use secure kernel parameters.

Control 1 is PAM configuration.
pam_unix for authentication.
pam_wheel for group access.
pam_limits for resource limits.

Control 2 is sudo configuration.
NOPASSWD for specific commands.
Require password for admin.
Log sudo commands.

Control 3 is SSH certificates.
Certificate-based authentication.
No key management needed.
Centralized CA.

Control 1 is mounts.
Noexec on /tmp.
Nosuid on /var.
Read-only /boot when possible.

Control 2 is permissions.
Use 0644 for regular files.
Use 0755 for directories.
Remove world-writable files.

Control 3 is ACLs.
Use getfacl to view.
Use setfacl to modify.
Default ACLs for directories.

Control 1 is sysctl parameters.
net.ipv4.conf.all.rp_filter.
net.ipv4.tcp_syncookies.
net.ipv4.conf.all.accept_redirects.

Control 2 is firewall rules.
Default INPUT DROP.
Allow established connections.
Allow specific ports.

Control 3 is wireless.
Disable unused wireless.
Use strong encryption.
Configure network manager securely.

Control 1 is syslog.
Configure remote logging.
Protect log files.
Rotate logs regularly.

Control 2 is auditd.
Monitor privileged commands.
Track file access.
Log security events.

Control 3 is log analysis.
Use logwatch for reports.
Use aureport for summary.
Monitor for anomalies.

NixOS declarative configuration enables reproducible security.

System state is fully specified in Nix language.

Rollback to secure state is always possible.

Configuration versioning provides audit trail.

Option 1 is boot security.
Secure boot configuration.
GRUB password protection.
Kernel lockdown mode.

Option 2 is network security.
Firewall configuration declarative.
Sysctl parameters in configuration.
Network namespace isolation.

Option 3 is user security.
Users declared in configuration.
Password policies declarative.
SSH keys managed in config.

Option 4 is service security.
Services declared in configuration.
Sandboxing via systemd.
Access control declarative.

Module 1 is security.pam_enable.
PAM configuration in Nix.
 loginLimits module.
Access control module.

Module 2 is services.auditd.
Auditd service declaration.
Audit rules in configuration.
Log configuration.

Module 3 is environment variables.
Secure environment settings.
Noexec for /tmp.
Secure PATH.

Approach 1 is manual hardening.
Follow guides step by step.
Apply changes manually.
Comprehensive but time-consuming.

Approach 2 is Ansible automation.
Use dev-sec collection.
Apply changes automatically.
Consistent and repeatable.

Approach 3 is NixOS declarative.
Declare configuration in Nix.
Apply with nixos-rebuild.
Reproducible and versioned.

Approach 4 is infrastructure as code.
Combine Ansible with Git.
Store configuration in version control.
Audit trail for changes.

Step 1 is configuration review.
Check applied settings.
Verify against hardening guide.
Document any deviations.

Step 2 is vulnerability scanning.
Use lynis for Linux scanning.
Use chkrootkit for rootkits.
Use rkhunter for malware.

Step 3 is penetration testing.
Test from external perspective.
Test local privilege escalation.
Test network services.

Lynis is a security auditing tool for Linux and Unix.

Lynis checks system for security issues.

Lynis provides hardening recommendations.

Lynis is open source.

Categories include system utilities, boot, kernel, logging, and services.

AIDE monitors file system changes.

AIDE creates a database of file characteristics.

AIDE detects unauthorized modifications.

AIDE should run regularly.

Baseline database must be created after hardening.

Stack 1 is NixOS for declarative configuration.
Reproducible security.
Rollback capability.
Version-controlled configuration.

Stack 2 is dev-sec Ansible for automation.
Consistent hardening.
Automated application.
Idempotent changes.

Stack 3 is auditd and AIDE for monitoring.
File integrity monitoring.
Security event auditing.
Anomaly detection.

Priority 1 is access control.
SSH hardening first.
Firewall configuration.
User management.

Priority 2 is monitoring.
Install auditd.
Configure logwatch.
Set up AIDE baseline.

Priority 3 is automation.
Deploy Ansible hardening.
Apply automatically.
Verify with lynis.

Priority 4 is verification.
Regular security scans.
Penetration testing.
Configuration review.

Operation 1 is regular updates.
Enable automatic security updates.
Test updates before production.
Maintain update schedule.

Operation 2 is monitoring.
Review logs daily.
Check for anomalies.
Respond to alerts.

Operation 3 is testing.
Regular vulnerability scans.
Annual penetration testing.
Post-incident analysis.



Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): 

111 156 165

