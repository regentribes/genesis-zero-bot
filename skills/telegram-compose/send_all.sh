#!/bin/bash
CONFIG="$HOME/.openclaw/openclaw.json"
BOT_TOKEN=$(jq -r '.channels.telegram.accounts.genesis.botToken' "$CONFIG")
CHAT_ID="-1001921904187"
THREAD=18519

send() {
  local msg="$1"
  curl -s -X POST "https://api.telegram.org/bot${BOT_TOKEN}/sendMessage" \
    -H "Content-Type: application/json" \
    -d "$(jq -n --arg chat "$CHAT_ID" --arg text "$msg" --argjson thread $THREAD '{
      chat_id: $chat,
      text: $text,
      parse_mode: "HTML",
      message_thread_id: $thread,
      link_preview_options: { is_disabled: true }
    }')" | jq -r '.ok'
}

# Part 1: Intro + Bridge 01
send '<b>🌉 BRIDGE 01 · VOID → GRIEF</b>
<i>Permission to stop dissolving and start mourning.</i>

🌉 <b>Sigur Rós</b> — "Glósóli" / "Hoppípolla"
Post-rock · Iceland · 2002
<i>Before: the static build. After: the explosion into grief/joy hybrid. The famous moment: the camera follows the feet running toward the water. This is what it looks like when dissolution becomes something you can hold.</i>

🌉 <b>Hammock</b> — "Breathturn into Kann"
Post-rock ambient · US · 2014
<i>The gap between "holding grief" and "becoming the sky" is 11 minutes. This track lives exactly there.</i>

🌉 <b>Joanna Newsom</b> — "Sprout and the Bean" / "Sapokanikan"
Folk/baroque · US · 2014
<i>The body enters grief before the mind understands what happened. Joanna Newsom\'s voice is a child and a grandmother at the same time. Dissolution into memory.</i>'

sleep 1

# Part 2: Bridge 02
send '<b>🌉 BRIDGE 02 · GRIEF → LANDSCAPE</b>
<i>From holding loss to being held by something larger.</i>

🌉 <b>Typhoon</b> — "The Sore Beggar / The Honest Word"
Indie folk orch. · US · 2013
<i>Grief becomes geography. "The mountain says nothing / the river has no name." Grief with the scale of landscape — not to minimize it but to give it room.</i>

🌉 <b>The Tallest Man on Earth</b> — "The Wild Hunt" / "The Dreaming"
Folk · Sweden · 2010
<i>The wound is personal. The landscape it runs through is Nordic. Not escape — integration.</i>

🌉 <b>Amenra</b> — "A Final Kiss" (Mass III)
Sludge/doom · Belgium · 2009
<i>Belgian heavy. Grief that goes down and down and then somehow opens into a field. The heaviest possible landing in the most gentle place.</i>'

sleep 1

# Part 3: Bridge 03
send '<b>🌉 BRIDGE 03 · LANDSCAPE → BUILD</b>
<i>From awe to the first signs of hope. Nature as the thing that proves structure exists.</i>

🌉 <b>This Patch of Skye</b> — "First Communion" / "Blackberry"
Post-rock · US · 2011
<i>Something tiny and specific becomes something vast. Blackberry. The name of the song is the whole universe.</i>

🌉 <b>Eluvium</b> — "Radio Has Been Speaking" / "Generating the Nightmare"
Ambient · US · 2006
<i>Landscape that gradually remembers it\'s made of sound. Nature becoming aware of its own structure.</i>

🌉 <b>Explosions in the Sky</b> — "Your Hand in Mine"
Post-rock · US · 2003
<i>The most famous post-rock bridge. Landscape → building → arrival. All three in one song. The soundtrack for every hopeful thing that still costs something.</i>'

sleep 1

# Part 4: Bridge 04
send '<b>🌉 BRIDGE 04 · BUILD → RITUAL</b>
<i>When the individual realizes they are part of something that was here before them and will continue after.</i>

🌉 <b>Lingua Ignota</b> — "PAEAN" / "The Natural Constitution"
Avant-garde · US · 2019
<i>The exact moment individual transcendence becomes collective. Kristin Hayat\'s voice + the full band = one person becoming a choir.</i>

🌉 <b>Om</b> — "Besan" / "Gospel of the Second Hour"
Drone/doom metal · US · 2009+
<i>Organs. Chanting. Monks who are also heavy metal musicians. Individual becoming ritual.</i>

🌉 <b>The Gloaming</b> — "The Ash of a Camel" / "The Un参考"
Celtic neofolk · Ireland · 2011
<i>Traditional structures applied to contemporary grief. The ritual was always here. We just forgot how to use it.</i>'

sleep 1

# Part 5: Bridge 05
send '<b>🌉 BRIDGE 05 · RITUAL → BODY</b>
<i>The collective ceremony meets the physical body. What happens when ritual music is played in a room where people can move.</i>

🌉 <b>Arca</b> — "Sin Nombre" / "Desafío"
Venezuelan electronic · 2015+
<i>Ceremony as club music. The Latin American body memory meets industrial electronic production. Ritual + bass = movement.</i>

🌉 <b>Actress</b> — "后台 (Backstage)" / "Unbound"
UK garage · 2022+
<i>Body as machine. Machine as body. The algorithmic body dancing.</i>

🌉 <b>Klein</b> — "Baduizm" / "Jusz"
Experimental R&B · UK · 2023+
<i>Body without choreography. Body that is learning its own shape for the first time.</i>'

sleep 1

# Part 6: Bridge 06
send '<b>🌉 BRIDGE 06 · BODY → INTIMACY</b>
<i>From physical presence to the vulnerability of being known.</i>

🌉 <b>Burial</b> — "Near Dark" / "Rival Dealer"
UK dubstep · UK · 2007+
<i>The body alone in the club at 3am. Intimacy without another person — just the body and its own history. Burial\'s production is the sound of being alone in a crowd.</i>

🌉 <b>Mount Eerie</b> — "Real Death" / "The Place I Live"
Folk · US · 2017
<i>Physical devastation. Death of a husband. Body as the only thing left. Intimacy stripped of everything except what matters.</i>

🌉 <b>Frank Ocean</b> — "Self Control" / "Nights"
R&B · US · 2017
<i>Body in the room. Memory in the voice. What it sounds like when two people are in the same bed and one of them is already leaving.</i>'

sleep 1

# Part 7: Bridge 07
send '<b>🌉 BRIDGE 07 · INTIMACY → COLLECTIVE JOY</b>
<i>The two becomes the many. The personal declaration becomes a shared pulse.</i>

🌉 <b>Moses Sumney</b> — "Doomed" / "Leave Me Alone"
Experimental soul · US · 2017+
<i>One voice becoming a chorus. The "me" that becomes "us" without losing its specificity. "I\'m not in the world / the world is in me."</i>

🌉 <b>Broadcast</b> — "Come On Feel the Local Dimension" / "Becaus of Phil"
Electronic · UK · 2000+
<i>Intimacy that multiplies. The voice that sounds like it\'s singing to one person but somehow fills the room.</i>

🌉 <b>Floating Points &amp; Pharoah Sanders</b> — "Movement" (full album)
Jazz/electronic · UK/US · 2021
<i>Two people who have known each other for decades. The improvisation between them = one collective breath. Intimacy as collective formation.</i>'

sleep 1

# Part 8: Bridge 08 + outro
send '<b>🌉 BRIDGE 08 · COLLECTIVE JOY → RETURN</b>
<i>The peak of collective joy — and then the gentle pull back to earth.</i>

🌉 <b>Fela Kuti</b> — "Gentleman" / "Zombie"
Afrobeat · Nigeria · 1977
<i>Maximum collective joy — then maximum political rage in the same track. The joy is the protest. The protest is the joy. This is the complete cycle in two movements.</i>

🌉 <b>Brian Eno</b> — "An Ending (Ascent)"
Ambient · UK · 1983
<i>After the Afrobeat. After the collective breath. The altitude. The departure. The listener returns with full somatic presence — knowing what they have, knowing what it cost.</i>

🌉 <b>Boards of Canada</b> — "Dayvan Cowboy"
Electronic/shoegaze · Scotland · 2000
<i>The memory of collective joy. Not the joy itself — the memory. Nostalgia as a form of return.</i>

🌉 <b>Arca</b> — "Time" (Kiasmos remix) / Kiasmos — "Looped"
Minimal techno/piano · Iceland · 2020+
<i>The organic structure of piano through digital repetition. The machine learning to breathe. The return to body + collective simultaneously.</i>'

echo "Done sending bridges."