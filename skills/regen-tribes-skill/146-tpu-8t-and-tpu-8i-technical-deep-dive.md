# Tpu-8T And Tpu-8I Technical Deep Dive

Google TPU design philosophy centers on three pillars: scalability, reliability, efficiency.
AI models evolve from dense LLMs to massive MoE and reasoning-heavy architectures.
Hardware must evolve to meet the specific operational intensities of the latest workloads.
The rise of agentic AI requires infrastructure for long context windows and complex sequential logic.
World models are an evolution from next-sequence-of-data architectures.
Newer agents simulate future scenarios, anticipate consequences, learn through imagination not trial-and-error.
TPU 8t and TPU 8i are the eighth-generation TPUs.
Both are key components of Google Cloud AI Hypercomputer.
AI Hypercomputer is an integrated supercomputing architecture combining hardware, software, and networking.

Both TPU systems share the core DNA of Google AI stack.
Each supports the full AI lifecycle.
Each addresses distinct bottlenecks for critical stages of development.
Arm-based Axion CPU headers remove the host bottleneck caused by data preparation latency.
Axion provides compute headroom for complex data preprocessing and orchestration.
TPUs stay fed and do not stall.

TPU 8t is improved for massive-scale pre-training and embedding-heavy workloads.
TPU 8t uses the proven 3D torus network topology at larger scale: 9,600 chips in a single superpod.
TPU 8t is designed for maximum throughput across hundreds of superpods.
Training runs stay on schedule.

Central to TPU 8t is the SparseCore.
SparseCore is a specialized accelerator for the irregular memory access patterns of embedding lookups.
The Matrix Multiply Unit (MXU) handles matrix math.
SparseCore offloads data-dependent all-gather operations and other collectives.
This prevents the zero-op bottlenecks that plague general-purpose chips.

TPU 8t maximizes provisioned FLOPs use.
More balanced Vector Processing Unit (VPU) scaling minimizes exposed vector operation time.
This allows better overlapping of quantization, softmax, and layernorms with matrix multiplications in the MXU.
The chip stays busy rather than waiting on sequential vector tasks.

TPU 8t introduces native 4-bit floating point (FP4).
This overcomes memory bandwidth bottlenecks.
FP4 doubles MXU throughput while maintaining accuracy for large models at lower-precision quantization.
Reducing the bits per parameter minimizes energy-intensive data movement.
Larger model layers fit within local hardware buffers for peak compute use.

Virgo Network enables up to 4x increased data center network (DCN) bandwidth on TPU 8t training.
Virgo Network is a scale-out fabric for the extreme requirements of modern AI workloads.
Built on high-radix switches that reduce network layers by allowing more ports per switch.
Uses a flat, two-layer non-blocking topology.
This significantly reduces latency by minimizing network tiers.
Features a multi-planar design with independent control domains to connect TPU 8t chips.
TPU 8t racks connect with the Jupiter north-south fabric to access compute and storage services.
This streamlined architecture delivers massive bisection bandwidth and deterministic low latency.
Enables the world largest training clusters with high availability.

TPU 8t has 2x scale-up bandwidth on the inter-chip interconnect (ICI).
TPU 8t has up to 4x raw scale-out DCN bandwidth compared to the previous generation.
TPU 8t drastically reduces data bottlenecks.

With JAX and Pathways, Google scales distributed training beyond a single cluster.
They scale to more than 1 million TPU chips in a single training cluster.
Virgo Network links over 134,000 TPU 8t chips.
Up to 47 petabits per sec of non-blocking bi-sectional bandwidth in a single fabric.
This fabric delivers over 1.6 million ExaFlops with near-linear scaling performance.

TPU 8t introduces TPUDirect RDMA and TPU Direct Storage.
TPU Direct RDMA enables direct data transfers between TPU memory (HBM) and Network Interface Cards (NICs).
Bypasses the host CPU and DRAM.
System (metaphor for an integrated whole or network):

Reduces latency and host system bottlenecks.
Increases effective bandwidth for TPU-to-TPU communication.

TPUDirect Storage bypasses CPU host bottlenecks.
Enables direct memory access between TPU and high-speed managed storage like 10T Lustre.
Effectively doubles the bandwidth for massive data transfers.
The silicon ingests training data at line rate.
MXUs stay fully saturated even when processing large multimodal datasets.

Managed Lustre 10T combined with TPUDirect Storage routes hundred-petabyte datasets directly to the silicon.
TPU 8t prevents training delays from data ingestion bottlenecks.
Delivers 10x faster storage access compared to seventh-generation Ironwood TPUs.

TPU 8i is improved for post-training and high-concurrency reasoning.
Designed with highest on-chip SRAM, new Collectives Acceleration Engine (CAE), and new Boardfly topology.

TPU 8i has 3x more on-chip SRAM over the previous generation.
Can host a larger KV Cache entirely on silicon.
Significantly reduces the idle time of cores during long-context decoding.

TPU 8i uses the CAE to solve the sampling bottleneck.
CAE aggregates results across cores with near-zero latency.
Specifically accelerates the reduction and synchronization steps during auto-regressive decoding and chain-of-thought processing.

Each TPU 8i chip has two Tensor Cores (TC) on-core dies and one CAE on the chiplet die.
This replaces four SparseCores (SCs) on core dies in previous-generation Ironwood TPU.
CAE reduces the on-chip latency of collectives by 5x.
Lower latency per collective operation means less time spent waiting.
Contributes to higher throughput required to run millions of agents concurrently.

The 3D torus allows connecting thousands of chips in cohesion.
A large mesh has more hops between chips and higher all-to-all latencies.

For TPU 8i, chips connect in fully connected boards that aggregate into groups.
uses a high-radix design.
Connects up to 1,152 chips together.
Reduces the network diameter and the number of hops a data packet must take to cross the system.
Slashes the hops required for all-to-all communication.
All-to-all communication is the heart of MoE and reasoning models.
Boardfly achieves up to 50% improvement in latency for communication-intensive workloads.

Boardfly topology is hierarchical.
Building Block (BB): Each tray forms a four-chip ring using internal ICI links.
Provides 16 external connections for broader networking.

Group (G): Eight boards are fully connected via copper cabling.
Creates a localized group.
uses 11 of the available external links for intra-group communication.

Pod structure: Scales to 36 groups.
Up to 1,024 active chips.
Linked through Optical Circuit Switches (OCS).
Maximum latency of seven hops for any chip-to-chip communication.

In a 3D torus, nodes are arranged in a grid where each dimension wraps around like a ring.
To reach the furthest chip in an 8 by 8 by 16 (1024-chip) configuration, a packet traverses half the distance of each ring.
3D torus = 8/2(X) + 8/2(Y) + 16/2(Z) = 16 hops.

The torus is highly efficient for neighbor-to-neighbor communication typical of dense training.
But it creates a latency tax for all-to-all communication patterns.
In the era of reasoning models and MoE, any chip may need to talk to any other chip to route a token.
This hop count matters.

Boardfly high-radix topology is inspired by Dragonfly topology principles.
Increases the number of direct optical long-haul links between groups of boards.
Flattens the network.
For the same 1024-chip pod, Boardfly reduces the network diameter from 16 hops down to seven.
This 56% reduction in network diameter translates directly to lower tail latency.
The TPU 8i CAE is not left waiting for data to arrive from across the pod.

Feature 1 is Primary Workload.
TPU 8t is large-scale pre-training.
TPU 8i is sampling, serving, and reasoning.

Feature 2 is Network Topology.
TPU 8t is 3D torus.
TPU 8i is Boardfly.

Feature 3 is Specialized Chip Features.
TPU 8t has SparseCore for embeddings and LLM Decoder Engine.
TPU 8i has CAE (Collectives Acceleration Engine).

Feature 4 is HBM Capacity.
TPU 8t is 216 GB.
TPU 8i is 288 GB.

Feature 5 is On-Chip SRAM (Vmem).
TPU 8t is 128 MB.
TPU 8i is 384 MB.

Feature 6 is Peak FP4 PFLOPs.
TPU 8t is 12.6.
TPU 8i is 10.1.

Feature 7 is HBM Bandwidth.
TPU 8t is 6,528 GB per sec.
TPU 8i is 8,601 GB per sec (~1.3x of TPU 8t).

Feature 8 is CPU Header.
Both have Arm Axion.

Hardware is only as powerful as the software that drives it.
Eighth-generation TPUs are built on the same performance-first stack as seventh-generation Ironwood TPUs.
Designed to make custom kernel development accessible without sacrificing high-level framework abstraction.

Pallas and Mosaic: First-class support for Pallas.
Pallas is a custom kernel language that lets you write hardware-aware kernels in Python.
Enables squeezing every drop of performance out of TPU 8i CAE and TPU 8t SparseCore.

Native PyTorch experience: Native PyTorch support for TPUs is now in preview.
You can bring existing models to TPUs as they are.
Full support for native features such as Eager Mode.

Portability: The same JAX, PyTorch, or Keras code that runs on Ironwood scales to this generation.
Accelerated Linear Algebra (XLA) handles the complex translation of Boardfly topology and CAE synchronization behind the scenes.
You focus on your model, not the interconnect.

Eighth-generation TPUs deliver massive gains compared to seventh-generation Ironwood TPU.

Training price-performance: TPU 8t delivers up to 2.7x performance-per-dollar improvement over Ironwood TPU for large-scale training.

Inference price-performance: TPU 8i delivers up to 80% performance-per-dollar improvement over Ironwood TPU.
Particularly at low-latency targets for large MoE models.

Energy efficiency: Both chips deliver up to 2x better performance-per-watt.
Critical for scaling the next generation of AI sustainably.

TPU 8t enables training of large world models for ecological systems.
World models simulate future scenarios for climate modeling, succession planning, resource flow prediction.

TPU 8i large KV cache on silicon enables longer context windows for community memory.
Agentic systems can maintain much longer state about community history, relationships, decisions.

FP4, SRAM, direct storage efficiency gains enable better offline edge inference.
Communities can run meaningful inference without full cloud dependency.

The hardware trajectory points toward communities running increasingly capable local AI infrastructure.
The bottleneck is shifting from can we run it to what world models we train on our own data.

Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): 



055 061 111

