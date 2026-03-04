# Information Processing Pipeline

**Purpose:** Ingest documents → Extract entities/relations → Capture semantic meaning → Populate SurrealDB

**Tools:**
- Kreuzberg (document parsing)
- html-to-markdown (HTML conversion)
- langextract-rs (entity/relation extraction)
- ladybug-rs (cognitive fingerprints)
- SurrealDB (storage)

---

## Pipeline Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                         RAW INPUTS                                    │
│   PDF • HTML • DOCX • Images • Markdown • JSON                     │
└──────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌──────────────────────────────────────────────────────────────────────┐
│                    STAGE 1: DOCUMENT PARSING                        │
│  ┌──────────────┐  ┌─────────────────────┐  ┌────────────────────┐   │
│  │   Kreuzberg  │  │  html-to-markdown  │  │  Kreizberg OCR   │   │
│  │  (PDF/Docx) │  │    (HTML → MD)     │  │  (Image → Text)  │   │
│  └──────────────┘  └─────────────────────┘  └────────────────────┘   │
│                                                                       │
│  Output: Raw text + tables + images + metadata                      │
└──────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌──────────────────────────────────────────────────────────────────────┐
│                    STAGE 2: TEXT PROCESSING                           │
│  ┌──────────────┐  ┌─────────────────────┐  ┌────────────────────┐ │
│  │  Chunking    │  │  Language Detect   │  │  Summary (LLM)    │ │
│  │  (semantic)  │  │  (fasttext/langid) │  │  (optional)      │ │
│  └──────────────┘  └─────────────────────┘  └────────────────────┘ │
│                                                                       │
│  Output: Clean text chunks + metadata                                 │
└──────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌──────────────────────────────────────────────────────────────────────┐
│                    STAGE 3: EXTRACTION                               │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │                    langextract-rs                               │  │
│  │  • Entity recognition (person, project, concept, resource)  │  │
│  │  • Relation extraction (works_on, member_of, knows)          │  │
│  │  • Source grounding (character positions)                       │  │
│  │  • Schema validation                                            │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                       │
│  Output: Raw entities + relations + confidence scores                 │
└──────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌──────────────────────────────────────────────────────────────────────┐
│                    STAGE 4: SEMANTIC FINGERPRINTING                  │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │                    ladybug-rs                                    │  │
│  │  • Generate 10K-bit fingerprints for each entity              │  │
│  │  • Map relations to 144 verbs (IS_A, CAUSES, etc.)            │  │
│  │  • Compute similarity via Hamming distance                      │  │
│  │  • Store in LanceDB (vector index)                             │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                       │
│  Output: Fingerprints + similarity indices                            │
└──────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌──────────────────────────────────────────────────────────────────────┐
│                    STAGE 5: KNOWLEDGE GRAPH                           │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │                      SurrealDB                                  │  │
│  │  • Store entities (with fingerprints)                         │  │
│  │  • Store relations (graph edges)                               │  │
│  │  • HNSW vector index for semantic search                      │  │
│  │  • LIVE SELECT for real-time updates                           │  │
│  │  • Row-level permissions                                        │  │
│  └────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Schema Design (SurrealDB)

```sql
-- Namespaces
DEFINE NAMESPACE regen;

-- Database
DEFINE DATABASE regen_knowledge;

-- Entity table
DEFINE TABLE entity SCHEMAFULL;
DEFINE FIELD id ON entity TYPE string;
DEFINE FIELD name ON entity TYPE string;
DEFINE FIELD type ON entity TYPE enum<'person', 'project', 'concept', 'resource', 'location', 'event'>;
DEFINE FIELD description ON entity TYPE string;
DEFINE FIELD fingerprint ON entity TYPE array<uint>(1250);  -- 10K bits as bytes
DEFINE FIELD source ON entity TYPE string;
DEFINE FIELD source_id ON entity TYPE string;
DEFINE FIELD created_at ON entity TYPE datetime DEFAULT time::now();
DEFINE FIELD updated_at ON entity TYPE datetime DEFAULT time::now();

-- Relation table (graph edge)
DEFINE TABLE relation SCHEMAFULL TYPE relation;
DEFINE FIELD in ON relation TYPE entity;
DEFINE FIELD out ON relation TYPE entity;
DEFINE FIELD type ON relation TYPE enum<'member_of', 'works_on', 'knows', 'depends_on', 'provides', 'requires', 'discusses', 'authored', 'derived_from', 'similar_to'>;
DEFINE FIELD weight ON relation TYPE float DEFAULT 1.0;
DEFINE FIELD confidence ON relation TYPE float;
DEFINE FIELD source ON relation TYPE string;
DEFINE FIELD created_at ON relation TYPE datetime DEFAULT time::now();

-- Document tracking
DEFINE TABLE document SCHEMAFULL;
DEFINE FIELD id ON document TYPE string;
DEFINE FIELD title ON document TYPE string;
DEFINE FIELD type ON document TYPE enum<'pdf', 'html', 'docx', 'markdown', 'telegram'>;
DEFINE FIELD source ON document TYPE string;
DEFINE FIELD content ON document TYPE string;
DEFINE FIELD chunks ON document TYPE array<string>;
DEFINE FIELD processed_at ON document TYPE datetime DEFAULT time::now();

-- Extraction job tracking
DEFINE TABLE extraction_job SCHEMAFULL;
DEFINE FIELD id ON extraction_job TYPE string;
DEFINE FIELD document_id ON extraction_job TYPE document;
DEFINE FIELD status ON extraction_job TYPE enum<'pending', 'processing', 'completed', 'failed'>;
DEFINE FIELD entities_count ON extraction_job TYPE int DEFAULT 0;
DEFINE FIELD relations_count ON extraction_job TYPE int DEFAULT 0;
DEFINE FIELD started_at ON extraction_job TYPE datetime;
DEFINE FIELD completed_at ON extraction_job TYPE datetime;

-- Indexes
DEFINE INDEX entity_name ON entity FIELDS name SEARCH ANALYZER ascii BM25;
DEFINE INDEX entity_type ON entity FIELDS type;
DEFINE INDEX entity_fingerprint ON entity FIELDS fingerprint HNSW;

DEFINE INDEX relation_type ON relation FIELDS type;
DEFINE INDEX relation_in ON relation FIELDS in;
DEFINE INDEX relation_out ON relation FIELDS out;

-- Permissions
DEFINE ACCESS user ON DATABASE TYPE RECORD
  SCHEMAFULL
  PERMISSIONS
    SELECT WHERE source = $auth.id
    INSERT WHERE source = $auth.id
    UPDATE WHERE source = $auth.id
    DELETE WHERE source = $auth.id;
```

---

## Implementation

### Stage 1: Document Parsing

```rust
// src/pipeline/ingestion.rs
use kreuzberg::{extract_file_sync, ExtractConfig};
use std::path::Path;

pub struct DocumentParser;

impl DocumentParser {
    pub fn process(path: &str) -> Result<ParsedDocument, Error> {
        let config = ExtractConfig::default();
        let result = extract_file_sync(path, config)?;
        
        Ok(ParsedDocument {
            text: result.content,
            tables: result.tables,
            images: result.images,
            metadata: result.metadata,
        })
    }
    
    pub fn process_html(html: &str) -> Result<String, Error> {
        // Use html-to-markdown
        Ok(html_to_markdown::convert(html))
    }
}

#[derive(Debug)]
pub struct ParsedDocument {
    pub text: String,
    pub tables: Vec<Table>,
    pub images: Vec<Image>,
    pub metadata: Metadata,
}
```

### Stage 2: Text Chunking

```rust
// src/pipeline/chunker.rs
use crate::parser::ParsedDocument;

pub struct TextChunker {
    max_chunk_size: usize,
    overlap: usize,
}

impl TextChunker {
    pub fn new(max_size: usize, overlap: usize) -> Self {
        Self { max_chunk_size: max_size, overlap }
    }
    
    pub fn chunk(&self, text: &str) -> Vec<TextChunk> {
        let mut chunks = Vec::new();
        let sentences = self.split_sentences(text);
        
        let mut current = String::new();
        let mut start_pos = 0;
        
        for sentence in sentences {
            if current.len() + sentence.len() > self.max_chunk_size {
                chunks.push(TextChunk {
                    content: current.clone(),
                    start: start_pos,
                    end: start_pos + current.len(),
                });
                
                // Handle overlap
                let overlap_start = current.len().saturating_sub(self.overlap);
                start_pos += overlap_start;
                current = current[overlap_start..].to_string();
            }
            current.push_str(&sentence);
            current.push(' ');
        }
        
        if !current.is_empty() {
            chunks.push(TextChunk {
                content: current,
                start: start_pos,
                end: start_pos + current.len(),
            });
        }
        
        chunks
    }
    
    fn split_sentences(&self, text: &str) -> Vec<String> {
        // Simple sentence splitting
        text.split(|c| c == '.' || c == '!' || c == '?')
            .map(|s| s.trim().to_string())
            .filter(|s| !s.is_empty())
            .collect()
    }
}
```

### Stage 3: Entity/Relation Extraction

```rust
// src/pipeline/extraction.rs
use langextract_rust::{extract, ExtractConfig, ExampleData, Extraction};

pub struct EntityExtractor {
    config: ExtractConfig,
    examples: Vec<ExampleData>,
}

impl EntityExtractor {
    pub fn new() -> Self {
        let examples = vec![
            ExampleData::new(
                "Alice is leading the solar garden project with Bob".to_string(),
                vec![
                    Extraction::new("person".to_string(), "Alice".to_string()),
                    Extraction::new("person".to_string(), "Bob".to_string()),
                    Extraction::new("project".to_string(), "solar garden".to_string()),
                    Extraction::new("relation".to_string(), "Alice works_on solar garden".to_string()),
                    Extraction::new("relation".to_string(), "Bob works_on solar garden".to_string()),
                ],
            )
        ];
        
        let config = ExtractConfig {
            model_id: "qwen3:30b".to_string(),
            model_url: Some("http://localhost:11434".to_string()),
            temperature: 0.3,
            max_char_buffer: 8000,
            max_workers: 6,
            ..Default::default()
        };
        
        Self { config, examples }
    }
    
    pub async fn extract(&self, text: &str) -> Result<ExtractionResult, Error> {
        let result = extract(
            text,
            Some("Extract persons, projects, concepts, resources and their relationships"),
            &self.examples,
            self.config.clone(),
        ).await?;
        
        Ok(ExtractionResult {
            entities: self.parse_entities(&result),
            relations: self.parse_relations(&result),
        })
    }
    
    fn parse_entities(&self, result: &ExtractResult) -> Vec<Entity> {
        // Parse extracted entities from langExtract result
        // Map to our schema types
    }
    
    fn parse_relations(&self, result: &ExtractResult) -> Vec<Relation> {
        // Parse relations
    }
}
```

### Stage 4: Semantic Fingerprinting

```rust
// src/pipeline/fingerprint.rs
use ladybug::core::Fingerprint;
use ladybug::graph::{CogGraph, CogEdge, Verb};

pub struct Fingerprinter;

impl Fingerprinter {
    pub fn generate_entity_fingerprint(name: &str, entity_type: &str) -> Vec<u8> {
        let input = format!("{}:{}", entity_type, name);
        let fp = Fingerprint::from_content(&input);
        fp.as_bytes().to_vec()
    }
    
    pub fn generate_relation_fingerprint(
        from: &str,
        relation_type: &str,
        to: &str,
    ) -> Verb {
        // Map relation types to ladybug verbs
        match relation_type {
            "member_of" => Verb::IsA,
            "works_on" => Verb::Depends,
            "knows" => Verb::Knows,
            "depends_on" => Verb::Requires,
            "provides" => Verb::Produces,
            "requires" => Verb::Needs,
            "discusses" => Verb::Experiences,
            _ => Verb::Relates,
        }
    }
    
    pub fn compute_similarity(fp1: &[u8], fp2: &[u8]) -> f64 {
        let f1 = Fingerprint::from_bytes(fp1);
        let f2 = Fingerprint::from_bytes(fp2);
        f1.similarity(&f2)
    }
}
```

### Stage 5: Database Storage

```rust
// src/pipeline/storage.rs
use surrealdb::Surreal;
use surrealdb::engine::local::{Db, RocksDb};
use serde::{Serialize, Deserialize};

pub struct KnowledgeStore {
    db: Surreal<Db>,
}

impl KnowledgeStore {
    pub async fn new(path: &str) -> Result<Self, Error> {
        let db = Surreal::new::<RocksDb>(path).await?;
        db.use_ns("regen").use_db("knowledge").await?;
        Ok(Self { db })
    }
    
    pub async fn insert_entity(&self, entity: Entity) -> Result<Entity, Error> {
        let created: Option<Entity> = self.db
            .create(("entity", &entity.id))
            .content(entity)
            .await?;
        Ok(created.unwrap())
    }
    
    pub async fn insert_relation(&self, relation: Relation) -> Result<Relation, Error> {
        let created: Option<Relation> = self.db
            .create(("relation", &relation.id))
            .content(relation)
            .await?;
        Ok(created.unwrap())
    }
    
    pub async fn query_entity_by_name(&self, name: &str) -> Result<Vec<Entity>, Error> {
        let entities: Vec<Entity> = self.db
            .query("SELECT * FROM entity WHERE name CONTAINS $name")
            .bind(("name", name))
            .await?
            .take(0)?;
        Ok(entities)
    }
    
    pub async fn query_relations(&self, entity_id: &str) -> Result<Vec<Relation>, Error> {
        let relations: Vec<Relation> = self.db
            .query("SELECT * FROM relation WHERE in = $entity OR out = $entity")
            .bind(("entity", format!("entity:{}", entity_id)))
            .await?
            .take(0)?;
        Ok(relations)
    }
    
    pub async fn semantic_search(&self, query_fp: &[u8], limit: usize) -> Result<Vec<Entity>, Error> {
        let entities: Vec<Entity> = self.db
            .query("SELECT * FROM entity ORDER BY vector::similarity::cosine(fingerprint, $fp) LIMIT $limit")
            .bind(("fp", query_fp.to_vec()))
            .bind(("limit", limit))
            .await?
            .take(0)?;
        Ok(entities)
    }
}
```

---

## Pipeline Orchestration

```rust
// src/main.rs
mod pipeline;

#[tokio::main]
async fn main() -> Result<(), Error> {
    let parser = DocumentParser::new();
    let chunker = TextChunker::new(1000, 100);
    let extractor = EntityExtractor::new();
    let fingerprinter = Fingerprinter;
    let store = KnowledgeStore::new("./data/knowledge.db").await?;
    
    // Process a document
    let doc_path = "documents/miro-export.pdf";
    let parsed = parser.process(doc_path)?;
    
    // Chunk the text
    let chunks = chunker.chunk(&parsed.text);
    
    // Extract entities and relations
    for chunk in chunks {
        let extraction = extractor.extract(&chunk.content).await?;
        
        // Generate fingerprints
        for entity in &extraction.entities {
            let fp = fingerprinter.generate_entity_fingerprint(&entity.name, &entity.entity_type);
            let entity_with_fp = Entity {
                fingerprint: fp,
                ..entity
            };
            store.insert_entity(entity_with_fp).await?;
        }
        
        for relation in &extraction.relations {
            store.insert_relation(relation.clone()).await?;
        }
    }
    
    println!("Pipeline complete!");
    Ok(())
}
```

---

## Example Queries

```sql
-- Find all projects a person works on
SELECT ->relation->entity as projects 
FROM entity 
WHERE name = 'Alice' 
AND type = 'person';

-- Find all members of a project
SELECT <-relation<-entity as members 
FROM entity 
WHERE name = 'Solar Garden' 
AND type = 'project';

-- Semantic search: find similar entities
SELECT * FROM entity 
WHERE vector::similarity::cosine(fingerprint, $query_fp) > 0.8
LIMIT 10;

-- Complex: Projects like X worked on by people who know Alice
SELECT DISTINCT p.* FROM entity a
JOIN works_on w1 ON a.id = w1.in
JOIN person p ON w1.out = p.id
JOIN works_on w2 ON p.id = w2.in
JOIN entity target ON w2.out = target.id
WHERE a.name = 'Alice' AND target.name = 'Energy Grid';
```

---

## Configuration

```yaml
# config.yaml
pipeline:
  chunker:
    max_size: 1000
    overlap: 100
  
  extraction:
    model: "qwen3:30b"
    url: "http://localhost:11434"
    temperature: 0.3
    max_workers: 6
  
  storage:
    path: "./data/knowledge.db"
    namespace: "regen"
    database: "knowledge"

security:
  rbac:
    enabled: true
  audit:
    enabled: true
```

---

## Next Steps

1. **Install dependencies** (see README)
2. **Configure LLM** (Ollama with qwen3:30b)
3. **Set up SurrealDB** (local or cloud)
4. **Run pipeline** on sample documents
5. **Query and visualize** results

---

*See: github.com/regentribes/regen-knowledge-graph*
