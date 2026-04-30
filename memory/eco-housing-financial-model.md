# Eco-Housing Tower Cluster — Financial Model (Corrected)

## Revisions from Original Document
- PV generation corrected (was ~184k kWh → ~145k kWh)
- Added realistic OPEX categories
- Added proper payback calculation with NOI
- Flagged aggressive fish yield assumption

---

## CAPEX (Initial Investment) — Corrected

| Component | Area/Units | Rate | Total (USD) |
|-----------|------------|------|--------------|
| Housing Construction | 9,373 m² | $1,836/m² | $17,204,400 |
| Intensive Market Gardens | 41,054 m² | $54/m² | $2,217,000 |
| Agroforestry | 21,268 m² | $1.08/m² | $22,969 |
| Greenhouse | 825 m² | $324/m² | $267,300 |
| Fish Farming (Lake) | 10,387 m² | $5.40/m² | $56,090 |
| Rabbit Husbandry | (in agroforestry) | — | included |
| PV System | 795 m² (active) | $648/m² | $515,160 |
| Anaerobic Digester | 1 unit | $110,000 | $110,000 |
| **TOTAL CAPEX** | | | **$20,392,919** |

> *Note: Original document had $800k for energy systems. Broke out to show $515k PV + $110k digester = $625k (closer to original but more transparent).*

---

## ANNUAL REVENUE (Corrected)

| Source | Area | Rate | Annual Revenue |
|--------|------|------|----------------|
| Intensive Market Gardens | 41,054 m² | $20/m² | $821,080 |
| Agroforestry (Crops) | 21,268 m² | $0.50/m² | $10,634 |
| Agroforestry (Rabbits) | 21,268 m² | $0.20/m² | $4,254 |
| Greenhouse | 825 m² | $54/m² | $44,550 |
| Fish Farming | 10,387 m² | $5.00/m² | $51,935 |
| Residential Rental | 9,373 m² | $140.40/m²/yr | $1,315,917 |
| PV Electricity | 145,360 kWh | $0.216/kWh | $31,398 |
| Biogas | 30,000 kWh | $0.216/kWh | $6,480 |
| **TOTAL REVENUE** | | | **$2,286,248** |

> *PV corrected from 184,000 → 145,360 kWh = $31,398 (not $46,224)*

---

## ANNUAL OPEX (Realistic Estimates)

| Category | Rate/Unit | Annual Cost |
|----------|-----------|-------------|
| **Operations & Management** | | |
| Farm Manager (2 FTE) | $45k/yr each | $90,000 |
| Maintenance Staff (1 FTE) | $35k/yr | $35,000 |
| Community Manager (pt) | $25k/yr | $25,000 |
| **Utilities** | | |
| Water (irrigation + domestic) | estimate | $15,000 |
| Internet/Communications | | $5,000 |
| **Maintenance** | | |
| PV Maintenance (0.5% of CAPEX) | $515k × 0.5% | $2,576 |
| Building Maintenance (1% of housing CAPEX) | $17.2M × 1% | $172,044 |
| Greenhouse Systems | $20/m² | $16,500 |
| Lake/Aquaculture Maintenance | $2/m² | $20,774 |
| Agroforestry Maintenance | $0.25/m² | $5,317 |
| **Insurance** | 0.5% of total CAPEX | $101,965 |
| **Property Tax** (approx 1.1% in Slovakia) | 1.1% of value | $224,322 |
| **Reserve Fund** (2% of CAPEX) | | $407,858 |
| **Other** | | |
| Marketing/Vacancy (5% rental) | | $65,796 |
| Administrative/Legal | | $15,000 |
| **TOTAL OPEX** | | **$1,202,152** |

---

## NET OPERATING INCOME (NOI)

```
Total Revenue:    $2,286,248
Total OPEX:      -$1,202,152
─────────────────────────────
NOI:              $1,084,096
```

**NOI Margin:** 47.4%

---

## RETURNS ANALYSIS

| Metric | Value |
|--------|-------|
| Total CAPEX | $20,392,919 |
| Annual NOI | $1,084,096 |
| **Simple Payback** | **18.8 years** |
| **Cap Rate** | **5.3%** |

> *Original document didn't calculate real payback (no OPEX). 18.8 years is realistic for this type of project.*

---

## SENSITIVITY ANALYSIS

| Scenario | NOI | Payback |
|----------|-----|---------|
| **Base Case** (as above) | $1.08M | 18.8 yrs |
| Revenue -10% | $855k | 23.8 yrs |
| Revenue +10% | $1.31M | 15.6 yrs |
| OPEX +10% (higher costs) | $946k | 21.5 yrs |
| OPEX -10% (leaner ops) | $1.22M | 16.7 yrs |
| Fish yield 50% lower* | $1.01M | 20.2 yrs |

> *Fish at 0.625 kg/m² instead of 1.25 kg/m² (more realistic for semi-intensive)*

---

## KEY INSIGHTS

1. **Housing drives revenue** — 58% of total revenue is residential. The agricultural components are meaningful but secondary.

2. **OPEX is the lever** — At $1.2M/year, labor and maintenance dominate. Reducing FTE or finding volunteer labor could improve returns significantly.

3. **PV correction hurts** — Lost ~$15k/year in electricity revenue. Not fatal, but worth noting.

4. **Payback < 20 years** is achievable — This is actually competitive with conventional real estate in Europe.

5. **Water is the hidden risk** — Not in the model. Slovak climate means irrigation needs could spike costs in dry years.

---

## QUESTIONS FOR REFINEMENT

1. What is the assumed occupancy rate for rentals?
2. Are farm labor costs offset by resident work hours?
3. What's the actual land cost (not included above)?
4. What financing terms (debt vs equity)?
5. Is the digester sized for food waste, agricultural waste, or also human waste?

---

*Model built: 2026-03-04*
*For: Martin V / Eco-Housing Project Concept*
