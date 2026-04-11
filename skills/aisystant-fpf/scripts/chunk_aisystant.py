#!/usr/bin/env python3
"""
Chunk AISYSTANT Systems Thinking course by VitePress page.
Each page = one conceptual unit = one reference file.
Run once to populate references/. 
Thereafter, read only the specific reference file needed — never re-read the full source.
"""
import re, os

SOURCE = "/home/ian/.openclaw/media/inbound/aisystant---5ece5683-7ccc-44b0-9aa0-b885263a2a1e.txt"
OUTDIR = os.path.dirname(os.path.abspath(__file__)) + "/../references/aisystant"
os.makedirs(OUTDIR, exist_ok=True)

with open(SOURCE, "r") as f:
    content = f.read()

# Split by --- on its own line (VitePress frontmatter/page separator)
pages = re.split(r'\n---\n', content)
print(f"Total pages: {len(pages)}")

manifest = []

for i, page in enumerate(pages):
    # Extract title from YAML frontmatter
    m = re.search(r"^title:\s*[\"'](.+?)[\"']", page, re.MULTILINE)
    if m:
        title = m.group(1)
        # Sanitize for filename
        safe = re.sub(r'[/:<>"*?|+]', '_', title)
        safe = re.sub(r'\s+', '_', safe).strip('_')
        safe = safe[:80]
    else:
        # Try markdown H1
        m2 = re.search(r"^#\s+(.+)$", page, re.MULTILINE)
        title = m2.group(1).strip() if m2 else f"untitled_{i+1}"
        safe = re.sub(r'[/:<>"*?|+]', '_', title)
        safe = re.sub(r'\s+', '_', safe)[:80]

    fname = f"{i+1:02d}_{safe}.md"
    fpath = os.path.join(OUTDIR, fname)

    # Write chunk
    with open(fpath, "w") as out:
        out.write(page)

    # Also write a concepts index line
    concept_ids = re.findall(r'\*\*([^*]+)\*\*|\#\#\s+([^\n]+)', page)
    manifest.append({"file": fname, "title": title, "chunk": i+1})

    print(f"  [{i+1:02d}] {title[:70]} -> {fname}")

# Write manifest
import json
manifest_path = OUTDIR + "/_manifest.json"
with open(manifest_path, "w") as mf:
    json.dump(manifest, mf, indent=2)
print(f"\nManifest: {manifest_path}")
print(f"Total chunks: {len(pages)}")