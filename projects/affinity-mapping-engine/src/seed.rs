use chrono::Utc;
use uuid::Uuid;

use crate::models::{
    AffinityLayer, FieldOfTrust, LayerKind, Member, SemanticNode, SeedProfile,
};

/// Request to create a new member with seed profile data
#[derive(Debug, Clone, serde::Deserialize, serde::Serialize)]
pub struct CreateMemberRequest {
    pub name: String,
    #[serde(default)]
    pub needs: Vec<String>,
    #[serde(default)]
    pub beliefs: Vec<String>,
    #[serde(default)]
    pub principles: Vec<String>,
    #[serde(default)]
    pub values: Vec<String>,
}

/// Errors that can occur during seed profile creation
#[derive(Debug, thiserror::Error)]
pub enum SeedError {
    #[error("member name cannot be empty")]
    EmptyName,
    #[error("layer label cannot be empty")]
    EmptyLabel,
    #[error("duplicate label in {layer:?} layer: {label}")]
    DuplicateLabel { layer: LayerKind, label: String },
}

/// Initial weight assigned to seed profile nodes.
/// Low initial weight prevents new members from immediately dominating affinity scores.
const SEED_NODE_WEIGHT: f64 = 0.1;

/// Create a new member with a seed profile built from the four-distinction separation.
///
/// Each label in the input lists becomes a `SemanticNode` in the corresponding
/// `AffinityLayer`. All nodes start at `SEED_NODE_WEIGHT` to prevent newcomers
/// from distorting the affinity graph before meaningful interactions occur.
pub fn create_member(req: &CreateMemberRequest) -> Result<Member, SeedError> {
    let name = req.name.trim();
    if name.is_empty() {
        return Err(SeedError::EmptyName);
    }

    let now = Utc::now();

    let seed_profile = SeedProfile {
        needs: build_layer(LayerKind::Needs, &req.needs)?,
        beliefs: build_layer(LayerKind::Beliefs, &req.beliefs)?,
        principles: build_layer(LayerKind::Principles, &req.principles)?,
        values: build_layer(LayerKind::Values, &req.values)?,
    };

    Ok(Member {
        id: Uuid::new_v4(),
        name: name.to_string(),
        created_at: now,
        seed_profile,
        field_of_trust: FieldOfTrust::new(),
    })
}

/// Build a single affinity layer from a list of labels.
/// Validates no empty or duplicate labels within the layer.
fn build_layer(kind: LayerKind, labels: &[String]) -> Result<AffinityLayer, SeedError> {
    let mut seen = std::collections::HashSet::new();
    let mut nodes = Vec::with_capacity(labels.len());
    let now = Utc::now();

    for raw_label in labels {
        let label = raw_label.trim().to_string();
        if label.is_empty() {
            return Err(SeedError::EmptyLabel);
        }
        let normalized = label.to_lowercase();
        if !seen.insert(normalized) {
            return Err(SeedError::DuplicateLabel {
                layer: kind,
                label,
            });
        }
        nodes.push(SemanticNode {
            id: Uuid::new_v4(),
            label,
            weight: SEED_NODE_WEIGHT,
            created_at: now,
        });
    }

    Ok(AffinityLayer { kind, nodes })
}

#[cfg(test)]
mod tests {
    use super::*;

    fn sample_request() -> CreateMemberRequest {
        CreateMemberRequest {
            name: "Alice".into(),
            needs: vec!["shelter".into(), "community".into()],
            beliefs: vec!["mutual aid".into()],
            principles: vec!["consent".into(), "autonomy".into()],
            values: vec!["regeneration".into()],
        }
    }

    #[test]
    fn creates_member_with_four_distinct_layers() {
        let member = create_member(&sample_request()).unwrap();
        assert_eq!(member.name, "Alice");
        assert_eq!(member.seed_profile.needs.kind, LayerKind::Needs);
        assert_eq!(member.seed_profile.beliefs.kind, LayerKind::Beliefs);
        assert_eq!(member.seed_profile.principles.kind, LayerKind::Principles);
        assert_eq!(member.seed_profile.values.kind, LayerKind::Values);
    }

    #[test]
    fn populates_nodes_from_labels() {
        let member = create_member(&sample_request()).unwrap();
        assert_eq!(member.seed_profile.needs.nodes.len(), 2);
        assert_eq!(member.seed_profile.beliefs.nodes.len(), 1);
        assert_eq!(member.seed_profile.principles.nodes.len(), 2);
        assert_eq!(member.seed_profile.values.nodes.len(), 1);
    }

    #[test]
    fn seed_nodes_have_low_initial_weight() {
        let member = create_member(&sample_request()).unwrap();
        for node in &member.seed_profile.needs.nodes {
            assert!((node.weight - SEED_NODE_WEIGHT).abs() < f64::EPSILON);
        }
    }

    #[test]
    fn field_of_trust_starts_at_zero() {
        let member = create_member(&sample_request()).unwrap();
        let fot = &member.field_of_trust;
        assert_eq!(fot.competence, 0.0);
        assert_eq!(fot.reliability, 0.0);
        assert_eq!(fot.integrity, 0.0);
        assert_eq!(fot.benevolence, 0.0);
        assert_eq!(fot.openness, 0.0);
    }

    #[test]
    fn empty_layers_are_allowed() {
        let req = CreateMemberRequest {
            name: "Bob".into(),
            needs: vec![],
            beliefs: vec![],
            principles: vec![],
            values: vec![],
        };
        let member = create_member(&req).unwrap();
        assert!(member.seed_profile.needs.nodes.is_empty());
    }

    #[test]
    fn rejects_empty_name() {
        let req = CreateMemberRequest {
            name: "   ".into(),
            needs: vec![],
            beliefs: vec![],
            principles: vec![],
            values: vec![],
        };
        assert!(matches!(create_member(&req), Err(SeedError::EmptyName)));
    }

    #[test]
    fn rejects_empty_label() {
        let req = CreateMemberRequest {
            name: "Alice".into(),
            needs: vec!["  ".into()],
            beliefs: vec![],
            principles: vec![],
            values: vec![],
        };
        assert!(matches!(create_member(&req), Err(SeedError::EmptyLabel)));
    }

    #[test]
    fn rejects_duplicate_labels_case_insensitive() {
        let req = CreateMemberRequest {
            name: "Alice".into(),
            needs: vec!["Shelter".into(), "shelter".into()],
            beliefs: vec![],
            principles: vec![],
            values: vec![],
        };
        assert!(matches!(
            create_member(&req),
            Err(SeedError::DuplicateLabel { .. })
        ));
    }

    #[test]
    fn trims_name_whitespace() {
        let req = CreateMemberRequest {
            name: "  Alice  ".into(),
            needs: vec![],
            beliefs: vec![],
            principles: vec![],
            values: vec![],
        };
        let member = create_member(&req).unwrap();
        assert_eq!(member.name, "Alice");
    }

    #[test]
    fn trims_label_whitespace() {
        let req = CreateMemberRequest {
            name: "Alice".into(),
            needs: vec!["  shelter  ".into()],
            beliefs: vec![],
            principles: vec![],
            values: vec![],
        };
        let member = create_member(&req).unwrap();
        assert_eq!(member.seed_profile.needs.nodes[0].label, "shelter");
    }

    #[test]
    fn each_node_gets_unique_uuid() {
        let member = create_member(&sample_request()).unwrap();
        let all_ids: Vec<_> = member
            .seed_profile
            .needs
            .nodes
            .iter()
            .chain(&member.seed_profile.beliefs.nodes)
            .chain(&member.seed_profile.principles.nodes)
            .chain(&member.seed_profile.values.nodes)
            .map(|n| n.id)
            .collect();
        let unique: std::collections::HashSet<_> = all_ids.iter().collect();
        assert_eq!(all_ids.len(), unique.len());
    }
}
