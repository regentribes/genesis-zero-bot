# LLM Pareto Analyzer Skill

## Purpose
Instrumentation for intelligence provider selection and pricing analysis. Constructs Pareto frontiers comparing models based on intelligence, cost, and performance.

## Data Sources
- https://models.dev/ - Openrouter model directory
- https://artificialanalysis.ai/ - Independent LLM benchmarks
- https://michaelshi.me/pareto/ - Pareto analysis
- https://arena.ai/leaderboard/ - Chatbot arena rankings
- https://nano-gpt.com/pricing/ - Pricing comparisons
- https://build.nvidia.com/models/ - NVIDIA hosted models
- https://github.com/cheahjs/free-llm-api-resources - Free API resources

## Usage

### Fetch and analyze model data:
```
llm-pareto-analyzer fetch <source> [--format json|markdown]
llm-pareto-analyzer analyze [--metrics intelligence,cost,performance]
llm-pareto-analyzer frontier [--visualize]
```

### Scripts
- `fetch_data.py` - Gather data from all sources
- `analyze.py` - Build Pareto frontier analysis
- `report.py` - Generate comparison reports

## Output
- Pareto frontier charts (intelligence vs cost)
- Model rankings by efficiency
- Recommendations by use case

## Integration
This skill is designed to be extended with additional data sources over time.
