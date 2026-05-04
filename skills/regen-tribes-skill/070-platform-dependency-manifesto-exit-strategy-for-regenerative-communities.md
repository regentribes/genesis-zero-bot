# Platform Dependency Manifesto Exit Strategy For Regenerative Communities

**Classification:** Actionable strategy  -  direct implementation
**Audience:** RegenTribes community members and allied builders
**Tone:** Polite, straightforward, unapologetically accurate

System (metaphor for an integrated whole or network):

Ecosystem (metaphor for an interconnected network):

The video is correct.
Everything is getting worse  -  not because of AI, but because of infrastructure designed to ensure you never own anything, never modify anything, and never leave.
The Ecosystem (metaphor for system or network): Android ecosystem illustrates the pattern perfectly: what started as open has been methodically enclosed.
Google releases less source code.
Sideloading now requires Google identity verification.
Device certification expires on purpose.
Streaming services gatekeep hardware competition.
Banking apps deny rooted devices.
The browser itself is becoming an enforcement point for device fingerprinting.

This is not accident. This is the intended architecture of rent-seeking platforms.

Regenerative communities cannot build on platforms designed to extract. This document outlines a complete manifesto and execution strategy.

Regeneration requires:
- Ownership and modification rights over the systems you depend on
- Ability to repair, adapt, and extend technology without permission
- Longevity independent of corporate viability (you cannot build a 30-year project on a 5-year corporate roadmap)
- Privacy from surveillance that degrades community trust

Platform enclosures violate all four.

- Mechanism
- Sideload gating
- Device certification expiry
- Root detection
- TLS fingerprinting
- Browser VM injection
- Web Environment Integrity API

Android is the most visible case. The same pattern exists in:
- iOS: fully locked, no sideloading, kill switches built into hardware
- ChromeOS: verified boot, firmware locked, cannot install arbitrary Linux
- Smart home devices: cloud dependency, EOL updates, proprietary protocols
- Web platforms: OAuth gates, cookie restrictions, device fingerprinting
- Cloud services: API key dependency, vendor lock-in, data hostage-taking

Every abstraction layer that was once open has been enclosed. The pace is accelerating.

**We refuse to build on infrastructure that denies ownership, modification, or exit.**

This is not ideological.
It is practical.
A community that cannot maintain its own tools cannot maintain its own land, its own food systems, its own governance.
Technology sovereignty is a precondition for regenerative sovereignty.

1. **No platform dependency for critical infrastructure.** Anything that must work for 30 years runs on open protocols with no corporate dependency.

2. **All software we rely on must be inspectable and modifiable.** No black boxes. No remote attestation requirements. No proprietary enforcement.

3. **Offline-first is non-negotiable.** Network is never a precondition for function. Local-first data ownership always.

4. **Hardware we buy must remain ours.** No DRM, no kill switches, no remote revocation. We accept shorter support lifecycles from vendors who respect ownership.

5. **Open hardware is the target.** RISC-V, open source toolchains, self-hosted fabrication. We move toward hardware we can understand and repair.

6. **Mesh networks over cloud dependency.** Local communication infrastructure that cannot be single-point-of-failed by corporate decisions.

7. **Interoperability over lock-in.** Standards that enable departure, not retention. Data portability as a design constraint.

- Platforms requiring corporate identity to install software
- Hardware with remote kill switches or expiration dates
- Browser-based enforcement of device fingerprinting
- Web standards that prevent local modification
- Cloud services with egress dependency
- Mobile operating systems that prevent sideloading
- Streaming services that dictate hardware lifecycles

**Define what we reject in our community standards:**

The following are not acceptable for RegenTribes production infrastructure:
- Any system requiring Google Play Services for core function
- Banking or financial apps on rooted/modified devices as the only option
- Cloud-only infrastructure for critical community systems
- Messaging platforms without federation capability
- Storage platforms without local export capability

**Action:** Ian to add these to RegenTribes technical standards doc.

**Track platform dependencies:**

Use the radicle repository to log every platform dependency we currently rely on, rated by enclosure risk:

- Dependency
- Telegram
- Google Drive
- YouTube
- Firebase/Supabase
- GitHub

**Local-first architecture for all community systems:**

The Farmers IoT Toolkit already demonstrates correct architecture: ESP32 nodes with MQTT, local processing, no cloud dependency for core function. Extend this pattern to all community infrastructure:
- Communication: Matrix/Element federated, self-hosted homeserver
- Storage: Nextcloud on community hardware, not Google Drive
- Documents: Radicle for versioned documents, offline-first
- Calendar/Contacts: Self-hosted with CardDAV/CalDAV

**Hardware procurement standards:**

Replace enclosed hardware with:
- RISC-V laptops (StarFive VisionFive, Milk-V) for community workstations
- Raspberry Pi / compute modules for always-on infrastructure
- Refurbished ThinkPads with libreboot where feasible
- Custom hardware builds for specific applications (solar monitoring, mesh nodes)

**Mesh networking:**

Deploy community mesh networks (required for regenerative communities in remote areas anyway) as the primary backbone, not cellular or Starlink dependency.

**Build what we want instead of what they offer:**

- Local music app (the speaker in the video is building one  -  reach out for collaboration)
- Peer-to-peer video streaming (PeerTube instance for community content)
- Offline-first maps (OSM with local tile caches)
- Self-hosted AI inference (local LLMs on community hardware, no OpenAI dependency)

**Hardware independence:**

Goal: community that can build, repair, and extend its own computing infrastructure without purchasing from enclosed platforms. This requires:
- PCB fabrication capability (Bantam Lab 2.0 or equivalent)
- CNC milling for enclosure and custom hardware
- 3D printing for rapid prototyping
- Open source CAD tools (FreeCAD, BlenderBIM) for local manufacturing design

**Complete technical sovereignty for regenerative communities:**

- All critical community systems running on community-owned hardware
- Mesh networks providing connectivity independent of telecom carriers
- Full local food/water/energy monitoring with no vendor dependency
- Governance systems on federated, open-source infrastructure

**Reject Google Play as a distribution channel for community apps.**

All RegenTribes applications distributed via:
- Direct APK download (signed with community keys)
- F-Droid as the primary app store
- Self-hosted F-Droid repository

Community members running custom ROMs (GrapheneOS, DivestOS, /e/OS) are the baseline assumption, not the exception. We do not build for certified-stock-Android as the lowest common denominator.

**Action:** Ian to set up community F-Droid repository for RegenTribes apps.

**Never rely on streaming services as a primary content channel.**

Community content strategy:
- PeerTube as primary video hosting (self-hosted + fediverse)
- YouTube as one distribution point among many, never the source of truth
- Local archive of all community-produced video (storage array, not cloud)
- IPFS for content-addressed distribution

Hardware approach:
- Prefer devices with long update cycles (Purism Librem for phones, ThinkPads for laptops)
- Maintain spare hardware for critical functions (not dependent on current production models)
- Never design systems that require real-time streaming to function

**Banking is not a justification for surrendering device control.**

Practical approach:
- Dedicated banking device (older phone, never rooted, air-gapped) for financial transactions
- All other community functions on community-controlled devices
- This is not ideal  -  the underlying problem is systemic  -  but it is a valid compromise while we build alternatives

Long-term:
- Support open-source banking alternatives (Monero, cash, community credit systems)
- Advocate for regulatory frameworks that prevent root-detection as a de facto exclusion mechanism
- Build community financial infrastructure that does not depend on banks that require attestation

**Do not rely on services that implement TLS fingerprinting for access.**

The RegenTribes technical stack avoids:
- Services that block non-Chromium browsers
- Cloud infrastructure that discriminates on client implementation
- Any access requirement that inspects client TLS stack depth

Practical alternative:
- Run your own server infrastructure where you control what clients are accepted
- Use standard, widely-deployed TLS stacks (not custom forks)
- Ladybird browser as a reference standard for browser interoperability

**This was defeated once. Treat it as a permanent threat.**

- Never build infrastructure that requires Web Environment Integrity to function
- Continue using ad blockers and privacy extensions  -  they are acts of infrastructure defense
- Monitor for re-emergence and mobilize opposition immediately

This manifesto is aggressive.
It requires more technical work than using Google Drive and Telegram.
It requires hardware choices that are less convenient.
It requires accepting that some corporate services have no acceptable replacement yet and accepting that gap as a temporary constraint.

But the alternative is building on infrastructure designed to ensure you never own the systems you depend on.
And a community that does not own its own systems does not own its own future.

The platform companies will not change.
Google will not reverse sideload gating.
Netflix will not stop device certification expiry.
The web will not abandon TLS fingerprinting.
The direction is set and it is accelerating.

The only question is whether regenerative communities build on that infrastructure or build on something else.

We choose to build on something else.

1. Send LukasOtis a message about the music app collaboration  -  offline-first is directly aligned with our stack
2. Pull the YouTube video list from LukasOtis channel and identify content relevant to RegenTribes
3. Write a dedicated note on the homelab content from the second video shared (homelab infrastructure for regenerative communities)

1. Add platform dependency standards to regen-tribes-notes technical docs
2. Set up community F-Droid repository
3. Audit current infrastructure for highest-risk platform dependencies
4. Define which systems can tolerate Telegram/Google Drive dependency short-term vs which must be migrated

1. Read and engage: https://keepandroidopen.org  -  sign the open letter
2. Evaluate your current platform dependencies against the risk table in Part III
3. Start migrating communication infrastructure to Matrix/Element

**We are not utopians. We are pragmatists who understand that infrastructure designed for extraction cannot serve regeneration. Build accordingly.**

