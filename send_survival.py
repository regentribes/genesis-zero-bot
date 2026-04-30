#!/usr/bin/env python3
import subprocess
import json
import time

BOT_TOKEN = "8602786638:AAGqOq4nxRpNZtEePC4wmH9sVzvvKlfOz9o"
CHAT_ID = "-1001921904187"
THREAD_ID = "2538"

def send(text, seq=None):
    payload = {
        "chat_id": CHAT_ID,
        "text": text,
        "parse_mode": "HTML",
        "message_thread_id": int(THREAD_ID),
        "link_preview_options": {"is_disabled": True}
    }
    cmd = [
        "curl", "-s", "-X", "POST",
        f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage",
        "-H", "Content-Type: application/json",
        "-d", json.dumps(payload)
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    resp = json.loads(result.stdout)
    if resp.get("ok"):
        msg_id = resp["result"]["message_id"]
        suffix = f" (seq {seq})" if seq else ""
        print(f"  OK message_id={msg_id}{suffix}")
    else:
        print(f"  ERROR: {resp}")
    return resp.get("ok", False)

def chunk(text, label):
    ok = send(text, seq=label)
    if not ok:
        print(f"Failed at {label}")
        exit(1)
    time.sleep(1.2)

# ─── CHUNK 1: Header + E1-E3 ────────────────────────────────────────────────
chunk("""<b>ASD-STE100 — COMMUNITY SURVIVAL ANALYSIS</b>

<b>EXTERNAL SHOCKS — ACTION STEPS</b>

<b>E1. Global economic collapse</b>

- E1-S1: Identify the 20 items that the community cannot make. These are items such as seed, salt, fuel, medicine, tool, wire.
- E1-S2: Store 90-day supply of each item at the site.
- E1-S3: Define a barter protocol. Assign a trade value in labor-hour. Get a signed agreement from each member.
- E1-S4: Open trade accounts with 3 local farms outside the community. Do this before a crisis. Relationships take time.
- E1-S5: Convert liquid reserve into physical asset. Buy tool, seed, medicine, fuel. Do not buy digital currency.
- E1-S6: Assign 1 person to monitor commodity price and logistics choke point each week. This is a standing role.

<b>E2. Energy grid failure (more than 2 weeks, regional)</b>

- E2-S1: Size solar-plus-battery system for 100% of critical load. Critical load is water pump, comms station, cold storage, basic light.
- E2-S2: Install minimum 10 kWh battery storage per 20 people. For 100 people, install 50 kWh.
- E2-S3: Keep 60-day diesel reserve for backup generator. Store fuel treatment to prevent degradation.
- E2-S4: Label every critical load circuit in the electrical panel. Use clear text. Example: water, comms, cold, light.
- E2-S5: Train 4 people to isolate and reroute power without digital tool. Draw a diagram. Laminate it. Mount it near panel.
- E2-S6: Test full grid-off operation for 48 hours every 6 months. Log what failed. Fix the failure.

<b>E3. Water supply disruption (more than 1 week, municipal)</b>

- E3-S1: Drill or sink a bore to access groundwater table. Or dig a well near a reliable water source.
- E3-S2: Install a hand pump as primary. Install an electric pump as secondary. A hand pump works when power is gone.
- E3-S3: Install rain water collection on all roof surface. Store minimum 50 000 L for 100 people for 30 days.
- E3-S4: Install a 3-stage filter between storage and consumption point. Stage 1 is sediment. Stage 2 is carbon. Stage 3 is UV.
- E3-S5: Store water purification tablet. Use sodium hypochlorite. Store 1 tablet per 20 L. Store minimum 2000 tablet.
- E3-S6: Assign a water team of 3 people. Rotate every 3 months. Log all maintenance in a physical logbook.
- E3-S7: Never let storage fall below 50% capacity. Refill on schedule. Do not refill on demand.""", "E1-E3")

# ─── CHUNK 2: E4-E5 ─────────────────────────────────────────────────────────
chunk("""<b>E4. Food logistics collapse (more than 2 weeks, no resupply)</b>

- E4-S1: Calculate daily calorie need. For 100 people at 2200 kcal with 1.2 reserve factor: 264 000 kcal per day.
- E4-S2: Store 30-day emergency calorie in sealed bucket. Use rice, bean, oat, salt, oil. Total: 7 920 000 kcal.
- E4-S3: Establish active food production. Minimum 400 sqm growing space per 100 people. Use space-efficient crop: leafy green, bean, squash.
- E4-S4: Grow 3 crop families in rotation. Failure of one family does not collapse supply.
- E4-S5: Preserve surplus. Dry, pickle, or can enough to cover 60 days of off-season eating.
- E4-S6: Keep 10 laying hen per 25 people. Keep 3 rabbit per 25 people for protein redundancy.
- E4-S7: Store 5 kg heritage seed per major crop type. Keep cool, dry, dark. Replace every 2 year.

<b>E5. Communication failure (internet down more than 5 days)</b>

- E5-S1: Buy 4 ham radio. Use Baofeng UV-5R or equivalent. Register 2 licensed operator in the community.
- E5-S2: Install mesh network node on rooftop. Use LibreMesh or equivalent. No internet dependency. Peer-to-peer only.
- E5-S3: Store printed contact list. Include name, skill, medical condition, family contact outside the region. Update each month.
- E5-S4: Store printed essential document. Include water map, electric diagram, governance rule, meeting protocol.
- E5-S5: Store offline database of local resource on paper. Include neighbor, farm, supplier. Update each quarter.
- E5-S6: Assign radio watch schedule. One person monitors for 4 hours each day during crisis. Rotate through all member.""", "E4-E5")

# ─── CHUNK 3: E6-E7 ─────────────────────────────────────────────────────────
chunk("""<b>E6. Climate extreme event (flood, drought, fire)</b>

- E6-S1: Conduct land assessment. Map flood zone. Rate fire risk. Measure water table depth. Hire professional if needed.
- E6-S2: Establish firebreak. Clear 10 m vegetation-free zone around all structure.
- E6-S3: Build on high ground if possible. If site is flood-prone, elevate critical infrastructure above 100-year flood line.
- E6-S4: Have 2 exit route from property. If one is blocked, use the other.
- E6-S5: Install swale and berm on contour line. This slows runoff and recharge groundwater. Design before wet season.
- E6-S6: Store 2-week supply cache at secondary location outside primary property. Use trusted neighbor house.

<b>E7. Weather warfare (persistent drought or flood)</b>

- E7-S1: Build groundwater access as primary water source. Do not depend on rainfall pattern.
- E7-S2: Establish food production in greenhouse environment. Use controlled water supply.
- E7-S3: Monitor regional weather pattern for anomaly that does not match seasonal norm. Document and report.
- E7-S4: Join regional weather monitoring network. Use community weather station. Cross-reference data.
- E7-S5: Store 90-day food reserve regardless of current production. Weather warfare works slowly. You need buffer time.""", "E6-E7")

# ─── CHUNK 4: E8-E9 ─────────────────────────────────────────────────────────
chunk("""<b>E8. Pandemic or disease outbreak</b>

- E8-S1: Store basic medical supply. 50 set glove, 20 N95 mask, 10 bottle iodine solution, basic wound care for 100 people for 60 days.
- E8-S2: Define isolation protocol. Designate 1 building as quarantine space. Define air-seal requirement. Assign 2 people to care for sick.
- E8-S3: Document medical skill of member. Note who has first aid training. Note who has clinical experience. Post list in common area.
- E8-S4: Store 30-day supply of ongoing prescription medicine for member who need it.
- E8-S5: Establish telemedicine connection before crisis. Have contracted phone or video access to doctor. Test each quarter.

<b>E9. War spillover (local region becomes theater)</b>

- E9-S1: Identify nearest hospital, police, fire station. Note which route is likely blocked by terrain.
- E9-S2: Store 2-week supply cache at secondary site outside primary property.
- E9-S3: Mark all structure with GPS coordinate and physical sign readable from 200 m distance.
- E9-S4: Keep no weapon at site. This reduces targeting priority. You are not a military asset.
- E9-S5: Establish relationship with 3 person outside immediate region. They can receive message and relay if you go dark.""", "E8-E9")

# ─── CHUNK 5: E10 ────────────────────────────────────────────────────────────
chunk("""<b>E10. AI system failure (digital tool offline)</b>

- E10-S1: Store all critical document in physical form. Print. Laminate. Store in waterproof folder.
- E10-S2: Ensure all decision protocol work verbally without digital tool. Practice this each month. Run one meeting with no screen.
- E10-S3: Maintain financial record in physical ledger. Use double-entry. Reconcile each week.
- E10-S4: Store skill document as text. Not video. Write step-by-step instruction for all critical operation. Example: water filter clean, seed save, tool sharpen.""", "E10")

# ─── CHUNK 6: I1-I3 ─────────────────────────────────────────────────────────
chunk("""<b>INTERNAL FAILURE — ACTION STEPS</b>

<b>I1. Funding loss (investor pulls out)</b>

- I1-S1: Store 6-month operating expense reserve in cash at all times. Never spend below this floor.
- I1-S2: Build 3 revenue stream that do not depend on single source. (a) Surplus food sale. (b) Skill-for-hire. (c) Product sale.
- I1-S3: Reduce fixed cost to minimum. Pay mortgage or rent, utility, insurance only. Avoid long-term contract you cannot exit.
- I1-S4: Maintain donor list of 20 person who have shown interest. Update contact status each quarter.
- I1-S5: Build community to generate own income by month 12. External funding is a bridge. Not a permanent structure.

<b>I2. Core leadership departure (1 to 2 key person exit)</b>

- I2-S1: Document every role and responsibility in writing. Not job description. Write actual step-by-step operational knowledge.
- I2-S2: Identify backup for every critical role. Name the person. Ensure they have been trained to do the work.
- I2-S3: Never let 1 person hold more than 2 critical role. The moment one person does water plus food plus construction, that is a single point of failure.
- I2-S4: Conduct succession planning session each 6 months. Simulate departure of top 3 most critical person. Walk through transition.
- I2-S5: Create founder manual. Write why decision was made. Write what was tried and failed. Write what the value is.

<b>I3. Social cohesion fracture (ideology clash, unresolved conflict)</b>

- I3-S1: Write conflict resolution protocol before any conflict happen. Define who facilitate. Define what the process is. Define escalation path. Get signed agreement from each member.
- I3-S2: Never let conflict go past 2 week without formal facilitated conversation. Small conflict become terminal when left to fester.
- I3-S3: Define red line that cannot be crossed. Example: violence, theft, malicious deception. Pre-agree consequence as a community.
- I3-S4: Hold monthly circle meeting. Optional. Informal. People can surface friction before it become conflict.
- I3-S5: Have external mediator on retainer. Someone outside the community you can call in for unresolved dispute.
- I3-S6: Define exit protocol. Define how someone leaves the community gracefully. Include how possession and account is handled.""", "I1-I3")

# ─── CHUNK 7: I4-I6 ─────────────────────────────────────────────────────────
chunk("""<b>I4. Competence gap (critical skill absent when needed)</b>

- I4-S1: Run skill audit each 3 months. Note who can do what, at what level. Post in common area.
- I4-S2: For each critical skill (water, food, medical, electric, conflict facilitation), identify minimum 3 competent person.
- I4-S3: Send at least 2 person to formal training for each critical skill each 18 months.
- I4-S4: Practice emergency drill where someone is absent. Example: simulate water system failure when water person is away.
- I4-S5: Maintain video library of skill. Film locally with own system. Not YouTube tutorial. Document your actual system.

<b>I5. Decision-making paralysis (consensus stall critical choice)</b>

- I5-S1: Define decision category. (a) Small decision: any individual makes. (b) Medium decision: require 3-person approval. (c) Large decision: require community vote with 48-hour deadline.
- I5-S2: Never allow unlimited consensus. Define maximum meeting time. After that time, decision default to person with most relevant expertise.
- I5-S3: Document all decision with rationale and dissent. Future member can understand why choice was made.
- I5-S4: If decision is blocked for more than 7 day, escalate to external facilitator. Do not let it sit.
- I5-S5: Hold weekly operational stand-up. 15 minute max. No exception. Decision that need to happen get identified and assigned in that meeting.

<b>I6. Member exodus (more than 20% leave in short period)</b>

- I6-S1: Run monthly headcount check. Know who is present. Know who is traveling. Know who is considering leaving.
- I6-S2: Have onboarding protocol so new member can contribute within 48 hour of arrival. Not full integration. Just contribution.
- I6-S3: Keep financial runway for 6 months even at reduced membership. Budget based on 80% capacity.
- I6-S4: Never let core function depend on newest member. Redundancy first. Growth second.""", "I4-I6")

# ─── CHUNK 8: I7-I9 ─────────────────────────────────────────────────────────
chunk("""<b>I7. Legal or regulatory pressure (land use, permit, zoning)</b>

- I7-S1: Retain land use attorney in year 1. Not after a problem. Before it. Pay for annual review.
- I7-S2: Ensure all structure meet local code OR stay below threshold that trigger inspection. Know the threshold.
- I7-S3: Document all operation as agricultural use (zoning-friendly) not residential or commercial if possible.
- I7-S4: Build relationship with local zoning officer. Have coffee. Introduce yourself. Understand their constraint.
- I7-S5: Keep legal entity (LLC or equivalent) separate from personal asset. Protect individual from liability.

<b>I8. Trust collapse (theft, betrayal, data exfiltration)</b>

- I8-S1: Pre-agree consequence for trust violation. Write it down. Get signature from every member.
- I8-S2: Define what is shared and what is private. Be explicit. Shared: resource, skill, schedule. Private: personal communication, personal device.
- I8-S3: Maintain financial transparency. All community expense visible to all member. Use physical board. Update each week.
- I8-S4: Conduct 6-month boundary review. Each person confirm they understand and agree to community norm.
- I8-S5: Store sensitive data off-site. Not on local server accessible to all. Example: contract, financial record.

<b>I9. Dependency on single person (critical system)</b>

- I9-S1: If any single person is the only one who know how to do something, that is a critical failure point.
- I9-S2: For every critical system: document it, train 2 others, test them independently.
- I9-S3: If you find a single-person dependency, address it within 30 day. Assign learning. Schedule training. Test the backup.
- I9-S4: Conduct single-point-of-failure audit each 6 months. Walk through every system. Ask: who is the only person?""", "I7-I9")

# ─── CHUNK 9: I10 ────────────────────────────────────────────────────────────
chunk("""<b>I10. Scope creep or project overwhelm</b>

- I10-S1: Define project scope in writing before starting. Write what you are building. Write what is explicitly out of scope.
- I10-S2: Run monthly review. Ask: are we still building what we said we would build? Are we adding thing not planned?
- I10-S3: Say no to request that are not in scope. Politely. Clearly. In writing. Use this text: "Good idea. Not in current scope. Note for phase 2."
- I10-S4: Limit active project to 3 at any time. Everything else wait in backlog.
- I10-S5: Track burnout signal. Skipped maintenance, missed meeting, short temper, declining participation. Address immediately. Do not ignore.""", "I10")

# ─── CHUNK 10: R1-R3 ─────────────────────────────────────────────────────────
chunk("""<b>RESOURCE SPECIFIC — ACTION STEPS</b>

<b>R1. Water source contamination or depletion</b>

- R1-S1: Test water source each quarter. Use lab test for bacteria, nitrate, heavy metal. Not just visual inspection.
- R1-S2: Install minimum 2 backup water source. Example: well plus rain water. Never single source.
- R1-S3: Install UV plus sediment filter system sized for 150% of daily consumption.
- R1-S4: Store 7 day of treated water in sealed container at all time. Rotation: use oldest first. Refill continuously.
- R1-S5: If contamination detected, switch to backup source immediately. Post public alert. Do not wait for confirmation.

<b>R2. Soil degradation or crop failure</b>

- R2-S1: Run soil test at start of each growing season. Measure NPK, pH, organic matter percent.
- R2-S2: Maintain 4-season crop rotation. Never plant same family in same bed 2 year running.
- R2-S3: Keep green manure or cover crop cycle. Do not leave bed empty. Plant mustard, clover, or legume between food crop.
- R2-S4: Build compost system to return organic matter. Target 50 kg compost per 100 sqm per year.
- R2-S5: Diversify variety. Grow 3 variety of each major crop. Not single type. If one fail, other survive.
- R2-S6: Save seed on-site from best-performing plant each season. Develop locally adapted seed stock over time.

<b>R3. Seed stock loss</b>

- R3-S1: Store seed in airtight container with desiccant in cool, dark location. Check viability each year. Use sprout test.
- R3-S2: Keep minimum 2 copy of each variety. One on-site. One at off-site location.
- R3-S3: Source seed from minimum 3 different supplier. Do not depend on single company.
- R3-S4: Prioritize open-pollinated or heritage variety. Not F1 hybrid that cannot be saved.
- R3-S5: Grow out seed stock each 2 year to maintain germination rate.""", "R1-R3")

# ─── CHUNK 11: R4-R6 ────────────────────────────────────────────────────────
chunk("""<b>R4. Energy storage failure (battery die, no backup)</b>

- R4-S1: Size battery bank for 3 day of full autonomy at minimum. Size for worst expected. Not optimal condition.
- R4-S2: Replace lead-acid battery each 5 year regardless of apparent condition. Internal degradation is invisible.
- R4-S3: Keep lithium replacement cell for critical system. 4 to 6 cell for comms backup.
- R4-S4: Maintain fuel generator as third fallback. Test each month. Run for 30 minute under load.
- R4-S5: Monitor battery health each week. Measure voltage, temperature, cycle count if available. Log result in physical book.

<b>R5. Tool or equipment breakdown (no repair capability)</b>

- R5-S1: Build workshop with basic tool. Multimeter, soldering iron, pipe wrench set, bearing puller, drill press, vise.
- R5-S2: Keep spare part inventory. Drive belt, seal, filter, fuse, spark plug, chain saw chain. Common failure item.
- R5-S3: Identify local repair person for each major equipment category. Tractor, generator, water pump. Have them on speed dial.
- R5-S4: Build 3-layer tool redundancy. (a) Primary tool in daily use. (b) Backup in storage. (c) Hand tool that substitute if both fail.
- R5-S5: Document repair procedure for top 10 most common failure. Laminate card on workshop wall.

<b>R6. Medical supply shortage</b>

- R6-S1: Store 90-day medical kit for 100 people. Wound care: sterile gauze, tape, saline, butterfly closure. Infection: antibiotic ointment, iodine. Pain: ibuprofen, paracetamol. GI: oral rehydration salt, loperamide. Allergy: antihistamine. Chronic: as needed per member.
- R6-S2: Train 4 person in wilderness first aid. 40-hour course. Recertify each 2 year.
- R6-S3: Maintain digital medical record offline. Age, condition, medication, allergy, emergency contact. Encrypted USB kept on person.
- R6-S4: Have telemedicine contract for remote medical consultation. Test each quarter to ensure it work.""", "R4-R6")

# ─── CHUNK 12: R7-R9 ─────────────────────────────────────────────────────────
chunk("""<b>R7. Construction material exhausted</b>

- R7-S1: Store material stockpile. 200 timber length, 50 sqm sheet material, 100 kg fastener, concrete mix for 2 cubic meter.
- R7-S2: Source local material. Stone, timber, sand. Do not depend on imported material that can be blocked.
- R7-S3: Build in modular way. Structure that can be disassembled and repurposed. Not single-use permanent build.
- R7-S4: Keep basic hand tool that work without power. Hand saw, hand drill, chisel set.

<b>R8. Fuel for transport or machinery unavailable</b>

- R8-S1: Convert primary vehicle to LPG or biodiesel where legal. Dual-fuel is best.
- R8-S2: Store 60-day fuel reserve in approved safety storage. Rotation to prevent degradation.
- R8-S3: Maintain 2 bicycle per 10 people plus cargo trailer as fallback transport.
- R8-S4: Keep manual tool for all agricultural work. Work does not stop if fuel run out.
- R8-S5: Have local supply chain. Fuel from nearest station less than 10 km. Know the owner.

<b>R9. Knowledge loss</b>

- R9-S1: Document everything as you do it. Not after the fact. During the process. Write while work is fresh.
- R9-S2: Hold weekly knowledge transfer session. One person teach another critical skill. Rotate so all knowledge spread.
- R9-S3: Store physical operation manual in common area. Laminate. Waterproof. Update when system change.
- R9-S4: Record decision rationale. Not just outcome. So future member understand why. Not just what.
- R9-S5: Do not allow single-person knowledge domain. If only one person know something, that is an emergency. Fix within 30 day.""", "R7-R9")

# ─── CHUNK 13: R10 ──────────────────────────────────────────────────────────
chunk("""<b>R10. Trade value collapse</b>

- R10-S1: Never depend on single trade relationship. Always maintain minimum 3 active exchange.
- R10-S2: Diversify skill that have trade value. Food production, water system knowledge, construction, medical, mechanical.
- R10-S3: Build reputation locally as reliable, quality-focused community. This is the most durable trade asset.
- R10-S4: Accept payment in good (barter) not just cash. Good more resilient to currency fluctuation.""", "R10")

# ─── CHUNK 14: A1-A4 ─────────────────────────────────────────────────────────
chunk("""<b>EXTERNAL ADVERSARIAL — ACTION STEPS</b>

<b>A1. Color revolution playbook (social media divide)</b>

- A1-S1: Never post internal community conflict, leadership disagreement, or financial problem to public social media.
- A1-S2: Designate 1 person as information gatekeeper. Anything posted externally is review by this person first.
- A1-S3: Build community identity around shared work. Not shared ideology. Harder to divide people who work together each day.
- A1-S4: Pre-agree on how community respond to external criticism. Never react emotional. Always respond with action evidence.
- A1-S5: If external agent attempt infiltration, never discuss finance, leadership conflict, or future plan with person you do not fully trust.
- A1-S6: Run quarterly social audit. Note who talk to whom outside community. Note if relationship shift suspiciously.

<b>A2. Economic strangulation (market access blocked)</b>

- A2-S1: Self-produce top 20 essential item. List in E1-S1. Do not go to market for these.
- A2-S2: Maintain local exchange network. 3 neighboring farm, 2 local co-op, 1 town supplier. All pre-established.
- A2-S3: Store cash reserve in 3 different form. Physical cash on-site, precious metal (small), account at 2 different bank.
- A2-S4: Develop skill-for-goods trade route. Offer labor or expertise in exchange for what you need.

<b>A3. Land acquisition pressure (corporate or state buy adjacent)</b>

- A3-S1: Own land outright. Do not rent if you can buy. If rent, negotiate minimum 10-year lease with legal review.
- A3-S2: Engage local government early. Attend council meeting. Know the planner. Make yourself visible as contributor to community.
- A3-S3: Explore conservation easement or agricultural preservation designation. This make land harder to repurpose commercially.
- A3-S4: Build relationship with neighboring property. United front is harder to divide.
- A3-S5: Document community economic contribution to region. Tax paid, job created, food produced. Build a file.

<b>A4. Infrastructure targeting (road, power line sabotage)</b>

- A4-S1: Have 2 access route to main road. If one is blocked, exit via alternative.
- A4-S2: Know how to repair own power feed from grid to property. Have tool and knowledge to restore if cut.
- A4-S3: Maintain local road access independently. Own tool to clear fallen tree, repair washout.
- A4-S4: Keep radio contact with nearest neighbor. 3 km range minimum. They can warn you if route is blocked.""", "A1-A4")

# ─── CHUNK 15: A5-A7 ─────────────────────────────────────────────────────────
chunk("""<b>A5. Surveillance infiltration</b>

- A5-S1: Run background check on any new member in year 1. Not paranoid. Practical.
- A5-S2: Never discuss sensitive operational detail (security system, financial position, future plan) in open group setting.
- A5-S3: Have written confidentiality agreement for any member who handle sensitive information. Finance, legal, internal conflict.
- A5-S4: Rotate sensitive role. Person who handle finance should not also handle external communication.
- A5-S5: Watch for behavioral anomaly. Unusual interest in specific system, photographing sensitive area, asking detail question about routine.

<b>A6. Legal harassment (regulatory trap, frivolous lawsuit)</b>

- A6-S1: Retain attorney on annual retainer. Not per-incident. Ongoing relationship.
- A6-S2: Document everything properly. Proper permit, proper record, proper minute. Harassment target community with documentation gap.
- A6-S3: Never respond to legal threat without attorney involvement. No matter how informal the threat.
- A6-S4: Build relationship with local official. Not corruption. Just good community relation. This make targeting harder.
- A6-S5: Store separate legal entity for property (LLC or trust) and operation. Layer protection.

<b>A7. Resource theft (coordinated)</b>

- A7-S1: Store high-value item (tool, fuel, medicine) in locked, less-visible structure. Not the main building.
- A7-S2: Never display inventory publicly. If truckload of supply is visible each day, you are advertising.
- A7-S3: Maintain property perimeter awareness. Know who belong and who do not. Brief all member on this norm.
- A7-S4: Keep locked storage unit off-site for irreplaceable item. Seed vault copy, critical document, backup electronic.
- A7-S5: Know local law enforcement. Introduce yourself. Explain your community. Give them your contact. This make reporting easier.""", "A5-A7")

# ─── CHUNK 16: A8-A10 ────────────────────────────────────────────────────────
chunk("""<b>A8. Reputation attack (false narrative online)</b>

- A8-S1: Maintain positive public presence during normal time. Blog, community update, local press. So when attack come, there is real record.
- A8-S2: Never respond to attack by attack back. This validate the attacker. Respond with factual update and evidence.
- A8-S3: Build 5-person supporter network outside community who will vouch for you publicly if needed.
- A8-S4: Document everything. If false narrative claim thing that is provably wrong, have proof ready to publish.
- A8-S5: If attack is serious, hire reputation management firm. Do not try to fight media warfare without professional help.

<b>A9. Key member targeted (kidnap, coercion, bribery)</b>

- A9-S1: Rotate sensitive role so no single person hold all critical knowledge in one domain.
- A9-S2: Teach all member their legal right if approached by authority. Know when to ask for attorney. Know when to remain silent.
- A9-S3: Establish off-site emergency contact system. If key person go dark unexpectedly, community get alert within 4 hour.
- A9-S4: Store critical knowledge in distributed way. No single person is the complete source of any critical system.

<b>A10. External governance change (new law ban communal living)</b>

- A10-S1: Stay inform about local and national legislative change that could affect land use or community living arrangement.
- A10-S2: Engage in local political process. Show up. Speak. Vote. You have more power in the system than you think.
- A10-S3: Maintain legal structure recognized by the state. LLC, cooperative, nonprofit. Not an informal group.
- A10-S4: Build relationship with politician and civil servant at municipal level. They implement law. They have discretion.
- A10-S5: Document compliance history. Every permit, every inspection, every approval. Build a record of being a good citizen.""", "A8-A10")

# ─── CHUNK 17: X1-X3 ─────────────────────────────────────────────────────────
chunk("""<b>EXPANSION RISK — ACTION STEPS</b>

<b>X1. Rapid growth (100 to 500, cohesion break)</b>

- X1-S1: Grow by maximum 20% per year. No faster. This is a hard rule. Growth rate is a survival variable.
- X1-S2: Before scale to 200 person, have written governance system that handle 3x current decision volume.
- X1-S3: Before scale, establish functional team (water team, food team, comms team) with named lead and documented protocol.
- X1-S4: Never grow faster than your slowest system can handle. The moment water system is strained, stop admission.
- X1-S5: New member go through 90-day onboarding with structured contribution and feedback. Not full integration immediately.
- X1-S6: Maintain cultural cohesion through shared work ritual. Daily morning meeting, shared meal, shared project.

<b>X2. Geographic spread (multiple site, coordination fail)</b>

- X2-S1: Never operate more than 2 site until you have full mesh communication between them.
- X2-S2: Assign site manager with decision authority. Decision do not get stuck waiting for cross-site approval.
- X2-S3: Standardize document across site. Same form, same protocol, same terminology.
- X2-S4: Conduct joint meeting each 2 week. In person or video. Site manager sync on critical issue.
- X2-S5: Rotate people across site to spread knowledge. No site should be dependent on 1 person.

<b>X3. Funding oversupply (capital corrupt culture)</b>

- X3-S1: Define funding threshold above which excess go to reserve. Not to expanded scope.
- X3-S2: Never let a funder have decision-making power in exchange for money. If they start directing choice, that is a problem.
- X3-S3: All large expenditure require 48-hour community discussion before commitment. This create accountability.
- X3-S4: Maintain low overhead intentionally. If you have excess fund, invest in redundancy and resilience. Not luxury.""", "X1-X3")

# ─── CHUNK 18: X4-X5 + Matrix ────────────────────────────────────────────────
chunk("""<b>X4. Tech over-reliance (automation replace human bond)</b>

- X4-S1: Keep at least 1 critical function purely manual. No automation. No digital. Human connection remain necessary.
- X4-S2: Conduct monthly tech-free day. All digital system off. Work by hand. Eat together. Solve problem by talking.
- X4-S3: Ensure community value proposition is human relationship. Not efficient system. If it is just efficiency, you are replaceable.
- X4-S4: Never automate decision-making. Tool support decision. Tool do not make decision.

<b>X5. Partnership with incompatible organization</b>

- X5-S1: Define partnership criteria in writing before any negotiation. Values alignment, decision-making compatibility, exit term.
- X5-S2: Run 90-day trial partnership before formal commitment. Work on one small project together. Observe how decision get made. Observe how conflict get handled.
- X5-S3: Keep partnership agreement bound. Scope, duration, termination clause. Never open-ended arrangement.
- X5-S4: Define what happen to joint asset if partnership dissolve. Document before starting.

<b>ASD-STE100 — SURVIVAL MINIMUM MATRIX</b>

The gap between intention and survival is measured in week of shock.

Your actual threat in order of likelihood:

1. Someone get sick and there is no medical response. R6 plus I6.
2. A key person leave and no one can do their job. I2 plus I9.
3. A conflict escalate and fracture the group. I3.
4. Funding run out and you cannot maintain the land or system. I1.
5. You expand too fast and lose cohesion. X1.
6. Regulatory pressure make continued operation illegal. I7.
7. External economic collapse make trade impossible. E1.
8. Everything else.

Start with those.

<b>Document:</b> ASD-STE100 COMMUNITY SURVIVAL ANALYSIS
<b>Standard:</b> ASD-STE100 (Simplified Technical English)
<b>For:</b> Regen Tribe Collective Network
<b>Date:</b> 2026-04-28
<b>Status:</b> Ready for distribution""", "X4-X5+Matrix")

print("\n=== ALL 18 MESSAGES SENT SUCCESSFULLY ===")
