# Mythogen Framework - Gherkin Feature Specifications

## Feature: Seed Pattern Detection

### Background
Given the Affinity Mapping Engine (AME) is active
And the Four Distinctions framework is loaded

### Scenario: Classify statement as VALUE foundation
Given a member says "I keep coming back to the importance of genuine questioning"
When the seed classifier analyzes the statement
Then it shall identify the foundation as "value"
And it shall assign confidence greater than 0.6
And it shall extract emotional density between 0.0 and 1.0

### Scenario: Distinguish NEED from VALUE
Given a member says "I need to feel safe before I can contribute"
When the seed classifier analyzes the statement
Then it shall identify the foundation as "need"
And it shall NOT classify as "value"

### Scenario: Detect re-expression of existing seed
Given a user has an existing seed labeled "Authentic Inquiry"
And the foundation is "value"
When the member re-expresses similar meaning
Then the classifier shall set is_new to false
And it shall link to the existing seed_id

---

## Feature: Matter State Progression

### Scenario: New seed starts in Gas state
Given a new seed is created
When it has expression_count less than 3
And confidence less than 0.4
Then matter_state shall be "gas"

### Scenario: Seed transitions to Liquid
Given a seed has expression_count between 3 and 7
And confidence between 0.4 and 0.75
And days since first detection less than 30
Then matter_state shall be "liquid"

### Seed: Seed transitions to Solid
Given a seed has expression_count 7 or more
And confidence 0.75 or greater
And days since first detection 30 or more
Then matter_state shall be "solid"

### Scenario: Seed achieves Plasma state
Given a seed has emotional_density >= 0.8
And has cross-member correlations
Then matter_state shall be "plasma"

---

## Feature: Trust Formula Execution

### Scenario: Authentic Expression detected
Given a member reveals what truly matters to them
When the expression is NOT a need, belief, or principle
Then authentic_expression shall be true
And emotional_density shall be calculated

### Scenario: Witnessed Resonance occurs
Given another member sees and recognizes the value
When they affirm similar values through profiling
Then witnessed_resonance shall be true
And coherence_score shall increase

### Scenario: Emotional Density accumulates
Given the expression-witnessing cycle repeats
When expression_count increases
Then emotional_density shall increase logarithmically

### Scenario: Trust Field emerges
Given values_coherence > 0.7
And witness_score > 0.5
And time_stability > 0.5
And emotional_density_avg > 0.5
Then fot_readiness shall be greater than 0.6
And the Field of Trust shall be marked as "forming"

---

## Feature: FOT Score Calculation

### Scenario: Calculate individual FOT readiness
Given a user with multiple seeds
When the FOT calculator runs
Then it shall compute values_coherence as (value_seeds / total_seeds)
And it shall compute emotional_density_avg as mean of all emotional_density
And it shall compute witness_score from cross-member correlations
And it shall compute time_stability from time_lock_satisfied ratio
And it shall compute composite as weighted average

### Scenario: Apply hologram principle
Given the five indicators have scores
When calculating composite FOT
Then the composite shall be the MINIMUM of all five
And NOT the average

### Scenario: Detect FOT warning indicators
Given increasing defensive interactions
When sentiment analysis shows hostility
Then extraction_warning shall be triggered
And fot_score shall receive penalty

---

## Feature: Values Mapping to LJMap

### Scenario: Map VALUE seed to column
Given a seed with foundation "value"
When the values mapper looks up the label
Then it shall find the matching ljmap_column (1-9)
And it shall assign the correct ljmap_cycle (1-3)

### Scenario: Calculate column distribution
Given multiple value seeds exist
When calculating profile values_map
Then column_distribution shall show count per column
And center_of_gravity shall be the weighted average

### Scenario: Detect Cycle from column
Given column_number is 1-3
Then cycle shall be 1 (Self-Worth)

Given column_number is 4-6
Then cycle shall be 2 (Self-Expression)

Given column_number is 7-9
Then cycle shall be 3 (Selfless Expression)

---

## Feature: V-Crystal Position Tracking

### Scenario: Detect Victor position
Given member expresses overcoming language
When analyzed for V-Crystal position
Then primary_position shall be "victor"

### Scenario: Detect Vulnerable position
Given member expresses openness and receptivity
When analyzed for V-Crystal position
Then primary_position shall be "vulnerable"
And this shall be marked as the "circuit breaker"

### Scenario: Detect Vengeful trajectory
Given member cycles toward retaliation language
When detected
Then trajectory shall be flagged as "vengeful"
And warning shall be raised

---

## Feature: Time-Lock Anti-Gaming

### Scenario: New seed has time lock
Given a new seed is created
When first_detected is recorded
Then time_lock_date shall be first_detected + 30 days
And time_lock_satisfied shall be false

### Scenario: Time lock matures
Given seed has time_lock_date in the past
When checked
Then time_lock_satisfied shall be true

### Scenario: Seed excluded from matching until time lock
Given time_lock_satisfied is false
When querying for community matching
Then the seed shall be excluded

---

## Feature: Why-Card Transparency

### Scenario: Generate Why-Card for seed
Given a seed is classified with foundation and confidence
When Why-Card is generated
Then it shall include the insight statement
And it shall include the reasoning (WHY WE THINK THIS)
And it shall include the evidence statements
And it shall present validation options

### Scenario: User validates Why-Card
Given a Why-Card is presented
When user selects "Yes" or "No" or "Partially"
Then the seed confidence shall be updated
And the validation shall be stored in evidence

---

## Feature: Correlation Detection

### Scenario: Calculate cross-member coherence
Given two seeds from different users
When embeddings are compared via pgvector
Then coherence_score shall be cosine similarity

### Scenario: Boost coherence for matching foundation
Given seed_a and seed_b have same foundation
When coherence is calculated
Then score shall be multiplied by 1.2

### Scenario: Maximum boost for VALUE foundation
Given seed_a and seed_b both have foundation "value"
When coherence is calculated
Then score shall be multiplied by 1.3

---

## Feature: Enfoldment Engagement

### Scenario: Detect Mythic Alchemy engagement
Given a seed expresses intent without manifestation
When matter_state is "gas"
Then mythic_alchemy_engagement shall be "early_stage"

### Scenario: Detect Eco-Social system alignment
Given profile shows system strengths
When analyzing which systems are engaged
Then ecosocial_coverage shall list active systems

### Scenario: Recommend engagement mode
Given profile shows domain affinities
When generating engagement suggestions
Then functional mode shall be suggested for strong domains
And relational mode shall be suggested for V-Crystal work

---

## Feature: 13 Enfoldments Tracking

### Scenario: Calculate enfoldment trust density
Given community has enfoldment engagement data
When assessing trust density per enfoldment
Then each enfoldment shall have a trust_score
And the lowest score shall indicate weakest link

### Scenario: Map matter state to enfoldment relevance
Given seed matter_state is "gas"
When determining relevant enfoldments
Then Typologies and Learning Matrix shall be primary

Given seed matter_state is "plasma"
When determining relevant enfoldments
Then Mythic Alchemy and Innovation shall be primary

---

## Feature: Community FOT Status

### Scenario: Calculate community FOT readiness
Given multiple members with fot_scores
When community FOT is calculated
Then collective_coherence shall be mean of member scores
And enfoldment_coverage shall show spread across all 13
And fot_status shall be one of: emerging, forming, established, thriving

### Scenario: Detect mythology emergence
Given shared belief-seeds across 3+ members
When narrative patterns are detected
Then mythology_strength shall increase

---

## Feature: Anti-Extraction Safeguards

### Scenario: Verify transparency commitment
Given Why-Card is generated
Then classification_reasoning shall be included
And community coherence metrics shall be visible

### Scenario: Check no shadow profiling
Given user requests profile data
When fetching profile
Then all tracked dimensions shall be surfaced in UI

### Scenario: Validate opt-in depth
Given member controls sharing preferences
When profile is shared
Then only opted-in detail levels shall be shown
