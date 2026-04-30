#!/usr/bin/env python3
import re, os

outdir = "/home/ian/.openclaw/workspace-genesis/ingested-docs/incose-se-handbook-v5-chapters"

# Remove junk file
junk = os.path.join(outdir, '"\n\n\n\n\n\n_\n\n\n\n\n\n.md')
if os.path.exists(junk):
    os.remove(junk)
    print("Removed junk file")

def split_chapter(filepath, prefix):
    """Split one chapter file into sub-chapters."""
    with open(filepath, 'r', errors='ignore') as f:
        content = f.read()
    
    # Split on thin-space (u2003) section headers like "2.1 THIN_SPACE_TITLE"
    # Pattern: newline + number.number + thin space + uppercase title
    parts = re.split(r'\n(\d+\.\d+)\u2003', content)
    # parts[0] = intro, [num, body, num, body...] with capture group
    
    print(f"  {prefix}: split into {len(parts)} parts")
    
    # Write intro if substantial
    intro = parts[0].strip()
    if len(intro) > 1000:
        with open(os.path.join(outdir, f"{prefix}_Main.md"), 'w') as f:
            f.write(intro)
        print(f"  {prefix}_Main.md: {len(intro)} chars")
    
    # Write each numbered section
    written = 0
    for i in range(1, len(parts), 2):
        num = parts[i]
        body = parts[i+1] if i+1 < len(parts) else ""
        body = body.strip()
        if len(body) < 500:
            continue
        fname = f"{prefix}_{num.replace('.','_')}.md"
        with open(os.path.join(outdir, fname), 'w') as f:
            f.write(body)
        written += 1
    
    print(f"  Wrote {written} section files")
    return written

# Process all chapter files
chapter_files = {
    "00": "00_Front_Matter_and_Preface.md",
    "01": "01_Systems_Engineering_Introduction.md",
    "02": "02_System_Life_Cycle_Concepts_Models_Processes.md",
    "03": "03_Life_Cycle_Analyses_and_Methods.md",
    "04": "04_Tailoring_and_Application_Considerations.md",
    "05": "05_Systems_Engineering_in_Practice.md",
    "06": "06_Case_Studies.md",
}

for prefix, fname in chapter_files.items():
    fpath = os.path.join(outdir, fname)
    if os.path.exists(fpath):
        size = os.path.getsize(fpath)
        if size > 50000:
            split_chapter(fpath, prefix)
        else:
            print(f"  {prefix}: keeping single file ({size} chars)")

files = sorted(os.listdir(outdir))
print(f"\nTotal: {len(files)} files in {outdir}")
for f in sorted(files):
    size = os.path.getsize(os.path.join(outdir, f))
    print(f"  {f} ({size})")
