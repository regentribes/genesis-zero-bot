#!/usr/bin/env python3
"""
Rewrite all regen-tribes-notes to be STE-compliant:
- Remove YAML frontmatter
- Fix biological metaphor introductions
- Replace tables with bullet lists  
- Fix em-dashes, banned words
- ASCII only
"""

import re
import os
from pathlib import Path

NOTES_DIR = Path.home() / ".radicle" / "regen-tribes-notes"

# Metaphor patterns and their intro phrases (the word itself + intro)
# Format: pattern -> (word, intro_sentence)
METAPHOR_INTROS = {
    r'\b[Cc]ell\b': ('Cell', 'Cell (metaphor for a basic unit or module):'),
    r'\b[Tt]issue\b': ('Tissue', 'Tissue (metaphor for a connected group or network):'),
    r'\b[Oo]rgan\b': ('Organ', 'Organ (metaphor for a functional subsystem or team):'),
    r'\b[Ss]ystem\b': ('System', 'System (metaphor for an integrated whole or network):'),
    r'\b[Bb]ody\b': ('Body', 'Body (metaphor for the complete collective or organism):'),
    r'\b[Oo]rganism\b': ('Organism', 'Organism (metaphor for a self-sustaining collective):'),
    r'\b[Ee]cosystem\b': ('Ecosystem', 'Ecosystem (metaphor for an interconnected network):'),
    r'\b[Mm]embrane\b': ('Membrane', 'Membrane (metaphor for a boundary or interface):'),
    r'\b[Nn]euron\b': ('Neuron', 'Neuron (metaphor for a processing node or agent):'),
    r'\b[Ss]ynapse\b': ('Synapse', 'Synapse (metaphor for a connection or signal link):'),
    r'\b[Mm]etabolism\b': ('Metabolism', 'Metabolism (metaphor for operational processes):'),
}

# Banned words replacements
BANNED = {
    'utilize': 'use',
    'leverage': 'use',
    'optimize': 'improve',
    'holistic': 'complete',
    'synergy': 'combined effect',
}

def remove_frontmatter(content):
    """Remove YAML frontmatter block (lines between --- and --- at top)"""
    lines = content.split('\n')
    
    if lines and lines[0].strip() == '---':
        new_lines = []
        in_frontmatter = True
        for i, line in enumerate(lines):
            if i == 0:
                continue  # skip opening ---
            if in_frontmatter:
                if line.strip() == '---':
                    in_frontmatter = False
                    continue  # skip blank lines after closing ---
            else:
                # Skip leading blank lines after frontmatter
                if new_lines or line.strip() != '':
                    new_lines.append(line)
        return '\n'.join(new_lines).lstrip('\n')
    
    return content

def fix_em_dashes(content):
    """Replace em-dashes with ASCII hyphen-space"""
    content = content.replace('\u2014', ' - ')  # em-dash
    content = content.replace('\u2013', ' - ')  # en-dash
    return content

def fix_banned_words(content):
    """Replace banned words"""
    for word, replacement in BANNED.items():
        pattern = re.compile(r'\b' + word + r'\b', re.IGNORECASE)
        content = pattern.sub(replacement, content)
    return content

def fix_brackets(content):
    """Rewrite bracket content as natural sentences"""
    # Replace bracketed note citations like [002], [020] with parenthetical form
    content = re.sub(r'\[(\d+)\](?:\s*,?\s*\[(\d+)\])*', lambda m: 
        '(' + ', '.join(f'see note {n}' for n in re.findall(r'\d+', m.group(0))) + ')', content)
    # Replace other bracketed text that disrupts flow
    content = re.sub(r'\[([^\]]+)\]', lambda m: f'({m.group(1)})', content)
    return content

def fix_tables(content):
    """Replace markdown tables with bullet lists"""
    lines = content.split('\n')
    new_lines = []
    in_table = False
    table_data = []
    table_headers = []
    
    for line in lines:
        # Detect table row (starts and ends with |, contains | separators)
        if re.match(r'^\s*\|', line) and re.search(r'\|\s*$', line) and not re.match(r'^\s*-+', line.strip()):
            if not in_table:
                in_table = True
                table_data = []
            
            # Extract cells, skipping empty
            cells = [c.strip() for c in line.split('|')[1:-1]]
            cells = [c for c in cells if c]  # remove empty
            
            if cells:  # skip separator rows
                if not table_headers and len(cells) > 0:
                    table_headers = cells
                table_data.append(cells)
        elif in_table:
            # Table ended - convert to bullet list
            if table_data:
                if table_headers:
                    # Each row becomes bullets
                    for row in table_data:
                        for i, cell in enumerate(row):
                            if i < len(table_headers):
                                new_lines.append(f'- {table_headers[i]}: {cell}')
                        new_lines.append('')
                else:
                    # No headers, just list items
                    for row in table_data:
                        new_lines.append('- ' + ', '.join(row))
                    new_lines.append('')
                table_data = []
                table_headers = []
            in_table = False
            new_lines.append(line)
        else:
            new_lines.append(line)
    
    return '\n'.join(new_lines)

def add_metaphor_introductions(content):
    """Add metaphor introduction sentences where needed - before first use of each metaphor"""
    
    lines = content.split('\n')
    
    # Find which metaphors are used in this file
    used_metaphors = set()
    first_use_line = {}  # metaphor_word -> line index of first use
    
    for i, line in enumerate(lines):
        for pattern, (word, intro) in METAPHOR_INTROS.items():
            if re.search(pattern, line):
                used_metaphors.add(word)
                if word not in first_use_line:
                    first_use_line[word] = i
    
    # Check which metaphors need intro
    metaphors_need_intro = {}
    for word in used_metaphors:
        # Check if intro already present
        intro_phrase = METAPHOR_INTROS[[p for p in METAPHOR_INTROS if METAPHOR_INTROS[p][0] == word][0]][1]
        intro_word = intro_phrase.split(' (')[0]
        
        # Search in all lines before first use
        found = False
        for i in range(first_use_line.get(word, 0)):
            if intro_word in lines[i]:
                found = True
                break
        
        if not found:
            metaphors_need_intro[word] = first_use_line.get(word, 0)
    
    if not metaphors_need_intro:
        return content
    
    # Build new content with introductions inserted
    # Sort by line number (insert in reverse order to not disturb indices)
    sorted_items = sorted(metaphors_need_intro.items(), key=lambda x: x[1], reverse=True)
    
    result_lines = lines
    for word, insert_line in sorted_items:
        pattern = [p for p in METAPHOR_INTROS if METAPHOR_INTROS[p][0] == word][0]
        intro = METAPHOR_INTROS[pattern][1]
        
        # Insert the intro on a line before the first use
        # If insert_line > 0, put it there; otherwise put at start
        result_lines = result_lines[:insert_line] + [intro, ''] + result_lines[insert_line:]
    
    return '\n'.join(result_lines)

def remove_non_ascii(content):
    """Ensure ASCII only"""
    lines = []
    for line in content.split('\n'):
        ascii_line = ''.join(c for c in line if ord(c) < 128 or c == '\n')
        lines.append(ascii_line.rstrip())
    return '\n'.join(lines)

def process_file(filepath):
    """Process a single note file"""
    with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
    
    # 1. Remove frontmatter
    content = remove_frontmatter(content)
    
    # 2. Fix em-dashes
    content = fix_em_dashes(content)
    
    # 3. Fix tables
    content = fix_tables(content)
    
    # 4. Fix bracket citations
    content = fix_brackets(content)
    
    # 5. Add metaphor introductions
    content = add_metaphor_introductions(content)
    
    # 6. Fix banned words
    content = fix_banned_words(content)
    
    # 7. Remove non-ASCII
    content = remove_non_ascii(content)
    
    # 8. Clean up multiple blank lines
    content = re.sub(r'\n\n\n+', '\n\n', content)
    content = content.strip() + '\n'
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def main():
    files = sorted(NOTES_DIR.glob('[0-9]*.md'))
    
    processed = 0
    frontmatter_removed = 0
    metaphor_fixed = 0
    
    for filepath in files:
        if 'README' in filepath.name:
            continue
        
        processed += 1
        
        with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
            original = f.read()
        
        had_frontmatter = original.strip().startswith('---')
        if had_frontmatter:
            frontmatter_removed += 1
        
        # Check for missing metaphors
        missing = False
        for pattern, (word, intro) in METAPHOR_INTROS.items():
            if re.search(pattern, original):
                intro_word = intro.split(' (')[0]
                if intro_word.lower() not in original.lower().split('(metaphor')[0]:
                    missing = True
                    break
        
        if missing:
            metaphor_fixed += 1
        
        process_file(filepath)
    
    print(f"Files processed: {processed}")
    print(f"Files with frontmatter removed: {frontmatter_removed}")
    print(f"Files with metaphor introductions fixed: {metaphor_fixed}")

if __name__ == '__main__':
    main()