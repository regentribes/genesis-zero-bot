#!/usr/bin/env python3
import json, os
from kreuzberg import extract_file_sync, ChunkingConfig, ExtractionConfig

os.makedirs("/home/ian/.openclaw/workspace-genesis/research/doc-war/extracted", exist_ok=True)

config = ExtractionConfig(
    chunking=ChunkingConfig(max_chars=800, max_overlap=150),
    output_format="markdown"
)

files = {
    "shapiro_uhi": "/home/ian/.openclaw/media/inbound/Shapiro_2026_UHI_Whitepaper_v01---6a5d8e96-9993-489f-a607-05c759bd2cf7.docx",
    "fresco_dtf": "/home/ian/.openclaw/media/inbound/Jacque_Fresco_-_Designing_the_Future---63c287d8-77a0-4822-a265-a8b695da42af.pdf",
}

for name, path in files.items():
    print(f"Extracting {name} from {path}...")
    result = extract_file_sync(path, None, config)
    
    chunks = []
    if hasattr(result, 'chunks') and result.chunks:
        for c in result.chunks:
            chunks.append({
                "text": c.text if hasattr(c, 'text') else str(c),
                "source_ref": c.source_ref if hasattr(c, 'source_ref') else None
            })
    
    tables = []
    if hasattr(result, 'tables') and result.tables:
        for t in result.tables:
            tables.append(str(t))
    
    output = {
        "document": name,
        "content": result.content,
        "chunks": chunks,
        "metadata": result.metadata if hasattr(result, 'metadata') else {},
        "tables": tables,
        "word_count": len(result.content.split()),
        "char_count": len(result.content)
    }
    
    out_path = f"/home/ian/.openclaw/workspace-genesis/research/doc-war/extracted/{name}_extraction.json"
    with open(out_path, "w") as f:
        json.dump(output, f, indent=2)
    print(f"  -> Extracted {name}: {output['word_count']} words, {len(chunks)} chunks")

print("Done with local files.")