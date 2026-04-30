#!/usr/bin/env python3
"""Split INCOSE SE Handbook v5 chapters into human-readable sub-chapters."""
import re, os

outdir = "/home/ian/.openclaw/workspace-genesis/ingested-docs/incose-se-handbook-v5-chapters"

def get_section_title(body, num):
    """Extract section title from body of a section."""
    # Title is right after the section number, before the first newline
    lines = body.split('\n')
    for line in lines[:5]:
        line = line.strip()
        if line and len(line) > 3:
            # Clean thin spaces and truncate
            title = line.replace('\u2003', ' ').replace('\t', ' ')[:60]
            return title
    return num

def split_by_subsections(filepath, prefix, chapter_num):
    """Split a chapter into sub-sections using thin-space delimiter."""
    with open(filepath, 'r', errors='ignore') as f:
        content = f.read()
    
    # Split on thin-space section headers: "X.Y<thin-space>Title"
    parts = re.split(r'\n(\d+\.\d+)\u2003', content)
    # parts[0] = intro, [num, body, num, body...]

    print(f"  {prefix}: {len(parts)} sub-parts")

    if len(parts) < 4:
        # Single sub-chapter
        with open(os.path.join(outdir, f"{prefix}_Main.md"), 'w') as f:
            f.write(content.strip())
        print(f"  Kept as single file")
        return

    # Write intro as _Main
    intro = parts[0].strip()
    if len(intro) > 500:
        with open(os.path.join(outdir, f"{prefix}_Main.md"), 'w') as f:
            f.write(intro)

    # Write each numbered section
    written = 0
    for i in range(1, len(parts), 2):
        num = parts[i]
        body = parts[i+1] if i+1 < len(parts) else ""
        body = body.strip()
        if len(body) < 500:
            continue
        
        # Clean title for filename
        first_line = body.split('\n')[0].strip()
        title = first_line.replace('\u2003', ' ').replace('/', '_')[:50].strip()
        title = re.sub(r'[^\w\s\-]', '', title)
        title = re.sub(r'\s+', '_', title)
        title = re.sub(r'_+', '_', title)
        
        fname = f"{prefix}_{num.replace('.','_')}_{title}.md"
        fname = re.sub(r'_+', '_', fname)
        with open(os.path.join(outdir, fname), 'w') as f:
            f.write(body)
        written += 1

    print(f"  Wrote {written} sub-chapter files")

# Process large chapters
large_chapters = {
    "01": "01_Systems_Engineering_Introduction.md",
    "02": "02_System_Life_Cycle_Concepts_Models_Processes.md",
    "03": "03_Life_Cycle_Analyses_and_Methods.md",
    "04": "04_Tailoring_and_Application_Considerations.md",
    "05": "05_Systems_Engineering_in_Practice.md",
    "06": "06_Case_Studies.md",
}

for prefix, fname in large_chapters.items():
    fpath = os.path.join(outdir, fname)
    if os.path.exists(fpath) and os.path.getsize(fpath) > 40000:
        split_by_subsections(fpath, prefix, fname)

# Remove original large files (keep only sub-chapter files)
for prefix, fname in large_chapters.items():
    fpath = os.path.join(outdir, fname)
    if os.path.exists(fpath):
        os.remove(fpath)
        print(f"  Removed original: {fname}")

files = sorted(os.listdir(outdir))
print(f"\nTotal files: {len(files)}")
for f in files:
    size = os.path.getsize(os.path.join(outdir, f))
    print(f"  {f} ({size})")
