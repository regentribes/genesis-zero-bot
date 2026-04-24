#!/usr/bin/env python3
import os, re, glob, yaml

REPO = os.path.expanduser("~/.radicle/regen-tribes-notes")
os.chdir(REPO)

BANNED_WORDS = re.compile(r'\b(utili[sz][a-z]*|leverage[sd]?|holistic|synerg[a-z]+|optimi[sz][a-z]*)\b', re.I)

METAPHORS = {
    'Cell': 'Cell (metaphor for a basic unit or module):',
    'Tissue': 'Tissue (metaphor for a connected group or network):',
    'Organ': 'Organ (metaphor for a functional subsystem or team):',
    'System': 'System (metaphor for an integrated whole or network):',
    'Body': 'Body (metaphor for the complete collective or organism):',
    'Organism': 'Organism (metaphor for a self-sustaining collective):',
    'Ecosystem': 'Ecosystem (metaphor for an interconnected network):',
    'Membrane': 'Membrane (metaphor for a boundary or interface):',
    'Neuron': 'Neuron (metaphor for a processing node or agent):',
    'Synapse': 'Synapse (metaphor for a connection or signal link):',
    'Metabolism': 'Metabolism (metaphor for operational processes):',
}

REPLACEMENTS = {
    'utilize': 'use', 'utilizes': 'uses', 'utilized': 'used', 'utilizing': 'using',
    'leverage': 'use', 'leveraged': 'used', 'leveraging': 'using',
    'holistic': 'complete',
    'synergy': 'combined effect', 'synergize': 'combine', 'synergies': 'combined effects',
    'optimize': 'improve', 'optimized': 'improved', 'optimizing': 'improving',
    'optimization': 'improvement',
}

def process_file(path):
    with open(path) as f:
        raw = f.read()
    
    # Remove YAML frontmatter
    if raw.startswith('---'):
        parts = raw.split('---', 2)
        if len(parts) >= 3:
            body = parts[2].lstrip('\n')
            title_from_yaml = parts[1]
            title_match = re.search(r'^title:\s*(.+)$', title_from_yaml, re.M)
            yaml_title = title_match.group(1).strip() if title_match else None
        else:
            body = raw
            yaml_title = None
    else:
        body = raw
        yaml_title = None
    
    # Get existing H1 title
    h1_match = re.search(r'^# (.+)$', body, re.M)
    h1_title = h1_match.group(1) if h1_match else None
    
    title = yaml_title or h1_title or 'Untitled'
    
    # Clean title
    title = re.sub(r'[\u2014\u2013\u00d7]', ' - ', title)
    title = re.sub(r':', ' - ', title)
    title = title.strip('"\'')
    title = title.encode('ascii', 'replace').decode('ascii')
    words = title.split('-')
    title = '-'.join(w.strip().title() if w.strip() else w for w in words)
    title = re.sub(r'\s+', '-', title)
    title = re.sub(r'-+', '-', title)
    title = title.strip('-')
    
    new_body = f'# {title}\n\n'
    
    # Strip YAML/metadata noise from body content
    body_lines = body.split('\n')
    content_lines = []
    
    for line in body_lines:
        stripped = line.strip()
        if stripped in ('...', '---'):
            continue
        if stripped.startswith('#'):
            continue
        if stripped.startswith('|'):
            continue
        if re.match(r'^[-| :]+$', stripped):
            continue
        if re.match(r'^\|?[-: |]+\|?$', stripped):
            continue
        if stripped == '':
            content_lines.append('')
            continue
        content_lines.append(line)
    
    content = '\n'.join(content_lines)
    
    # Fix metaphor introductions + banned words
    lines = content.split('\n')
    fixed_lines = []
    introduced = set()
    
    for line in lines:
        for met, intro in METAPHORS.items():
            if met in line and met not in introduced:
                fixed_lines.append(intro)
                introduced.add(met)
        new_line = BANNED_WORDS.sub(
            lambda m: REPLACEMENTS.get(m.group(0).lower(), m.group(0)), 
            line
        )
        fixed_lines.append(new_line)
    
    content = '\n'.join(fixed_lines)
    
    # Split long lines for readability
    final_lines = []
    for line in content.split('\n'):
        if line.strip() in METAPHORS.values():
            final_lines.append(line)
            continue
        words_in_line = line.split()
        if len(words_in_line) <= 30:
            final_lines.append(line)
            continue
        sentences = re.split(r'(?<=[.!?])\s+(?=[A-Z])', line)
        if len(sentences) > 1:
            final_lines.extend(sentences)
        else:
            parts = re.split(r'\s+(and|but|thus|then)\s+', line)
            if len(parts) > 1:
                for p in parts:
                    if p.strip():
                        final_lines.append(p.strip())
            else:
                final_lines.append(line)
    
    new_body += '\n'.join(final_lines)
    new_body = new_body.strip() + '\n'
    
    # Generate new filename
    slug = title.lower().replace(' ', '-')
    slug = re.sub(r'[^a-z0-9-]', '', slug)
    slug = re.sub(r'-+', '-', slug)
    slug = slug.strip('-')
    
    num_match = re.match(r'^(\d+)', os.path.basename(path))
    if num_match:
        num = num_match.group(1).zfill(3)
        new_filename = f"{num}-{slug}.md"
    else:
        new_filename = f"{slug}.md"
    
    new_path = os.path.join(REPO, new_filename)
    
    with open(new_path, 'w') as f:
        f.write(new_body)
    
    if path != new_path:
        os.remove(path)
    
    return title, new_filename

# Process all numbered files
files = sorted(glob.glob(os.path.join(REPO, '[0-9]*.md')))
results = []
errors = []
for f in files:
    try:
        title, newname = process_file(f)
        results.append((newname, title))
    except Exception as e:
        errors.append((f, str(e)))
        print(f"ERROR {f}: {e}")

print(f"Processed {len(results)} files, {len(errors)} errors")

# Verification
import subprocess

# Check no frontmatter
r1 = subprocess.run(['grep', '-c', '^---$'] + sorted(glob.glob(os.path.join(REPO, '[0-9]*.md'))), capture_output=True, text=True)
nonzero = [l for l in r1.stdout.strip().split('\n') if l.endswith(':0') == False and l]
print(f"\nFiles with frontmatter: {len(nonzero)}")
if nonzero:
    for l in nonzero[:5]:
        print(f"  {l}")

# Check no banned words
r2 = subprocess.run(['grep', '-rilE', 'utilize|leverage|holistic|synergy|optimiz'] + sorted(glob.glob(os.path.join(REPO, '[0-9]*.md'))), capture_output=True, text=True)
banned = [l for l in r2.stdout.strip().split('\n') if l]
print(f"\nFiles with banned words: {len(banned)}")
if banned:
    for l in banned[:5]:
        print(f"  {l}")

# Check no tables
r3 = subprocess.run(['grep', '-c', '^|'] + sorted(glob.glob(os.path.join(REPO, '[0-9]*.md'))), capture_output=True, text=True)
tables = [l for l in r3.stdout.strip().split('\n') if l.endswith(':0') == False and l]
print(f"\nFiles with tables: {len(tables)}")
if tables:
    for l in tables[:5]:
        print(f"  {l}")

# Check metaphor introductions
r4 = subprocess.run(['grep', '-c', 'metaphor for'] + sorted(glob.glob(os.path.join(REPO, '[0-9]*.md'))), capture_output=True, text=True)
metaphors = [l for l in r4.stdout.strip().split('\n') if not l.endswith(':0')]
print(f"\nFiles with metaphor intros: {len(metaphors)}")
if metaphors:
    for l in metaphors[:10]:
        print(f"  {l}")
