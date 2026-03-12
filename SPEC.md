# Graph Chain Stories

**Status:** Specced & Ready for Build  
**Owner:** Ian Tairea (@Vaipunu)  
**Created:** 2026-03-10  
**Dream caught from:** Ian Tairea (@Vaipunu) on the Regen Tribe Collective Network Telegram Group

---

## Problem Statement

The current knowledge graph visualization (`live.html`) only zooms to nodes when clicked — it doesn't tell the user anything interesting about what that node means or how it connects to other ideas. Community members exploring the graph can't discover stories or insights from the connections.

---

## Vision

An interactive "story explorer" for the knowledge graph. When users click nodes, they see:
- Animated connections flowing between nodes
- AI-generated narratives explaining what those connections mean
- Ability to drill down through chains of nodes, each level revealing more specific insights
- Options to add new nodes to chains and explore new threads
- Share/export capabilities for collaboration

---

## Target Users

RegenTribes community members who want to explore ideas, understand how concepts connect, and spark new insights through graph exploration.

---

## Use Case

1. User opens `graph-chain-stories.html`
2. Searches for a starting concept or clicks a node in the graph
3. Clicks the node → sees animated connections + LLM-generated story of those connections
4. Clicks a connected node → story narrows to that specific connection, reveals new insights
5. Continues clicking through the chain, building a narrative
6. Optionally: adds a new node to the chain, shares the chain URL, exports as Markdown

---

## Features

### Must Have (v1)

1. **Node Click → Connection Animation**
   - When a node is clicked, animate edges flowing from clicked node to direct neighbors
   - Use directional animation (particle flow or similar) showing relationship direction

2. **AI Story Generation**
   - Use the same LLM from semantic-graph skill to generate narrative summaries
   - Story explains: "Here's how [Node A] connects to [Node B, Node C...] and what that means"
   - Pull in as much source material as possible: node content, reference materials, raw data
   - Display links/references within the story

3. **Chain Navigation**
   - Click connected node → isolates that connection, shows its specific story
   - Continue clicking through chain for increasingly specific insights
   - Each click narrows focus while revealing new connections

4. **Breadcrumb Trail**
   - Show path: Node A → Node B → Node C...
   - Click any breadcrumb to jump back
   - "X" button on each crumb to remove from chain and branch elsewhere

5. **Add Node to Chain**
   - Search/select new concept to connect to current chain end
   - Creates new branch from current position

### Nice to Have

6. **Share via URL**
   - Button to copy URL with query params
   - Opening URL reconstructs the exact chain state

7. **Export to Markdown**
   - "Download" button exports current chain story as .md file
   - "Share" button copies formatted story to clipboard

---

## Constraints & Context

- **Budget:** None
- **Timeline:** None — iterative
- **Tech Stack:** Open — base on existing `live.html` tech (likely Three.js/force graph)
- **Integrations:** Uses existing semanticLM (`skills-graph skill's L/semantic-graph/`)
- **Location:** `skills/semantic-graph/viz/graph-chain-stories.html`
- **Testing approach:** Clone existing `live.html`, rename as `graph-chain-stories.html`. If it's cool, replace `live.html`. If it's wack, delete it.

---

## Technical Notes

- Reuse existing graph rendering from `live.html` (likely force graph visualization)
- Connect to SurrealDB for node/edge data (same as existing skill)
- Use existing LLM integration from semantic-graph skill for story generation
- Query params format: `?chain=nodeId1,nodeId2,nodeId3`
- Consider debouncing LLM calls to avoid rate limits
- Cache stories where possible to reduce LLM calls on back-navigation

---

## Success Criteria

- [ ] Clicking a node shows animated connections
- [ ] LLM generates readable, insightful story about connections
- [ ] Clicking through chain narrows focus and reveals specific insights
- [ ] Breadcrumb shows current path with click-to-jump and X-to-remove
- [ ] Can add new nodes to current chain
- [ ] Share URL works (reconstructs chain)
- [ ] Export to MD works
- [ ] UI feels smooth and engaging (not clunky)

---

*Spec captured via Dreamcatcher for RegenTribes*
