# Graph Chain Stories — UI Update Specification

**Status:** Draft  
**Owner:** Ian Tairea (@Vaipunu)  
**Created:** 2026-03-10  
**Project:** skills/semantic-graph/viz/graph-chain-stories.html

---

## 1. Summary

Update the graph-chain-stories.html interaction model based on user feedback. Current implementation has confusing UI for story generation and chain building. New model: click to explore, click to chain, auto-generate stories.

---

## 2. Problem Statement

- **Problem:** Current UI requires manual "Generate Story" button and API key input — confusing and unnecessary
- **Problem:** Node info panel shows raw data (confidence, evidence, connections) rather than insightful story
- **Problem:** "+ Start Chain" and "+" buttons for adding nodes to chain are unclear
- **Problem:** Must click node to see name — should show on hover
- **Problem:** Clicking node1 doesn't clearly show connected node names

---

## 3. User Stories

- **US-001:** As a user, I want to hover over any node to see its name without clicking
- **US-002:** As a user, I want clicking a node to zoom/fit to show its connections
- **US-003:** As a user, I want clicking a connected node to add it to my chain
- **US-004:** As a user, I want stories auto-generated when I build my chain (no manual button)
- **US-005:** As a user, I want to see only breadcrumbs and chain stories (no extra buttons)

---

## 4. Functional Requirements

### FR-001: Hover to Show Node Name
**Description:** When user hovers over any node, show a tooltip with the node's name
**Priority:** High
**Acceptance Criteria:**
- Given user hovers over node, then tooltip appears within 100ms with node name
- Given user moves mouse away, then tooltip disappears within 200ms

### FR-002: Click Node = Zoom to Connections
**Description:** Clicking a node (node1) zooms and fits the view to show all directly connected nodes
**Priority:** High
**Acceptance Criteria:**
- Given user clicks a node, then camera animates to center on that node
- Given node has connections, then view fits to show all direct neighbors with padding
- Given node has no connections, then view centers on node with zoomed in view

### FR-003: Click Connected Node = Add to Chain
**Description:** Clicking a node that is already visible (from zoomed view) adds it to the chain
**Priority:** High
**Acceptance Criteria:**
- Given user has zoomed to see connected nodes, when they click a connected node, then it gets added to chain
- Given node is added to chain, then breadcrumb updates immediately
- Given node is added to chain, then LLM story auto-generates for the chain

### FR-004: Auto-Generate Story on Chain Build
**Description:** Stories are generated automatically when chain has 2+ nodes, using OpenRouter API
**Priority:** High
**Acceptance Criteria:**
- Given chain has 2+ nodes, when chain changes, then story generates automatically (no button needed)
- Given story is generating, then show loading indicator
- Given OpenRouter call fails, then show error message in story panel
- Use: `google/gemini-3.1-flash-lite-preview` model via OpenRouter env key

### FR-005: Breadcrumb Only UI
**Description:** Remove "+ Start Chain" button and "+" buttons. Only show breadcrumb trail
**Priority:** High
**Acceptance Criteria:**
- Given user is viewing graph, then NO "+ Start Chain" button is visible
- Given user is viewing connected nodes, then NO "+" buttons are visible
- Given user clicks nodes to build chain, then breadcrumb shows full path

### FR-006: Breadcrumb Interactions
**Description:** Breadcrumb shows path with ability to remove any node
**Priority:** High
**Acceptance Criteria:**
- Given chain has nodes A → B → C, then breadcrumb shows "A → B → C"
- Given user clicks "B" in breadcrumb, then chain becomes A → B (C removed)
- Given user clicks "×" on any node, then that node is removed from chain
- Given chain has 1 node, breadcrumb shows just that node (no ×)

### FR-007: Story Panel Shows Insights
**Description:** Replace raw node data with LLM-generated story using source material
**Priority:** High
**Acceptance Criteria:**
- Given chain has 2+ nodes, then story panel shows narrative explanation
- Story should include: how nodes connect, what that means, insights from source material
- Show references/links where story content came from
- Given chain has 1 node, then show prompt to click connections to build chain

### FR-008: Show Connected Node Names
**Description:** When zoomed to node1, show names of all connected nodes
**Priority:** High
**Acceptance Criteria:**
- Given user clicks node1, when view zooms to connections, then show labels with node names
- Labels should be readable (not overlapping, appropriate font size)

---

## 5. Technical Specification

### 5.1 Architecture

```
User Action → Event Handler → State Update → UI Render
                                       ↓
                              LLM API Call (if needed)
                                       ↓
                              Update Story Panel
```

### 5.2 State Management

```javascript
// Chain state
chain: string[]  // array of node IDs in order

// Hover state  
hoveredNode: string | null

// Story state
story: {
  content: string,
  loading: boolean,
  error: string | null
}
```

### 5.3 API Integration

**OpenRouter Story Generation:**
```
Endpoint: https://openrouter.ai/api/v1/chat/completions
Model: google/gemini-3.1-flash-lite-preview
Headers: Authorization: Bearer {OPENROUTER_API_KEY}
```

**Request:**
```json
{
  "model": "google/gemini-3.1-flash-lite-preview",
  "messages": [{
    "role": "user",
    "content": "Generate a story about how these concepts connect: [node names and their relationships]. Use source material from the knowledge graph to provide insights."
  }]
}
```

### 5.4 UI Components

| Component | States | Behavior |
|-----------|--------|----------|
| Node tooltip | hidden, visible | Show on hover, hide on mouseout |
| Breadcrumb | empty, single, chain | Show path, × on each (except first) |
| Story panel | empty, loading, content, error | Auto-generate on chain change |
| Connection labels | hidden, visible | Show when zoomed to connections |

### 5.5 File to Modify

- `skills/semantic-graph/viz/graph-chain-stories.html`

### 5.6 Dependencies

- Existing: Three.js / force graph (from live.html)
- Existing: SurrealDB connection (from live.html)
- New: OpenRouter API (use existing env var)

---

## 6. Non-Functional Requirements

- **Performance:** Story generation should timeout after 10s, show error
- **UX:** All transitions should be smooth (300ms)
- **Error Handling:** Graceful fallback if LLM fails

---

## 7. Out of Scope

- Any changes to backend/semantic-graph pipeline
- Saving chains to database
- Sharing/exporting (was nice-to-have, can add later)

---

## 8. Acceptance Criteria Summary

- [ ] Hover shows node name
- [ ] Click node = zoom to connections
- [ ] Click connected node = add to chain
- [ ] Story auto-generates (no button)
- [ ] Uses google/gemini-3.1-flash-lite-preview via OpenRouter
- [ ] No "+ Start Chain" or "+" buttons
- [ ] Breadcrumb shows full path
- [ ] Click breadcrumb node = jump to that point
- [ ] Click × on breadcrumb = remove node
- [ ] Story panel shows narrative, not raw data

---

*Spec for Graph Chain Stories UI Update*
