// ═══════════════════════════════════════════════════════════════════════════════
// SECONDARY PERFORMANCE-SENSING VARIABLES PER DOMAIN
// Specific metrics for each of the 27 Archetypal Community Domains
// ═══════════════════════════════════════════════════════════════════════════════

interface DomainSpecificMetrics {
    domainId: string;
    domainName: string;
    primarySignals: string[];      // Most important for this domain
    secondarySignals: string[];   // Additional indicators
    healthIndicators: string[];   // What indicates health
    warningSigns: string[];       // What indicates problems
    measurementFrequency: 'realtime' | 'daily' | 'weekly' | 'monthly';
}

// ═══════════════════════════════════════════════════════════════════════════════
// 27 DOMAINS - SPECIFIC METRICS
// ═══════════════════════════════════════════════════════════════════════════════

const DOMAIN_SPECIFIC_METRICS: DomainSpecificMetrics[] = [
    // ═══════════════════════════════════════════════════════════════════════
    // 1. NUCLEIC CENTER TRIAD
    // ═══════════════════════════════════════════════════════════════════════
    
    {
        domainId: 'd1',
        domainName: 'Spirituality and Religion',
        primarySignals: [
            'ritual_attendance_rate',
            'facilitator_count',
            'ceremony_frequency',
            'sacred_space_utilization'
        ],
        secondarySignals: [
            'meditation_session_duration',
            'pilgrimage_participation',
            'text_study_sessions',
            'prayer_group_formation',
            'sacred_art_creation',
            'rite_of_passage_completions',
            'interfaith_dialogue_events',
            'spiritual_direction_sessions',
            'iconography_contributions',
            'chanting_circle_attendance'
        ],
        healthIndicators: [
            'Participants report deeper meaning',
            'New sacred practices emerge',
            'Cross-domain spiritual connections form',
            'Rites feel authentic and impactful'
        ],
        warningSigns: [
            'Rituals become rote/empty',
            'Only few facilitate - burnout risk',
            'Dogma overrides mystery',
            'Disconnection from other triads'
        ],
        measurementFrequency: 'weekly'
    },
    {
        domainId: 'd2',
        domainName: 'Science and Physics',
        primarySignals: [
            'research_projects_active',
            'experiment_conducted_count',
            'peer_review_sessions',
            'hypothesis_formation_rate'
        ],
        secondarySignals: [
            'lab_equipment_usage',
            'publication_submissions',
            'conference_presentations',
            'collaboration_with_academia',
            'data_set_sharing',
            'replication_attempts',
            'theory_development_sessions',
            'instrument_calibration_frequency',
            'mentorship_pairs_active',
            'failed_experiment_documentations'
        ],
        healthIndicators: [
            'Curiosity drives exploration',
            'Failed experiments seen as data',
            'Theory connects to practice',
            'Science serves community needs'
        ],
        warningSigns: [
            'Research disconnected from community',
            'Only few participate in inquiry',
            'Results not shared/transparent',
            'Science used for control not healing'
        ],
        measurementFrequency: 'monthly'
    },
    {
        domainId: 'd3',
        domainName: 'Arts and Ritual',
        primarySignals: [
            'art_exhibitions_held',
            'creative_works_produced',
            'collaborative_art_projects',
            'audience_participation_rate'
        ],
        secondarySignals: [
            'new_techniques_explored',
            'artist_residencies_active',
            'art_supply_exchanges',
            'performance_frequency',
            'public_art_installations',
            'music_jam_sessions',
            'craft_workshops_held',
            'storytelling_circles',
            'costume_design_contributions',
            'venue_utilization_hours'
        ],
        healthIndicators: [
            'Art emerges from community life',
            'Multiple forms represented',
            'Audiences become creators',
            'Art addresses real issues'
        ],
        warningSigns: [
            'Art only for elite audiences',
            'Repeats familiar forms',
            'Disconnected from ritual/life',
            'Commercial value outweighs expression'
        ],
        measurementFrequency: 'weekly'
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 2. NOURISHMENT TRIAD
    // ═══════════════════════════════════════════════════════════════════════
    
    {
        domainId: 'd4',
        domainName: 'Resources and Nature',
        primarySignals: [
            'land_managed_hectares',
            'species_diversity_index',
            'ecosystem_services_measured',
            'regenerative_practices_count'
        ],
        secondarySignals: [
            'biodiversity_surveys_completed',
            'water_cycle_health',
            'soil_organic_matter',
            'pollinator_populations',
            'forest_canopy_coverage',
            'microbial_diversity',
            'succession_planning_active',
            'wildlife_corridors_maintained',
            'renewable_resource_extraction',
            'waste_upcycling_rate'
        ],
        healthIndicators: [
            'Nature thrives alongside humans',
            'Resources regenerate over time',
            'More-than-human voices heard',
            'Systems become self-maintaining'
        ],
        warningSigns: [
            'Extraction exceeds regeneration',
            'Monoculture creep',
            'Species disappearing',
            'Nature seen as resource only'
        ],
        measurementFrequency: 'monthly'
    },
    {
        domainId: 'd5',
        domainName: 'Energy and Power',
        primarySignals: [
            'renewable_energy_percentage',
            'energy_autonomy_level',
            'power_reliability_index',
            'carbon_footprint_reduction'
        ],
        secondarySignals: [
            'solar_installations_count',
            'battery_storage_capacity',
            'grid_interconnection_level',
            'energy_efficiency_improvements',
            'heat_recapture_systems',
            'bioenergy_production',
            'grid_independence_hours',
            'energy_sharing_events',
            'power_outage_duration',
            'smart_grid_optimization'
        ],
        healthIndicators: [
            'Clean energy powers community',
            'Energy shared fairly',
            'Resilient during disruptions',
            'Carbon negative achieved'
        ],
        warningSigns: [
            'Dependence on external grid',
            'Fossil fuel usage persists',
            'Energy inequality emerges',
            'Infrastructure not maintained'
        ],
        measurementFrequency: 'daily'
    },
    {
        domainId: 'd6',
        domainName: 'Food and Agriculture',
        primarySignals: [
            'food_self_sufficiency_percent',
            'crop_diversity_index',
            'yield_per_square_meter',
            'soil_health_score'
        ],
        secondarySignals: [
            'seed_saving_initiated',
            'composting_rate',
            'water_efficiency',
            'pest_management_natural',
            'harvest_events_held',
            'food_storage_capacity',
            'meal_preparation_sessions',
            'food_waste_prevention',
            'aquaponics_operations',
            'foraging_walks_conducted'
        ],
        healthIndicators: [
            'Community feeds itself',
            'Food is nutritious and diverse',
            'Growing connects to land',
            'Knowledge passes to next generation'
        ],
        warningSigns: [
            'Reliance on external food',
            'Monoculture dominates',
            'Soil degraded',
            'Cooking disconnected from growing'
        ],
        measurementFrequency: 'weekly'
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 3. DAILY LIVING TRIAD
    // ═══════════════════════════════════════════════════════════════════════
    
    {
        domainId: 'd7',
        domainName: 'Habitat and Building',
        primarySignals: [
            'housing_occupancy_rate',
            'construction_projects_completed',
            'infrastructure_maintenance_score',
            'comfort_index_rating'
        ],
        secondarySignals: [
            'building_permits_approved',
            'renovation_volunteer_hours',
            'energy_efficiency_rating',
            'natural_building_techniques',
            'spaces_designed_collaboratively',
            'maintenance_requests_resolved',
            'spatial_usage_patterns',
            'acoustic_comfort_levels',
            'biophilic_design_elements',
            'emergency_shelter_capacity'
        ],
        healthIndicators: [
            'Homes meet needs of dwellers',
            'Built with community participation',
            'Design respects ecology',
            'Spaces foster connection'
        ],
        warningSigns: [
            'Housing inequality',
            'Buildings decay unattended',
            'Design ignores users',
            'Alienation from built environment'
        ],
        measurementFrequency: 'monthly'
    },
    {
        domainId: 'd8',
        domainName: 'Transportation and Mobility',
        primarySignals: [
            'car_free_travel_ratio',
            'public_transit_access',
            'bike_infrastructure_coverage',
            'walkability_score'
        ],
        secondarySignals: [
            'electric_vehicle_adoption',
            'shared_mobility_options',
            'cargo_bike_utilization',
            'path_maintenance_quality',
            'logistics_cooperative_trips',
            'mobility_as_service_usage',
            'accessibility_for_disabilities',
            'commute_time_averages',
            'fuel_dependent_vehicles_count',
            'mobility_events_organized'
        ],
        healthIndicators: [
            'People can move freely',
            'Active transport dominates',
            'Connectivity across abilities',
            'Mobility is low-carbon'
        ],
        warningSigns: [
            'Car dependence persists',
            'Inequality in mobility access',
            'Infrastructure decays',
            'Isolation increases'
        ],
        measurementFrequency: 'weekly'
    },
    {
        domainId: 'd9',
        domainName: 'Neighborhoods and Families',
        primarySignals: [
            'neighborhood_gathering_frequency',
            'family_support_network_size',
            'intergenerational_connection_index',
            'local_community_belonging_score'
        ],
        secondarySignals: [
            'block_parties_organized',
            'childcare_sharing_arrangements',
            'elder_care_exchanges',
            'neighborhood_cleanups',
            'boundary_marker_respects',
            'shared_meal_frequency',
            'conflict_resolution_local',
            'housing_neighbor_stability',
            'volunteer_hours_local',
            'local_history_shared'
        ],
        healthIndicators: [
            'Neighbors know each other',
            'Families supported by community',
            'Generations connect',
            'Place feels like home'
        ],
        warningSigns: [
            'Isolation in homes',
            'Generational disconnect',
            'Boundary conflicts rise',
            'Transience increases'
        ],
        measurementFrequency: 'weekly'
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 4. CULTURAL ADVANCEMENT TRIAD
    // ═══════════════════════════════════════════════════════════════════════
    
    {
        domainId: 'd10',
        domainName: 'Learning and Education',
        primarySignals: [
            'learning_events_conducted',
            'skill_sharing_sessions',
            'apprenticeship_pairs_formed',
            'knowledge_retained_index'
        ],
        secondarySignals: [
            'curriculum_community_aligned',
            'intergenerational_teaching',
            'formal_education_alternatives',
            'learning_festivals_hosted',
            'library_utilization',
            'mentorship_completions',
            'certifications_earned',
            'learning_resources_created',
            'peer_teaching_frequency',
            'study_groups_active'
        ],
        healthIndicators: [
            'Everyone learns continuously',
            'Knowledge passes between generations',
            'Learning serves community needs',
            'Curiosity is valued'
        ],
        warningSigns: [
            'Learning only in institutions',
            'Youth disconnected from elders',
            'Knowledge hoarded not shared',
            'Learning unrelated to life'
        ],
        measurementFrequency: 'weekly'
    },
    {
        domainId: 'd11',
        domainName: 'Commerce and Business',
        primarySignals: [
            'local_exchange_volume',
            'business_diversity_index',
            'cooperative_enterprise_count',
            'fair_trade_compliance'
        ],
        secondarySignals: [
            'barter_network_activity',
            'timebank_hours_exchanged',
            'local_procurement_rate',
            'worker_coop_formations',
            'ethical_sourcing_verified',
            'marketplace_events_held',
            'business_mentorship_pairs',
            'revenue_local_retention',
            'social_enterprise_count',
            'gift_economy_exchanges'
        ],
        healthIndicators: [
            'Economy serves community',
            'Exchange is fair',
            'Cooperation over competition',
            'Local circulates locally'
        ],
        warningSigns: [
            'Extractive businesses dominate',
            'Inequality grows',
            'Money leaves community',
            'Competition over cooperation'
        ],
        measurementFrequency: 'monthly'
    },
    {
        domainId: 'd12',
        domainName: 'Governance and Government',
        primarySignals: [
            'decision_participation_rate',
            'alignment_gate_pass_rate',
            'governance_satisfaction_score',
            'policy_implementation_rate'
        ],
        secondarySignals: [
            'meeting_attendance',
            'proposal_submission_count',
            'role_rotation_achieved',
            'conflict_resolution_time',
            'transparency_index',
            'accountability_mechanisms',
            'constitutional_updates',
            'delegate_representation',
            'consent_achievement_time',
            'governance_trainings_held'
        ],
        healthIndicators: [
            'Everyone participates in decisions',
            'Decisions serve the whole',
            'Power distributed, not concentrated',
            'Governance adapts to needs'
        ],
        warningSigns: [
            'Participation declines',
            'Elites make decisions',
            'Decisions not implemented',
            'Power grabbed, not given'
        ],
        measurementFrequency: 'weekly'
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 5. INTEGRATING CONFLUENCES TRIAD
    // ═══════════════════════════════════════════════════════════════════════
    
    {
        domainId: 'd13',
        domainName: 'Wellness and Medicine',
        primarySignals: [
            'health_self_reported_score',
            'preventative_care_utilization',
            'healing_session_access',
            'mental_health_support_available'
        ],
        secondarySignals: [
            'traditional_healers_available',
            'emergency_response_time',
            'healthcare_cost_coverage',
            'exercise_facilities_usage',
            'nutrition_education_sessions',
            'sleep_quality_index',
            'stress_management_practices',
            'addiction_recovery_support',
            'holistic_healing_offered',
            'preventative_protocols_adopted'
        ],
        healthIndicators: [
            'Healthcare accessible to all',
            'Prevention over treatment',
            'Traditional and modern integrated',
            'Whole person cared for'
        ],
        warningSigns: [
            'Healthcare is expensive',
            'Only sick care, not health',
            'Mental health stigmatized',
            'Inequality in access'
        ],
        measurementFrequency: 'weekly'
    },
    {
        domainId: 'd14',
        domainName: 'Populations and Diversity',
        primarySignals: [
            'demographic_diversity_index',
            'inclusion_survey_score',
            'minority_voice_presence',
            'accessibility_compliance_rate'
        ],
        secondarySignals: [
            'cultural_festival_participation',
            'language_access_provided',
            'accessible_spaces_count',
            'diverse_leadership_ratio',
            'housing_integration_level',
            'interfaith_events_held',
            'age_distribution_balance',
            'neurodiversity_acceptance',
            'refugee_integration_support',
            'economic_diversity_index'
        ],
        healthIndicators: [
            'All feel welcomed',
            'Diversity is strength',
            'Minorities lead',
            'Difference is valued'
        ],
        warningSigns: [
            'Homogeneity increasing',
            'Minorities excluded',
            'Tokenism instead of power',
            'Accessibility ignored'
        ],
        measurementFrequency: 'monthly'
    },
    {
        domainId: 'd15',
        domainName: 'Recreation and Play',
        primarySignals: [
            'play_event_frequency',
            'recreation_participation_rate',
            'play_space_availability',
            'playful_mood_index'
        ],
        secondarySignals: [
            'games_night_activities',
            'sports_leagues_active',
            'child_play_supervision',
            'adult_play_workshops',
            'celebration_frequency',
            'humor_and_laughter_index',
            'creative_play_equipment',
            'nature_play_opportunities',
            'competition_balanced_with_coop',
            'play_volunteer_coordinators'
        ],
        healthIndicators: [
            'Play valued as essential',
            'All ages play together',
            'Play is spontaneous',
            'Competition balanced with joy'
        ],
        warningSigns: [
            'Only organized sports',
            'Adults stopped playing',
            'Competition over fun',
            'Play spaces disappear'
        ],
        measurementFrequency: 'weekly'
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 6. FUNCTIONAL CONGRUENCE TRIAD
    // ═══════════════════════════════════════════════════════════════════════
    
    {
        domainId: 'd16',
        domainName: 'Models and Currencies',
        primarySignals: [
            'currency_circulation_rate',
            'model_accuracy_index',
            'exchange_network_size',
            'value_stability_score'
        ],
        secondarySignals: [
            'timebank_participation',
            'crypto_community_tokens',
            'local_currency_adoption',
            'mutual_credit_lines_extended',
            'prediction_market_accuracy',
            'resource_valuation_fairness',
            'accounting_transparency',
            'economic_model_iterations',
            ' barter_network_size',
            'wealth_distribution_index'
        ],
        healthIndicators: [
            'Exchange systems work for all',
            'Value truly reflects worth',
            'Money serves community',
            'Models improve continuously'
        ],
        warningSigns: [
            'Currency hoarded',
            'Models disconnected from reality',
            'Extractive exchange dominates',
            'Wealth concentrates'
        ],
        measurementFrequency: 'weekly'
    },
    {
        domainId: 'd17',
        domainName: 'Tools and Weapons',
        primarySignals: [
            'tool_library_utilization',
            'tool_sharing_rate',
            'weapon_free_zone_compliance',
            'maintenance_skill_distribution'
        ],
        secondarySignals: [
            'shared_workshop_access',
            'tool_making_sessions',
            '3d_printer_community_access',
            'repair_cafe_events',
            'weapon_incidents_count',
            'conflict_de_escalation_training',
            'safety_equipment_availability',
            'invention_prototype_count',
            'appropriate_technology_adoption',
            'tool_library_diversity'
        ],
        healthIndicators: [
            'Tools available to all',
            'Weapons unnecessary',
            'Skills widely distributed',
            'Technology serves peace'
        ],
        warningSigns: [
            'Tools hoarded by few',
            'Weapon culture emerges',
            'Skills concentrated',
            'Technology for control'
        ],
        measurementFrequency: 'monthly'
    },
    {
        domainId: 'd18',
        domainName: 'Emergence and Emergency',
        primarySignals: [
            'innovation_project_count',
            'emergency_response_readiness',
            'emergence_facilitation_sessions',
            'crisis_adaptation_speed'
        ],
        secondarySignals: [
            'rapid_prototyping_events',
            'emergency_drill_frequency',
            'seed_planting_experiments',
            'contingency_plans_updated',
            'crisis_communication_speed',
            'resource_mobilization_rate',
            'resilience_exercises_held',
            'cross_training_completion',
            'emergent_leaders_identified',
            'adaptation_iterations_count'
        ],
        healthIndicators: [
            'Innovation welcomed',
            'Emergencies handled well',
            'Community adapts quickly',
            'New forms emerge organically'
        ],
        warningSigns: [
            'Innovation suppressed',
            'No emergency prep',
            'Rigid systems break',
            'Chaos without emergence'
        ],
        measurementFrequency: 'weekly'
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 7. TRAUMA INTEGRATION TRIAD
    // ═══════════════════════════════════════════════════════════════════════
    
    {
        domainId: 'd19',
        domainName: 'Master and Slave',
        primarySignals: [
            'power_dynamic_awareness',
            'hierarchical_dependence_index',
            'servitude_patterns_identified',
            'empowerment_activities_conducted'
        ],
        secondarySignals: [
            'coercive_control_incidents',
            'voluntary_service_exchanges',
            'leadership_rotation_achieved',
            'obedience_pressure_released',
            'dominance_submission_dynamics',
            'autonomy_support_measures',
            'authority_legitimacy_survey',
            'exploitation_awareness_training',
            'collective_agency_development',
            'power_consciousness_raising'
        ],
        healthIndicators: [
            'Power dynamics visible',
            'Everyone has agency',
            'Hierarchy is chosen, not imposed',
            'No coercion in relationships'
        ],
        warningSigns: [
            'Power imbalances ignored',
            'Some dominate others',
            'Service becomes servitude',
            'Elites control narrative'
        ],
        measurementFrequency: 'monthly'
    },
    {
        domainId: 'd20',
        domainName: 'War and Peace',
        primarySignals: [
            'conflict_incident_count',
            'peace_building_sessions',
            'violence_prevention_measures',
            'reconciliation_completion_rate'
        ],
        secondarySignals: [
            'restorative_justice_circles',
            'truce_agreements_honored',
            'militarization_index',
            'civilian_protection_measures',
            'intercommunity_relations',
            'trauma_from_violence_healed',
            'security_spending_ratio',
            'war_preparation_activities',
            'peace_education_frequency',
            'meditation_on_violence'
        ],
        healthIndicators: [
            'Conflicts resolved peacefully',
            'Violence never tolerated',
            'Security shared by all',
            'Peace is active, not passive'
        ],
        warningSigns: [
            'Violence increases',
            'Conflicts escalate',
            'Militarization acceptable',
            'Peace is just absence'
        ],
        measurementFrequency: 'weekly'
    },
    {
        domainId: 'd21',
        domainName: 'Individual and Collective',
        primarySignals: [
            'individual_autonomy_respected',
            'collective_commitment_level',
            'self_other_balance_index',
            'group_identity_formation'
        ],
        secondarySignals: [
            'personal_boundary_respect',
            'collective_action_participation',
            'privacy_autonomy_maintained',
            'solidarity_expressed',
            'individuation_supported',
            'community_service_given',
            'personal_growth_supported',
            'group_norms_respected',
            'autonomy_collective_tension',
            'identity_integration_level'
        ],
        healthIndicators: [
            'Self and group in balance',
            'Individuality valued',
            'Collective supports individual',
            'Healthy tension held'
        ],
        warningSigns: [
            'Collective crushes individual',
            'Individual ignores collective',
            'False dichotomy created',
            'Isolation or conformity'
        ],
        measurementFrequency: 'weekly'
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 8. INTER-RELATIONAL TRIAD
    // ═══════════════════════════════════════════════════════════════════════
    
    {
        domainId: 'd22',
        domainName: 'Media and Communications',
        primarySignals: [
            'information_accessibility',
            'communication_channel_diversity',
            'narrative_ownership_distribution',
            'misinformation_correction_speed'
        ],
        secondarySignals: [
            'community_media_production',
            'newsletter_frequency',
            'radio_podcast_creation',
            'social_media_health',
            'information_sharing_speed',
            'translation_services_available',
            'digital_divide_addressed',
            'storytelling_platforms_used',
            'transparent_communication_rules',
            'media_literacy_training'
        ],
        healthIndicators: [
            'Information flows freely',
            'Stories told by many',
            'Truth valued over virality',
            'Communication connects'
        ],
        warningSigns: [
            'Information hoarded',
            'Few control narrative',
            'Misinformation spreads',
            'Communication divides'
        ],
        measurementFrequency: 'daily'
    },
    {
        domainId: 'd23',
        domainName: 'Language and Metaphor',
        primarySignals: [
            'linguistic_diversity_index',
            'metaphor_usage_creativity',
            'translation_bridge_builders',
            'symbolic_understanding_shared'
        ],
        secondarySignals: [
            'new_words_adopted',
            'poetry_creation_frequency',
            'story_sharing_sessions',
            'sign_language_usage',
            'indigenous_language_revival',
            'humor_and_puns_circulated',
            'deep_listening_practices',
            'abstract_concepts_expressed',
            'embodied_language_workshops',
            'linguistic_expertise_shared'
        ],
        healthIndicators: [
            'Language alive and evolving',
            'Multiple languages valued',
            'Metaphors reveal truth',
            'Silence also valued'
        ],
        warningSigns: [
            'Language dying',
            'Only technical speech',
            'Metaphors manipulate',
            'Deep listening lost'
        ],
        measurementFrequency: 'weekly'
    },
    {
        domainId: 'd24',
        domainName: 'Indigenous Wisdom and Ancestral Healing',
        primarySignals: [
            'elder_connection_strength',
            'traditional_practice_revived',
            'ancestral_healing_sessions',
            'indigenous_leadership_recognized'
        ],
        secondarySignals: [
            'ceremony_facilitators_identified',
            'storytelling_from_elders',
            'land_back_relationships',
            'traditional_food_restored',
            'healing_rituals_conducted',
            'ancestral_trauma_addressed',
            'indigenous_teachers_engaged',
            'ritual_objects_repatriated',
            'generation_bridge_built',
            'oral_history_recorded'
        ],
        healthIndicators: [
            'Wisdom of ancestors honored',
            'Traditional practices alive',
            'Healing addresses past',
            'Elders guide appropriately'
        ],
        warningSigns: [
            'Ancestors forgotten',
            'Cultural appropriation',
            'Healing ignores past',
            'Elders dismissed'
        ],
        measurementFrequency: 'monthly'
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 9. OMNIPRESENCE TRIAD
    // ═══════════════════════════════════════════════════════════════════════
    
    {
        domainId: 'd25',
        domainName: 'Universal Ecology and Personal Ideology',
        primarySignals: [
            'environmental_action_index',
            'belief_system_diversity',
            'worldview_integration_level',
            'ecological_practice_adoption'
        ],
        secondarySignals: [
            'carbon_footprint_tracked',
            'ideological_debate_conducted',
            'philosophy_discussion_groups',
            'sustainability_pledges_signed',
            'religious_secular_balance',
            'spiritual_political_integrated',
            'worldview_bridges_built',
            'environmental_education_attended',
            'lifestyle_alignment_survey',
            'systems_thinking_applied'
        ],
        healthIndicators: [
            'Actions match beliefs',
            'Ecological awareness guides life',
            'Worldviews respected',
            'Integration of all levels'
        ],
        warningSigns: [
            'Hypocrisy rises',
            'Beliefs not acted on',
            'Ideology divides',
            'Ecology ignored'
        ],
        measurementFrequency: 'monthly'
    },
    {
        domainId: 'd26',
        domainName: 'Complexity and Simplicity',
        primarySignals: [
            'system_complexity_awareness',
            'simple_living_practice_index',
            'essential_vs_noise_ratio',
            'appropriate_tech_adoption'
        ],
        secondarySignals: [
            'unnecessary_complexity_removed',
            'minimalism_workshops_held',
            'digital_detox_sessions',
            'complex_problems_simplified',
            'solution_elegance_scored',
            'automation_vs_necessity',
            'essential_rituals_defined',
            'distraction_sources_identified',
            'simplicity_advocates_active',
            'tech_complexity_audits'
        ],
        healthIndicators: [
            'Complexity appreciated when needed',
            'Simplicity valued',
            'Essential clear from noise',
            'Technology serves, not rules'
        ],
        warningSigns: [
            'Complexity for its own sake',
            'Simplicity becomes dogma',
            'Noise overwhelms signal',
            'Tech overwhelms human'
        ],
        measurementFrequency: 'weekly'
    },
    {
        domainId: 'd27',
        domainName: 'Consciousness and Awareness',
        primarySignals: [
            'meditation_practice_rate',
            'awareness_training_attendance',
            'conscious_choices_index',
            'present_moment_presence_score'
        ],
        secondarySignals: [
            'mindfulness_sessions_held',
            'contemplative_retreats_attended',
            'awareness_of_awareness_practices',
            'choice_clarity_survey',
            'inner_work_committed',
            'presence_in_interaction',
            'bias_awareness_developed',
            'consciousness_studies_groups',
            'meditation_teachers_available',
            'awake_society_meetings'
        ],
        healthIndicators: [
            'Awareness valued as essential',
            'People know their own minds',
            'Conscious choice increases',
            'Presence in daily life'
        ],
        warningSigns: [
            'Consciousness work avoided',
            'Unconscious patterns rule',
            'Meditation without application',
            'Awareness not embodied'
        ],
        measurementFrequency: 'weekly'
    }
];

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════════════════════

export { DOMAIN_SPECIFIC_METRICS, DomainSpecificMetrics };