# Global Industry Classification Systems

## Downloaded Documents

| File | Description | Size |
|------|-------------|------|
| `pkd_2025.pdf` | Polish PKD 2025 - Classification of Activities | 8.2 MB |
| `pkwiu_2025.pdf` | Polish PKWiU 2025 - Classification of Products/Services | 3.9 MB |

---

## Global Classification Systems

### International

| System | Region | URL | Status |
|--------|--------|-----|--------|
| **ISIC Rev.5** | Global (UN) | unstats.un.org/unsd/classifications/Econ/isic | Implementation 2027 |
| **CPC** | Global (UN) | Central Products Classification | - |

### Regional/National

| System | Region | URL | Notes |
|--------|--------|-----|-------|
| **NAICS 2022** | US/Canada/Mexico | census.gov/naics | 20 sectors, 1,012 industries |
| **NACE Rev.2** | EU | ec.europa.eu/eurostat | 21 sections, 88 divisions |
| **SIC** | UK | ons.gov.uk | Standard Industrial Classification |
| **ANZSIC** | Australia/NZ | abs.gov.au | |
| **PKD** | Poland | stat.gov.pl | Downloaded ✓ |
| **PKWiU** | Poland | stat.gov.pl | Products/Services, Downloaded ✓ |
| **JSIC** | Japan | stat.go.jp | Japanese Standard Industrial Classification |

---

## Methodology: Post-Money Activity Alignment

### Step 1: Build the Matrix

Create spreadsheet with columns:
- Activity Code
- Activity Name
- Category (from classification)
- Requires money? (Y/N)
- Parasitic score (1-10)
- Essential score (1-10)
- Automatable? (Y/Partial/N)
- Physical component? (Y/N)

### Step 2: Scoring Criteria

**Parasitic (higher = cut)**
- Pure extraction (rent, interest, speculation)
- Advertising/marketing manipulation
- Creates artificial scarcity
- Exploits labor
- Environmental destruction

**Essential (higher = keep)**
- Produces actual value (food, shelter, health)
- Builds infrastructure
- Enables other essential activities
- Care/reproduction work
- Knowledge preservation

**Automatable**
- Y: AI/agents can replace within 5 years
- Partial: Augments but needs humans
- N: Physical presence required

### Step 3: Buckets

| Bucket | Criteria | Action |
|--------|----------|--------|
| **CUT** | Parasitic > 7, Essential < 3 | Eliminated post-collapse |
| **TRANSFORM** | Parasitic 3-7, Essential 3-7 | Redesign for regen |
| **KEEP** | Parasitic < 3, Essential > 7 | Preserve, protect |
| **EVOLVE** | Automatable = Y | Shift to oversight roles |

### Step 4: Data Sources to Cross-Reference

- ISIC codes → map to essential categories
- Labor statistics → what % employed in each sector
- Environmental impact data → which sectors destroy most
- Skill requirements → can humans retrain?

### Step 5: Analysis Output

Final dashboard shows:
- % of economy that can be eliminated
- % that must be preserved
- % that must transform
- Skills gap analysis
- Transition timeline

---

## Quick Assessment Framework

### Questions per Activity:

1. **Does this produce anything real?** (not just information manipulation)
2. **Could this run on time/mutual credit?** (no external money needed)
3. **Does this extract from others?** (rent, interest, fees)
4. **Will AI/agents replace this?** (within 10 years)
5. **Does this require physical presence?** (hands, feet, eyes)
6. **Does this repair or destroy?** (entropy direction)

### Scoring:
- Yes to 1,2,5,6 = KEEP
- Yes to 3 = CUT
- Yes to 4 = EVOLVE

---

## TODO: Next Steps

- [ ] Extract PKD 2025 activities to spreadsheet
- [ ] Extract PKWiU 2025 products/services  
- [ ] Score each against criteria
- [ ] Cross-reference with ISIC categories
- [ ] Build dashboard view
- [ ] Identify top 50 essential activities

---

*Generated: 2026-03-10*
