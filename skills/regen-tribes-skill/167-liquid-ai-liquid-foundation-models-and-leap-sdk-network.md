# Liquid Ai Liquid Foundation Models And Leap Sdk Network

Liquid AI is a company building efficient general-purpose AI for every scale.
The company focuses on native device foundation models improved for processors outside data centers.
Key focus areas are latency, privacy, and hardware constraints of physical world deployment.

The company provides three business lines:
Enterprise solutions for end-to-end custom AI tailored to business needs.
Startup solutions through a program for specializing and deploying customized LFMs.
Developer solutions via tools and community for building and deploying on-device AI.

LFMs (Liquid Foundation Models) are purpose-built for efficiency, speed, and real-world deployment on any device.
They run on GPUs, CPUs, or NPUs across wearables, robotics, phones, laptops, and cars.
The LFM2 family includes multiple modalities and parameter sizes.

LFM2-350M is a 350 million parameter text model.
LFM2-700M is a 700 million parameter text model.
LFM2-1.2B is a 1.2 billion parameter text model.
LFM2-RAG is a specialized variant for retrieval-augmented generation.

LFM2-VL-450M is a 450 million parameter vision-language model.
LFM2-VL-1.6B is a 1.6 billion parameter vision-language model.

LFM2-Audio-1.5B is a 1.5 billion parameter audio model.

LFM2-350M-ENJP-MT is a multilingual model supporting English and Japanese.

LFM2.5-1.2B-Thinking is a reasoning model with chain-of-thought capabilities.

Liquid LFMs use a device-aware model architecture search.
This proprietary approach finds optimal architectures for specific hardware constraints.
Enables rapid customization for latency, privacy, and security requirements.

The architecture is designed from the ground up for on-device deployment.
Not a quantized or pruned version of a larger model.

All LFMs are available as open-weight models on Hugging Face.
The community has contributed numerous fine-tuned variants.
Models support various deployment targets including Python, C++, ONNX, WebGPU.

LEAP is the developer platform for building, specializing, and deploying on-device AI.
The SDK abstracts away hardware complexity.
Makes SLM deployment as easy as calling a cloud LLM API endpoint.

The Edge SDK targets mobile and edge deployment.
Available for Android (Kotlin) and iOS (Swift).
Provides the same interface regardless of underlying hardware.

Example applications include LeapChat (streaming chat with history), Voice Assistant (audio input/output), VLM Example (visual language models), ShareAI (website summarization), Recipe Generator (structured output).

Pre-built UI components accelerate development.
leap-ui-demo provides voice assistant and chat UI components.
Available for web (via WebAssembly), macOS, Android, and iOS.

LEAP supports multiple inference backends:
llama.cpp for C++ inference with quantization support.
Python bindings via llama-cpp-python.
Transformers.js for browser-based inference via WebGPU.
ONNX Runtime for cross-platform deployment.
Native MLX for Apple Silicon.

System (metaphor for an integrated whole or network):

Ecosystem (metaphor for an interconnected network):

The Liquid4All Ecosystem (metaphor for system or network): GitHub organization maintains the open-source ecosystem.

Repository 1 is cookbook with 1,843 stars.
Examples, end-to-end tutorials, and apps built using LFMs and LEAP SDK.
Covers desktop apps, browser apps, mobile apps, fine-tuning examples, third-party integrations, community projects, and technical deep dives.

Repository 2 is leap-finetune with 144 stars.
Minimal fine-tuning repository for LFM2 built entirely on open-source.
Supports supervised fine-tuning, reinforcement learning, continued pre-training, vision-language fine-tuning.

Repository 3 is liquid-audio with 434 stars.
Speech-to-speech audio models by Liquid AI.
Audio transcription CLI, voice assistant for Mac, audio car cockpit demos.

Repository 4 is LeapSDK-Examples with 61 stars.
Example apps for the LeapSDK on Android and iOS.
LeapChat, Voice Assistant, VLM Example, and more.

Repository 5 is leap-ios with 35 stars.
iOS-specific LEAP implementation.

Repository 6 is docs with 24 stars.
Official Liquid AI documentation.
Hosted at docs.liquid.ai with Mintlify.
Includes MCP server for AI coding tool integration.

Repository 7 is on-prem-stack with 6 stars.
Scripts to launch Liquid on-prem stack for enterprise deployment.

Repository 1 is liquid_llama.cpp with 4 stars.
LLM inference in C/C++ for Liquid models.

Repository 2 is benchmarks-llama.cpp with 2 stars.
Benchmarking infrastructure for llama.cpp inference.

Repository 3 is onnx-export with 16 stars.
ONNX export pipeline for Liquid models.

Repository 4 is lfm-inference with 7 stars.
Python inference infrastructure.

Repository 1 is mt_bench with 3 stars.
Modified mt_bench with API and HuggingFace scripts for LFMs.

Repository 2 is LiquidRULER with 2 stars.
Modified RULER evaluation for LFMs.

Repository 3 is llm-jp-eval with 2 stars.
Japanese LLM evaluation.

Repository 4 is VLMEvalKit_Liquid with 2 stars.
Open-source evaluation toolkit for large multi-modality models.

Repository 5 is openbench with 1 star.
Provider-agnostic open-source evaluation infrastructure.

Repository 6 is tau2-bench with 1 star.
Evaluating conversational agents in dual-control environments.

Repository 7 is search_evals with 1 star.
Batteries-included eval framework for search APIs.

Invoice Parser extracts structured data from invoice images using LFM2-VL-3B.

Audio Transcription CLI provides real-time audio-to-text with LFM2-Audio-1.5B and llama.cpp.

Flight Search Assistant finds and books plane tickets using LFM2.5-1.2B-Thinking with tool calling.

Audio Car Cockpit combines LFM2.5-Audio-1.5B with LFM2-1.2B-Tool for voice-controlled car interface.

LocalCowork is an on-device AI agent for file operations, security scanning, OCR, powered by LFM2-24B-A2B.

Home Assistant provides local home assistant with tool calling, benchmarking, fine-tuning pipeline using LFM2-350M and LFM2.5-1.2B.

Tool Calling runs LFM2 entirely in browser with WebGPU for in-browser tool calling.

Voice Assistant runs LFM2.5-Audio-1.5B in-browser for speech recognition, TTS, and conversation.

Live Video Captioning provides real-time video captioning with LFM2.5-VL-1.6B in-browser.

Chain-of-Thought Reasoning runs LFM2.5-1.2B-Thinking in browser for on-device chain-of-thought reasoning.

Hand and Voice Racer is a browser driving game controlled by hand gestures (MediaPipe) and voice commands (LFM2.5-Audio-1.5B).

LEAP Voice Assistant runs in browser via WebAssembly using LEAP SDK.

Android apps via LEAP Edge SDK:
LeapChat with real-time streaming and persistent history.
Voice Assistant with audio input/output.
LeapKoogAgent for AI agent functionality.
SloganApp for marketing slogan generation.
ShareAI for website summarization.
Recipe Generator for structured output generation.
VLM Example for visual language model integration.

iOS apps via LEAP Edge SDK:
LeapChat with streaming and conversation management.
LeapSloganExample for text generation.
Recipe Generator for structured output.
Voice Assistant with audio input/output.
Vision Assistant for visual language model chat.

Supervised Fine-Tuning (SFT):
SFT with Unsloth for memory-efficient training with LoRA (2x faster).
SFT with TRL using Hugging Face TRL library with parameter-efficient LoRA.

Reinforcement Learning:
GRPO with Unsloth for Group Relative Policy improvement for verifiable tasks.
GRPO with TRL for rule-based reward training.

Continued Pre-Training (CPT):
CPT for Translation to adapt models to specific languages.
CPT for Text Completion to teach domain-specific knowledge.

Vision-Language Fine-Tuning:
VLM SFT with Unsloth for custom image-text datasets.
Satellite VLM Fine-Tuning on satellite imagery for VQA, grounding, and captioning.

DeepCamera is an open-source AI camera system with facial recognition, person re-ID, edge deployment on Jetson and Raspberry Pi.

Osaurus is a native macOS AI harness for agents, memory, tools, identity with MLX on Apple Silicon.

LFM2.5 Mobile Actions fine-tunes LFM2.5-1.2B for on-device mobile action recognition (natural language to Android OS function calls).

Food Images Fine-tuning for food image datasets.

LFM2-KoEn-Tuning for Korean-English translation.

Grumpy Italian Chef SFT and DPO fine-tuning demonstration.

Tic Tac Toe RL fine-tuning with reinforcement learning.

Barq-web-rag browser-based RAG app with LFM2.5-1.2B-Thinking.

Tauri Plugin LEAP AI for desktop and mobile app integration.

React Native Chat with LEAP SDK.

Recorded sessions covering fine-tuning LFM2-VL for image classification, 100% local audio-to-speech CLI, fine-tuning for browser control with GRPO, local video captioning with WebGPU, building local AI coding assistant, wildfire detection system with VLM
and
satellite images.

Liquid docs provides an MCP server at docs.liquid.ai/mcp.
Enables AI coding tools (Claude Code, Cursor) to query live documentation.
Standardized connection to external data sources and tools.

The on-prem-stack repository provides scripts for enterprise deployment.
Enables organizations to run Liquid AI infrastructure locally.
Addresses data sovereignty and compliance requirements.

Liquid AI provides compelling technology for regenerative community deployment.

On-device AI enables privacy-preserving community applications.
No data leaves the community device for processing.
Critical for sensitive community governance and coordination.

Small language models run on commodity hardware.
Community members can participate without expensive equipment.
 Democratizes access to AI capabilities.

LEAP SDK abstracts hardware complexity.
Developers can build community applications without low-level improvement.
Faster development cycles for community tools.

The cookbook provides extensive examples.
Community developers can reference working code.
Accelerates community application development.

Recommended applications for regenerative communities:
LocalCowork for community document processing.
Home Assistant for energy and resource management.
Voice interfaces for accessibility.
RAG for community knowledge retrieval.
Mobile apps for field data collection.

The open-weight models enable community customization.
Fine-tuning for community-specific vocabulary and workflows.
No dependency on proprietary cloud services.





160 165 164

