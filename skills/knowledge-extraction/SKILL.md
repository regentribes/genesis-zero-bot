---
name: knowledge-extraction
description: Transform diverse input into self-contained knowledge fragments. Each fragment independent, full context, natural prose flow.
---

# knowledge-extraction

## When to Use

Transform arbitrary input into isolated fragments suitable for semantic embedding and verbal transmission.

**Trigger Phrases:**
- extract meaning
- make sense of
- distill
- analyze
- summarize
- key points
- (bare input without trigger also processes)

**Input Types:** Text, file attachment, link, audio, document

## Output Format

Each fragment as independent message. No batched messages. No intro summary. No conclusion statement. No task count messages. No labels or numbering prefixes. No em dashes. Plain prose only.

## Prose Construction Rules

- Start each fragment with concrete observation, situation, or viewpoint rather than introducing concept name
- Names emerge within sentence structure rather than as standalone declaration
- Fragment contains complete context for standalone understanding: no external reference permitted
- Any abbreviation appears after full term on first use
- Every term, name, or reference must be either defined within the fragment or removed entirely
- Fragments requiring external knowledge to understand are invalid

## Sentence Limits (STE100)

- Maximum 20 words per sentence for procedural content
- Maximum 25 words per sentence for descriptive content
- Fragment total length unlimited
- Use periods between sentences
- Never use em dashes
- One idea per sentence
- Active voice preferred

## Coverage Requirement

Fragments collectively contain every concept, relationship, and detail from source material. No detail omitted. No invented detail added.

## Specialized Processing

Processing pipeline:
1. Detect input format
2. Extract via appropriate tool (pdf, web_fetch, read, etc.)
3. Decompose into domain features
4. Generate fragment per feature with full context
5. Verify completeness
6. Send each as separate message

Each message contains one fragment.