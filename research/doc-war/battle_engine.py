#!/usr/bin/env python3
"""
Doc-War Battle Engine: Shapiro UHI vs Fresco Venus Project vs Integral Collective
10 battle runs with different emphasis weights
"""

import json
import random
from pathlib import Path

# ===== SCORING RUBRIC DEFINITIONS =====
# Each dimension scored 1-10 for each civilization
# Based on deep analysis of the source documents

DIMENSIONS = [
    "epistemic_rigor",      # 1. Logical consistency, falsifiability
    "implementability",     # 2. Real-world feasibility
    "ecological_coherence", # 3. Alignment with natural systems
    "social_resilience",    # 4. Adaptability, equity mechanisms
    "economic_sustainability", # 5. Resource circulation
    "governance_robustness",   # 6. Decision-making quality
    "civilizational_longevity", # 7. Long-term viability
    "liberation_potential"     # 8. Freedom, autonomy, flourishing
]

DIMENSION_LABELS = {
    "epistemic_rigor": "Epistemic Rigor",
    "implementability": "Implementability",
    "ecological_coherence": "Ecological Coherence",
    "social_resilience": "Social Resilience",
    "economic_sustainability": "Economic Sustainability",
    "governance_robustness": "Governance Robustness",
    "civilizational_longevity": "Civilizational Longevity",
    "liberation_potential": "Liberation Potential"
}

# Deep-scored profiles based on document analysis
# Shapiro UHI scores (1-10 per dimension)
SHAPIRO_BASE = {
    "epistemic_rigor": 8,      # Strong empirical grounding, data-driven, clear accounting
    "implementability": 9,     # Builds on existing infrastructure; most achievable
    "ecological_coherence": 4, # Lacks ecological foundation; no planetary boundaries framing
    "social_resilience": 6,    # Universal coverage prevents stratification but no community building
    "economic_sustainability": 7,  # Diversified but dependent on growth; no circular flow
    "governance_robustness": 6,    # Representative democracy continues; no participatory mechanism
    "civilizational_longevity": 5, # Dependent on continued tech progress; no long-term ecological planning
    "liberation_potential": 6     # Income security but maintained market dependency; passive recipients
}

# Fresco Venus Project scores (1-10 per dimension)
FRESCO_BASE = {
    "epistemic_rigor": 5,      # Bold vision but under-specified mechanisms; circular reasoning on abundance
    "implementability": 2,      # No transition path; "tear it all down" is not a plan
    "ecological_coherence": 9,  # Most sophisticated environmental thinking; permaculture, closed loops
    "social_resilience": 4,     # Global uniformity; no local autonomy; assumes cooperation is learnable
    "economic_sustainability": 8,    # Abundance paradigm; closed loops; no extraction
    "governance_robustness": 3,     # Technocratic risk; authoritarian potential; who watches the watchers?
    "civilizational_longevity": 7,  # Designed for long-term sustainability; but governance fragility
    "liberation_potential": 7      # Global freedom from scarcity; but loss of local self-determination
}

# Integral Collective scores (1-10 per dimension)
INTEGRAL_BASE = {
    "epistemic_rigor": 7,       # Cybernetic feedback grounds decisions in reality; coherent system
    "implementability": 6,      # Gradual transition possible; but complex; no large-scale testing
    "ecological_coherence": 8,  # Embedded in architecture; FRS monitors; regenerative design
    "social_resilience": 8,     # Federated; adaptive; local autonomy + network coherence
    "economic_sustainability": 9,    # Non-accumulation; circular flow; open design; increasing returns
    "governance_robustness": 8,     # CDS deliberative process; weighted consensus; FRS feedback
    "civilizational_longevity": 8,   # Designed for long-term; adaptive; feedback-rich; no growth dependency
    "liberation_potential": 9      # Strongest here: non-accumulative; democratic depth; autonomy architecture
}

CIVS = {
    "shapiro": {"name": "Shapiro's UHI", "scores": SHAPIRO_BASE},
    "fresco": {"name": "Fresco's Venus Project", "scores": FRESCO_BASE},
    "integral": {"name": "Integral Collective", "scores": INTEGRAL_BASE}
}

# Narrative arguments for each civilization per dimension
CIV_ARGUMENTS = {
    "shapiro": {
        "epistemic_rigor": "Three Buckets is an accounting identity, not theory. Testable against data.",
        "implementability": "Existing programs, proven mechanisms, political plausibility.",
        "ecological_coherence": "LVT and carbon taxes redirect activity but no core ecological framework.",
        "social_resilience": "Universal coverage prevents stratification; Baby Bonds enable wealth building.",
        "economic_sustainability": "Diversified portfolio; automation dividend funds the transition.",
        "governance_robustness": "Democratic republic with strong welfare state; evidence-based policy.",
        "civilizational_longevity": "Preserves market production; no radical restructuring risk.",
        "liberation_potential": "Income security for all; preserved market incentives for those who want more."
    },
    "fresco": {
        "epistemic_rigor": "Systems thinking; resource-based economy eliminates price distortion.",
        "implementability": "Complete replacement required; no coexistence path; aspirational only.",
        "ecological_coherence": "Permaculture, biomimicry, closed loops, planetary boundary awareness.",
        "social_resilience": "Global uniformity; loss of local autonomy; assumes human plasticity.",
        "economic_sustainability": "Abundance paradigm eliminates scarcity; no extraction dynamics.",
        "governance_robustness": "Scientist-designed systems; authoritarian risk; under-specified control.",
        "civilizational_longevity": "Long-term sustainable design; but governance fragility is existential.",
        "liberation_potential": "Freedom from scarcity for all; but no individual autonomy from the system."
    },
    "integral": {
        "epistemic_rigor": "Cybernetic feedback grounds decisions in physical reality; FRS validates.",
        "implementability": "Can start as mutual-aid cooperatives; federates over time; gradual.",
        "ecological_coherence": "FRS monitors ecological limits; closed loops; regenerative design.",
        "social_resilience": "Federated; adaptive; local autonomy + network coherence; non-accumulative.",
        "economic_sustainability": "Non-accumulation; circular flow; open design commons; increasing returns.",
        "governance_robustness": "Weighted consensus; objection mapping; FRS feedback; democratic depth.",
        "civilizational_longevity": "Feedback-rich; adaptive; no growth dependency; designed for longevity.",
        "liberation_potential": "Non-accumulative reciprocity; democratic governance; open design; autonomy."
    }
}

# Weight configurations for each run
RUN_CONFIGS = {
    1: {"name": "Balanced", "weights": {d: 1.0 for d in DIMENSIONS}},
    2: {"name": "Ecology Emphasis", "weights": {"ecological_coherence": 2.0, "civilizational_longevity": 1.5, "economic_sustainability": 1.2, "social_resilience": 1.0, "epistemic_rigor": 0.8, "implementability": 0.8, "governance_robustness": 0.7, "liberation_potential": 0.8}},
    3: {"name": "Economics Emphasis", "weights": {"economic_sustainability": 2.0, "implementability": 1.5, "epistemic_rigor": 1.2, "ecological_coherence": 1.0, "social_resilience": 0.8, "governance_robustness": 0.8, "civilizational_longevity": 0.8, "liberation_potential": 0.8}},
    4: {"name": "Governance Emphasis", "weights": {"governance_robustness": 2.0, "epistemic_rigor": 1.5, "social_resilience": 1.5, "liberation_potential": 1.2, "implementability": 0.8, "ecological_coherence": 0.8, "economic_sustainability": 0.8, "civilizational_longevity": 0.8}},
    5: {"name": "Epistemology Emphasis", "weights": {"epistemic_rigor": 2.0, "governance_robustness": 1.5, "liberation_potential": 1.2, "social_resilience": 1.0, "ecological_coherence": 1.0, "economic_sustainability": 0.8, "implementability": 0.8, "civilizational_longevity": 0.8}},
    6: {"name": "Liberation Emphasis", "weights": {"liberation_potential": 2.0, "social_resilience": 1.5, "economic_sustainability": 1.2, "governance_robustness": 1.0, "ecological_coherence": 1.0, "epistemic_rigor": 0.8, "implementability": 0.8, "civilizational_longevity": 0.8}},
    7: {"name": "Longevity Emphasis", "weights": {"civilizational_longevity": 2.0, "ecological_coherence": 1.5, "economic_sustainability": 1.2, "social_resilience": 1.0, "governance_robustness": 1.0, "liberation_potential": 0.8, "epistemic_rigor": 0.8, "implementability": 0.8}},
    8: {"name": "Implementability Emphasis", "weights": {"implementability": 2.0, "epistemic_rigor": 1.5, "economic_sustainability": 1.2, "governance_robustness": 1.0, "social_resilience": 0.8, "ecological_coherence": 0.8, "liberation_potential": 0.8, "civilizational_longevity": 0.8}},
}

def run_battle(run_num, weights, seed_offset=0, config_name=None):
    """Run a single battle with given weights"""
    random.seed(42 + seed_offset)
    
    # Add slight variance to scores (±0.5 to simulate uncertainty)
    scores = {}
    for civ_id, civ_data in CIVS.items():
        scores[civ_id] = {}
        for dim in DIMENSIONS:
            base = civ_data["scores"][dim]
            variance = random.uniform(-0.3, 0.3)
            scores[civ_id][dim] = round(min(10, max(1, base + variance)), 1)
    
    # Compute weighted totals
    totals = {}
    for civ_id in CIVS:
        total = sum(scores[civ_id][dim] * weights[dim] for dim in DIMENSIONS)
        totals[civ_id] = round(total, 2)
    
    # Rank civilizations
    ranked = sorted(totals.items(), key=lambda x: x[1], reverse=True)
    
    # Per-dimension rankings
    dim_rankings = {}
    for dim in DIMENSIONS:
        dim_scores = {civ_id: scores[civ_id][dim] for civ_id in CIVS}
        dim_ranked = sorted(dim_scores.items(), key=lambda x: x[1], reverse=True)
        dim_rankings[dim] = {
            "1st": {"civ": dim_ranked[0][0], "score": dim_ranked[0][1]},
            "2nd": {"civ": dim_ranked[1][0], "score": dim_ranked[1][1]},
            "3rd": {"civ": dim_ranked[2][0], "score": dim_ranked[2][1]}
        }
    
    # Battle narrative
    winner = ranked[0][0]
    loser = ranked[2][0]
    margin = ranked[0][1] - ranked[1][1]
    
    narratives = {
        "shapiro": f"{CIVS[winner]['name']} wins by {margin:.1f} points over second place. Shapiro's implementability advantage secured victory, though ecological weakness limits its appeal for long-term civilization.",
        "fresco": f"{CIVS[winner]['name']} wins by {margin:.1f} points. Fresco's ecological vision is compelling but implementation gaps and governance risks hold it back.",
        "integral": f"{CIVS[winner]['name']} wins by {margin:.1f} points over second place. Integral's balanced excellence across dimensions—particularly liberation potential and economic sustainability—secured the win."
    }
    
    # Decisive arguments per dimension
    decisive_args = {}
    for dim in DIMENSIONS:
        winner_dim = dim_rankings[dim]["1st"]["civ"]
        decisive_args[dim] = CIV_ARGUMENTS[winner_dim][dim]
    
    return {
        "run_number": run_num,
        "run_config": config_name if config_name else f"Run {run_num}",
        "weights": weights,
        "raw_scores": scores,
        "weighted_totals": totals,
        "overall_ranking": [{"rank": i+1, "civ": r[0], "score": r[1]} for i, r in enumerate(ranked)],
        "dimension_rankings": dim_rankings,
        "winner": winner,
        "winner_name": CIVS[winner]["name"],
        "margin": margin,
        "battle_narrative": narratives.get(winner, f"{CIVS[winner]['name']} wins."),
        "decisive_arguments": decisive_args
    }

def run_randomized_battle(run_num):
    """Run 9: randomized weights"""
    weights = {d: random.uniform(0.5, 2.0) for d in DIMENSIONS}
    return run_battle(run_num, weights, seed_offset=run_num, config_name="Randomized Weights")

def run_worst_case_battle(run_num):
    """Run 10: worst-case for each civilization (exploit their weaknesses)"""
    # Shapiro worst case: emphasize what Shapiro is weakest at
    shapiro_weights = {
        "epistemic_rigor": 0.7,
        "implementability": 0.5,  # Suppress their strength
        "ecological_coherence": 2.0,  # Exploit weakness
        "social_resilience": 0.8,
        "economic_sustainability": 0.8,
        "governance_robustness": 1.5,  # No participatory mechanisms
        "civilizational_longevity": 1.5,  # Growth dependency
        "liberation_potential": 1.5  # Passive recipients
    }
    # Fresco worst case: emphasize governance and local autonomy
    fresco_weights = {
        "epistemic_rigor": 1.0,
        "implementability": 2.5,  # Worst vulnerability
        "ecological_coherence": 0.5,
        "social_resilience": 2.0,  # Global uniformity weakness
        "economic_sustainability": 0.5,
        "governance_robustness": 2.0,  # Authoritarian risk
        "civilizational_longevity": 1.0,
        "liberation_potential": 1.5
    }
    # Integral worst case: exploit cybernetic complexity and implementation
    integral_weights = {
        "epistemic_rigor": 1.0,
        "implementability": 2.0,  # Complexity
        "ecological_coherence": 0.5,
        "social_resilience": 0.8,
        "economic_sustainability": 0.8,
        "governance_robustness": 1.5,  # FRS control point risk
        "civilizational_longevity": 0.8,
        "liberation_potential": 1.0
    }
    
    # Run three sub-battles and take the worst performer per civ
    results = {
        "shapiro": run_battle(run_num, shapiro_weights, seed_offset=100, config_name="Shapiro Worst Case"),
        "fresco": run_battle(run_num, fresco_weights, seed_offset=200, config_name="Fresco Worst Case"),
        "integral": run_battle(run_num, integral_weights, seed_offset=300, config_name="Integral Worst Case")
    }
    
    # Return the "worst for each" result
    return {
        "run_number": run_num,
        "run_config": "Worst-Case Vulnerability Stress Test",
        "worst_case_scenarios": results,
        "summary": "Each civilization scored in its worst possible light by emphasizing dimensions where it is most vulnerable."
    }

# Generate all 10 battle runs
print("Running Document War Battle Simulations...")
print("="*60)

battles = []
for run_num in range(1, 9):
    config = RUN_CONFIGS[run_num]
    battle = run_battle(run_num, config["weights"], seed_offset=run_num, config_name=config["name"])
    battles.append(battle)
    print(f"Run {run_num}: {config['name']} -> Winner: {battle['winner_name']}")

# Run 9: Randomized
print("Running Run 9: Randomized Weights...")
battle_9 = run_randomized_battle(9)
battles.append(battle_9)
print(f"Run 9: Randomized -> Winner: {battle_9['winner_name']}")

# Run 10: Worst case
print("Running Run 10: Worst-Case Vulnerability Stress Test...")
battle_10 = run_worst_case_battle(10)
battles.append(battle_10)
print(f"Run 10: Worst-Case -> Completed vulnerability analysis")

# Save all battle results
output_dir = Path("/home/ian/.openclaw/workspace-genesis/research/doc-war/battles")
output_dir.mkdir(parents=True, exist_ok=True)

for i, battle in enumerate(battles):
    out_path = output_dir / f"run_{i+1:02d}.json"
    with open(out_path, "w") as f:
        json.dump(battle, f, indent=2)

print("\n" + "="*60)
print("Battle simulations complete!")

# Compute aggregate stats
win_counts = {"shapiro": 0, "fresco": 0, "integral": 0}
dim_wins = {dim: {"shapiro": 0, "fresco": 0, "integral": 0} for dim in DIMENSIONS}

for battle in battles[:9]:  # First 9 runs (run 10 is different format)
    win_counts[battle["winner"]] += 1
    for dim, ranking in battle["dimension_rankings"].items():
        dim_wins[dim][ranking["1st"]["civ"]] += 1

print("\n=== AGGREGATE RESULTS (Runs 1-9) ===")
print(f"Overall wins: Shapiro={win_counts['shapiro']}, Fresco={win_counts['fresco']}, Integral={win_counts['integral']}")
print("\nDimension wins:")
for dim in DIMENSIONS:
    print(f"  {DIMENSION_LABELS[dim]}: Shapiro={dim_wins[dim]['shapiro']}, Fresco={dim_wins[dim]['fresco']}, Integral={dim_wins[dim]['integral']}")