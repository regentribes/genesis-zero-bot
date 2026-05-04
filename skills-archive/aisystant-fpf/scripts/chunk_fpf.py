#!/usr/bin/env python3
"""
Chunk FPF (First Principles Framework) specification by top-level H2 sections.
The FPF spec uses | ID & Title | table rows as section delimiters.
Efficient: reads once, splits by section marker, writes each to a separate file.
"""
import re, os

# FPF source — adjust path as needed
SOURCE = "/home/ian/.openclaw/media/inbound/FPF-Spec---fec8cb17-807d-4bc3-98af-44dcffaedff6.md"
OUTDIR = os.path.dirname(os.path.abspath(__file__)) + "/../references/fpf"
os.makedirs(OUTDIR, exist_ok=True)

with open(SOURCE, "r") as f:
    content = f.read()

# Split by H2 headers (## ) or table-of-content row dividers
# The spec uses: | ID & Title | ... full text/pattern ...
# Split at ---- lines (horizontal rules) or ## headers
#
# Primary split strategy: look for ## {title} at start of line
sections = re.split(r'\n(?=##\s)', content)

print(f"Total sections: {len(sections)}")

manifest = []

for i, section in enumerate(sections):
    section = section.strip()
    if not section:
        continue
    
    # Extract title from first ## heading
    m = re.search(r'^##\s+(.+)$', section, re.MULTILINE)
    if m:
        title = m.group(1).strip()
    else:
        # Try to extract from TOC row: | Title |
        m2 = re.search(r'^\|\s*[^|]+\s*\|\s*([^\|]+)', section.split('\n')[0])
        title = m2.group(1).strip() if m2 else f"section_{i+1}"
    
    # Sanitize
    safe = re.sub(r'[/:<>"*?|+]', '_', title)
    safe = re.sub(r'\s+', '_', safe)[:80]
    
    fname = f"{i+1:02d}_{safe}.md"
    fpath = os.path.join(OUTDIR, fname)
    
    with open(fpath, "w") as out:
        out.write(section)
    
    manifest.append({"file": fname, "title": title, "chunk": i+1})
    print(f"  [{i+1:02d}] {title[:70]}")

# Write manifest
import json
manifest_path = OUTDIR + "/_manifest.json"
with open(manifest_path, "w") as mf:
    json.dump(manifest, mf, indent=2)
print(f"\nManifest: {manifest_path}")
print(f"Total chunks written: {len(manifest)}")