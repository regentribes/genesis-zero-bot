---
name: kubectl
description: Kubernetes command reference. Use when managing K8s resources (pods, deployments, services), viewing cluster status, debugging applications, deploying to clusters, or configuring cluster access.
---

# kubectl — Kubernetes CLI Reference

## Common Commands

```bash
# Get resources
kubectl get pods                    # List all pods
kubectl get svc                     # List services
kubectl get deployments             # List deployments
kubectl get all                     # All resources
kubectl get pods -n <namespace>     # Specific namespace

# Describe
kubectl describe pod <name>         # Full pod details
kubectl describe svc <name>        # Service details

# Logs
kubectl logs <pod>                 # Pod logs
kubectl logs -f <pod>              # Follow logs
kubectl logs <pod> --previous      # Previous container logs

# Exec
kubectl exec -it <pod> -- /bin/sh  # Shell into pod
kubectl exec <pod> -- cat /path/file

# Apply / Delete
kubectl apply -f <file.yaml>       # Apply manifest
kubectl delete -f <file.yaml>      # Delete manifest
kubectl delete pod <name>          # Delete pod

# Port forward
kubectl port-forward pod/<pod> 8080:80

# Rollouts
kubectl rollout status deployment/<name>
kubectl rollout undo deployment/<name>
kubectl rollout history deployment/<name>

# Scaling
kubectl scale deployment/<name> --replicas=3

# Context / Config
kubectl config current-context
kubectl config use-context <context>
kubectl config get-contexts
kubectl config view
```

## Resource Types

- **Pod** — smallest deployable unit
- **Deployment** — declarative updates for pods
- **Service** — stable endpoint for pods
- **Ingress** — HTTP/HTTPS routing
- **ConfigMap** — non-sensitive config
- **Secret** — sensitive data
- **PersistentVolumeClaim** — persistent storage
- **Namespace** — cluster isolation
- **Node** — worker machine

## Useful Flags

- `-n <namespace>` or `--namespace=<ns>` — target namespace
- `-l key=value` or `--selector key=value` — label selector
- `--dry-run=client` — validate without applying
- `-o yaml` — output as YAML
- `-o json` — output as JSON
- `-w` or `--watch` — watch for changes
