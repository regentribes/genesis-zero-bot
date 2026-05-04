---
name: tetra-format
description: Transform input into knowledge fragments using four complementary communication formats: MeTTa (pattern matching), JSON-LD (linked data), ASD-STE100 (structured plain text), and Bliss Symbolics (ideographic concept composition). Each fragment outputs in all four formats simultaneously.
---

tetra-format transforms any input into knowledge fragments expressed in four parallel formats. This skill unifies symbolic, semantic, plain-text, and ideographic representations in a single pass.

Trigger phrases: tetra-format, four formats, multi-format, parallel representation, all four, complete representation, concept map, semantic quad

## Four Communication Methods

### 1. MeTTa (Pattern Matching)
MeTTa is the language of OpenCog Hyperon, using S-expressions for pattern matching and atomspace operations. Key elements:
- (= ...) for function definitions and reduction rules
- (: ...) for type assignments
- (: atom type) for type declarations
- (-> arg1 arg2 ... ret) for function types
- $variable for unbound variables
- match_atoms for unification
- Minimal instructions: eval, chain, unify, cons-atom, decons-atom, function, return, collapse-bind

### 2. JSON-LD (Linked Data)
JSON-LD is W3C standard for serializing Linked Data, using:
- @context for vocabulary mapping
- @id for unique identifiers
- @type for type declarations
- @value for literal values
- @language for language tags
- @graph for named graphs
- Compact IRIs using prefix:suffix
- Frame documents for shape constraints

### 3. ASD-STE100 (Structured Plain Text)
ASD-STE100 is structured text with strict rules:
- Maximum 20 words per procedural sentence
- Maximum 25 words per descriptive sentence
- Fragment size unlimited
- No em dashes in output
- No intro or conclusion summaries
- Each fragment as separate message
- Abbreviations expanded on first use
- Start with concrete viewpoint, not concept name
- Every term defined within fragment or removed
- No bullet points, no numbered lists

### 4. Bliss Symbolics (Ideographic Composition)
Bliss Symbolics is an ideographic constructed language using:
- 100-120 key symbols (Bliss-characters) as basic concepts
- Three categories: matter (things/nouns), energy (actions/verbs), human values (evaluations/adjectives)
- Grid matrix with skyline (top), earthline (base), and midline
- Classifiers (main symbol) followed by modifiers (prefixes/suffixes)
- Indicators placed above to mark grammar (part of speech, tense, plurality)
- Combine characters for joining concepts
- Non-phonetic, logical, generative system

## Fragment Structure

Each tetra-format fragment contains all four representations:

```
Plain Text (ASD-STE100): [Natural language description with sentence limits]
MeTTa: [Pattern matching expression with types]
JSON-LD: [Linked data structure with context]
Bliss: [Ideographic composition using Bliss-character categories and indicators]
```

## Element Mapping

| Concept | MeTTa | JSON-LD | Bliss Category |
|---------|-------|---------|----------------|
| Entity | (= $x Entity) | "@type": "Entity" | Matter (classifier: square) |
| Action | (= ($action $x) $y) | "@type": "Action" | Energy (classifier: cone) |
| Value | (: $x Value) | "@type": "Value" | Human Values (classifier: V-indicator) |
| Type | (: $atom Type) | "@type": "rdfs:Class" | Matter + indicator |
| Relation | (match $a $b) | "@relation": "$b" | Energy + link symbol |

## Composition Rules

### For MeTTa
- Define types before using them
- Use (: ...) for all type declarations
- Chain functions with (chain $atom $var $template)
- Use (unify $atom $pattern $then $else) for conditionals

### For JSON-LD
- Always include @context with vocabulary
- Use @id for all named entities
- Define @type for type information
- Use @graph for multiple named graphs

### For ASD-STE100
- Each sentence maximum 20 (procedural) or 25 (descriptive) words
- Define all terms within the fragment
- Start with concrete situation or viewpoint
- No labels, no prefixes, no summaries
- One fragment per message

### For Bliss Symbolics
- Begin with classifier symbol for semantic category
- Add modifiers to refine meaning
- Place indicators above for grammar marking
- Use combine characters when joining concepts
- Follow grid matrix alignment rules

## Format Example

Input: "User authentication system"

Output Fragment:

ASD-STE100: The authentication component verifies user credentials and issues session tokens. Valid credentials produce tokens with fifteen-minute expiry. Invalid credentials return error without hints.

MeTTa:
```
(= AuthenticationComponent Entity)
(: AuthenticationComponent (-> Credential Token))
(= (authenticate $credential) $token)
(match Credential Password)
(match Token JWT)
```

JSON-LD:
```json
{
  "@context": "https://schema.org",
  "@id": "authentication-component",
  "@type": "Entity",
  "purpose": "verifies user credentials and issues session tokens",
  "inputs": ["credential"],
  "outputs": ["token"],
  "validFor": "PT15M"
}
```

Bliss (conceptual):
```
[Class: Energy/Action] + [Modifier: User-person] + [Indicator: Present-tense]
→ [Combine] → [Output: Token-symbol] + [Indicator: Time-duration]
```

## Usage Examples

Example 1: Input "tetra-format for data pipeline"

Fragment outputs parallel representation in all four formats, showing data flow (MeTTa), semantic structure (JSON-LD), natural description (ASD-STE100), and conceptual composition (Bliss).

Example 2: Input "concept map for community governance"

Fragment maps governance concepts across all four representations, with Bliss classifiers showing matter/energy/value categorization.

Example 3: Input "complete representation of AI agent architecture"

Fragment outputs architecture in MeTTa (pattern rules), JSON-LD (linked data), ASD-STE100 (plain text), and Bliss (ideographic composition).

## Processing Pipeline

1. Analyze input to identify core concepts
2. Determine Bliss categories (matter/energy/value)
3. Generate MeTTa pattern matching rules
4. Build JSON-LD linked data structure
5. Write ASD-STE100 description with sentence limits
6. Compose Bliss ideographic representation
7. Output all four in single fragment
8. Send as separate message per format rule

Each fragment integrates four communication methods, enabling cross-format understanding and preservation of structural, semantic, textual, and ideographic dimensions.