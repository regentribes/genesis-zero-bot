-- Mythogen AME Schema - SurrealDB
-- Field of Trust + Affinity Mapping + Convergence Engine

-- Enable relaxed typing for prototyping
DEFINE TABLE schema VERSION 1;

-- ═══════════════════════════════════════════════════════════
-- CORE ENTITIES
-- ═══════════════════════════════════════════════════════════

DEFINE TABLE person SCHEMAFULL;
DEFINE FIELD name ON person TYPE string;
DEFINE FIELD createdAt ON person TYPE int;
DEFINE FIELD fotState ON person FLEXIBLETYPE;
DEFINE FIELD weakStates ON person FLEXIBLETYPE;
DEFINE FIELD vCrystal ON person FLEXIBLETYPE;
DEFINE FIELD socialRadius ON person TYPE string DEFAULT 'global';

DEFINE TABLE affinity SCHEMAFULL;
DEFINE FIELD topicId ON affinity TYPE string;
DEFINE FIELD targetId ON affinity TYPE string;
DEFINE FIELD witnessId ON affinity TYPE string;
DEFINE FIELD strength ON affinity TYPE float;
DEFINE FIELD polarity ON affinity TYPE string DEFAULT 'neutral';
DEFINE FIELD createdAt ON affinity TYPE int;
DEFINE FIELD lastUpdated ON affinity TYPE int;
DEFINE FIELD witnessCount ON affinity TYPE int DEFAULT 1;

DEFINE TABLE topic SCHEMAFULL;
DEFINE FIELD name ON topic TYPE string;
DEFINE FIELD category ON topic TYPE string DEFAULT 'collective';
DEFINE FIELD affinityStrength ON topic TYPE float DEFAULT 0;
DEFINE FIELD participantIds ON topic FLEXIBLETYPE;
DEFINE FIELD emergenceScore ON topic TYPE float DEFAULT 0;
DEFINE FIELD createdAt ON topic TYPE int;
DEFINE FIELD lastActivity ON topic TYPE int;

DEFINE TABLE fot_indicator SCHEMAFULL;
DEFINE FIELD name ON fot_indicator TYPE string;
DEFINE FIELD value ON fot_indicator TYPE float;
DEFINE FIELD trajectory ON fot_indicator TYPE string DEFAULT 'stable';
DEFINE FIELD lastSensed ON fot_indicator TYPE int;

DEFINE TABLE resonance_event SCHEMAFULL;
DEFINE FIELD personId ON resonance_event TYPE string;
DEFINE FIELD topicId ON resonance_event TYPE string;
DEFINE FIELD witnessId ON resonance_event TYPE string;
DEFINE FIELD type ON resonance_event TYPE string;
-- type: 'witnessed' | 'expressed' | 'received' | 'reflected'
DEFINE FIELD createdAt ON resonance_event TYPE int;

DEFINE TABLE v_crystal SCHEMAFULL;
DEFINE FIELD personId ON v_crystal TYPE string;
DEFINE FIELD coreValue ON v_crystal TYPE string;
DEFINE FIELD expressionExamples ON v_crystal FLEXIBLETYPE;
DEFINE FIELD crystallizationDate ON v_crystal TYPE int;
DEFINE FIELD stabilityScore ON v_crystal TYPE float;
DEFINE FIELD practicingOthers ON v_crystal FLEXIBLETYPE;
DEFINE FIELD witnessCount ON v_crystal TYPE int DEFAULT 0;

DEFINE TABLE convergence_point SCHEMAFULL;
DEFINE FIELD personId ON convergence_point TYPE string;
DEFINE FIELD weakIndicators ON convergence_point FLEXIBLETYPE;
DEFINE FIELD emergentTopicId ON convergence_point TYPE string;
DEFINE FIELD overlapScore ON convergence_point TYPE float;
DEFINE FIELD urgency ON convergence_point TYPE string DEFAULT 'medium';
DEFINE FIELD suggestedActions ON convergence_point FLEXIBLETYPE;
DEFINE FIELD createdAt ON convergence_point TYPE int;
DEFINE FIELD expiresAt ON convergence_point TYPE int;

-- ═══════════════════════════════════════════════════════════
-- INDEXES FOR PERFORMANCE
-- ═══════════════════════════════════════════════════════════

DEFINE INDEX idx_person_social ON person FIELDS socialRadius;
DEFINE INDEX idx_affinity_target ON affinity FIELDS targetId;
DEFINE INDEX idx_affinity_topic ON affinity FIELDS topicId;
DEFINE INDEX idx_topic_emergence ON topic FIELDS emergenceScore;
DEFINE INDEX idx_convergence_expires ON convergence_point FIELDS expiresAt;
DEFINE INDEX idx_convergence_overlap ON convergence_point FIELDS overlapScore;
DEFINE INDEX idx_resonance_person ON resonance_event FIELDS personId;
DEFINE INDEX idx_resonance_topic ON resonance_event FIELDS topicId;

-- ═══════════════════════════════════════════════════════════
-- FUNCTIONS
-- ═══════════════════════════════════════════════════════════

-- Hologram Principle: FOT composite = MIN of all indicators, not average
DEFINE FUNCTION fn_fot_composite($indicators array) RETURN float (
    RETURN array::min($indicators)
);

-- Emergent affinity calculation
DEFINE FUNCTION fn_calc_affinity($personId string, $topicId string) RETURN float (
    LET $signals = [
        (SELECT count() FROM resonance_event WHERE personId = $personId AND topicId = $topicId) * 0.3,
        (SELECT count() FROM affinity WHERE targetId = $personId AND topicId = $topicId) * 0.25,
        (SELECT count() FROM resonance_event WHERE topicId = $topicId) * 0.2
    ];
    RETURN Math::min(1, array::sum($signals))
);

-- Convergence detection
DEFINE FUNCTION fn_find_convergences() RETURN array (
    LET $weak = SELECT personId, weakStates FROM person;
    LET $topics = SELECT * FROM topic WHERE emergenceScore > 0.5 ORDER BY emergenceScore DESC;
    RETURN $weak MAP {
        personId: .personId,
        weakIndicators: .weakStates,
        convergences: $topics FILTER fn_calc_overlap(.weakStates, .id) > 0.7
    }
);

DEFINE FUNCTION fn_calc_overlap($weak array, $topicId string) RETURN float (
    -- Simplified: check topic tags against weak indicators
    LET $topic = SELECT * FROM topic WHERE id = $topicId;
    LET $match = array::len(array::intersect($weak, $topic[0].tags));
    RETURN $match / array::len($weak)
);

-- ═══════════════════════════════════════════════════════════
-- EMBEDDINGS (for semantic search)
-- ═══════════════════════════════════════════════════════════

DEFINE TABLE embedding SCHEMAFULL;
DEFINE FIELD entityType ON embedding TYPE string; -- person | topic | affinity
DEFINE FIELD entityId ON embedding TYPE string;
DEFINE FIELD vector ON embedding TYPE array<float>;
DEFINE FIELD model ON embedding TYPE string;
DEFINE FIELD createdAt ON embedding TYPE int;

DEFINE INDEX idx_embedding_vector ON embedding FIELDS vector ANN {
    distance: cosine,
    capacity: 10000,
    m: 16,
    ef_construction: 200
};

-- ═══════════════════════════════════════════════════════════
-- TIMELOCK SYSTEM (from existing Mythogen)
-- ═══════════════════════════════════════════════════════════

DEFINE TABLE timelock SCHEMAFULL;
DEFINE FIELD entityType ON timelock TYPE string;
DEFINE FIELD entityId ON timelock TYPE string;
DEFINE FIELD unlockAt ON timelock TYPE int;
DEFINE FIELD reason ON timelock TYPE string;
DEFINE FIELD createdBy ON timelock TYPE string;

-- ═══════════════════════════════════════════════════════════
-- Y-CARDS & SACRED CLOWN (from existing Mythogen)
-- ═══════════════════════════════════════════════════════════

DEFINE TABLE y_card SCHEMAFULL;
DEFINE FIELD fromId ON y_card TYPE string;
DEFINE FIELD toId ON y_card TYPE string;
DEFINE FIELD question ON y_card TYPE string;
DEFINE FIELD response ON y_card FLEXIBLETYPE;
DEFINE FIELD createdAt ON y_card TYPE int;
DEFINE FIELD respondedAt ON y_card FLEXIBLETYPE;

DEFINE TABLE sacred_clown SCHEMAFULL;
DEFINE FIELD triggerType ON sacred_clown TYPE string;
-- triggerType: 'over_alignment' | 'stagnation' | 'rigidity'
DEFINE FIELD activationThreshold ON sacred_clown TYPE float;
DEFINE FIELD intervention ON sacred_clown FLEXIBLETYPE;