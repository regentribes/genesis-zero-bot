#!/usr/bin/env bash
# query.sh — Search Genesis' knowledge graph
# Usage: bash query.sh "<natural language query>" [limit]
# Output: JSON with search results, related connections, and source documents
set -euo pipefail

QUERY="$1"
LIMIT="${2:-10}"

SKILL_DIR="$HOME/.openclaw/workspace-genesis/skills/semantic-graph"
cd "$SKILL_DIR"
source .venv/bin/activate
export $(grep -v "^#" "$HOME/.openclaw/.env" | xargs)

python3 -c "
import asyncio, json, os, sys
sys.path.insert(0, '.')
from embeddings import search, embed_text
from surrealdb import AsyncSurreal

async def run():
    db = AsyncSurreal(url='ws://127.0.0.1:8000')
    await db.connect()
    await db.signin({'username': 'root', 'password': os.environ['SURREAL_PASS']})
    await db.use('semantic_graph', 'main')

    # Semantic search
    results = await search(db, '''$QUERY''', limit=$LIMIT)

    # Convert RecordID objects to strings
    clean_results = []
    for r in results:
        clean = {}
        for k, v in r.items():
            if hasattr(v, 'table_name'):
                clean[k] = str(v)
            else:
                clean[k] = v
        clean_results.append(clean)

    # Get connections for top concepts
    connections = []
    top_names = [r.get('name', '') for r in results[:5]]
    for name in top_names:
        if not name:
            continue
        rels = await db.query('''
            SELECT in.name as source, verb, out.name as target,
                   evidence, nars_confidence
            FROM relates
            WHERE in.name = \$n OR out.name = \$n
            ORDER BY nars_confidence DESC
            LIMIT 5
        ''', {'n': name})
        for rel in (rels or []):
            connections.append({
                'source': str(rel.get('source', '')),
                'verb': str(rel.get('verb', '')),
                'target': str(rel.get('target', '')),
                'evidence': str(rel.get('evidence', '')),
                'confidence': float(rel.get('nars_confidence', 0))
            })

    # Deduplicate connections
    seen = set()
    unique_connections = []
    for c in connections:
        key = f\"{c['source']}_{c['verb']}_{c['target']}\"
        if key not in seen:
            seen.add(key)
            unique_connections.append(c)

    output = {
        'query': '''$QUERY''',
        'results': clean_results,
        'connections': unique_connections[:10],
    }
    print(json.dumps(output, indent=2, default=str))
    await db.close()

asyncio.run(run())
"
