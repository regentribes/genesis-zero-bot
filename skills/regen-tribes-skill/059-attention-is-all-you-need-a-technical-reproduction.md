# Attention Is All You Need A Technical Reproduction

Ashish Vaswani. Noam Shazeer. Niki Parmar. Jakob Uszkoreit. Llion Jones. Aidan Gomez. Lukasz Kaiser. Illia Polosukhin.
Google Brain. Google Research. University of Toronto.
NIPS 2017. arXiv 1706.03762.
This document reproduces the technical mechanisms. No judgment. No endorsement. Just function.

Recurrent neural networks process sequences step by step.
Step t depends on step t minus 1.
This creates sequential dependencies.
Sequential dependencies prevent parallelization.
Parallelization is limited by memory constraints across examples.

Long sequences make this worse.
Distant positions require many steps to communicate.
Attention mechanisms allow modeling dependencies without distance.
But attention was used with recurrent networks.
Recurrent networks still created bottlenecks.

A model that relies entirely on attention mechanisms.
No recurrence. No convolutions.
Maximum parallelization.
Train on eight GPUs in twelve hours.
Reach state-of-the-art translation quality.

A sequence transduction model has an encoder and a decoder.
The encoder maps an input sequence to continuous representations.
The decoder generates an output sequence one element at a time.
Each step consumes previously generated symbols as input.
This is auto-regressive generation.

The encoder has six identical layers.
Each layer has two sub-layers.

Sub-layer one is multi-head self-attention.
Sub-layer two is a position-wise feed-forward network.

A residual connection wraps each sub-layer.
Layer normalization follows each residual.
Output of each sub-layer is LayerNorm(x plus Sublayer(x)).
All sub-layers produce outputs of dimension 512.
Embedding layers also produce dimension 512.
This enables residual connections.

The decoder has six identical layers.
Each layer has three sub-layers.

Sub-layer one is multi-head self-attention.
Sub-layer two is multi-head attention over the encoder output.
Sub-layer three is a position-wise feed-forward network.

Residual connections and layer normalization wrap each sub-layer.
The self-attention sub-layer is modified.
It prevents positions from attending to subsequent positions.
This masking ensures position i predictions depend only on known outputs at positions less than i.
Output embeddings are offset by one position.
This is standard auto-regressive behavior.

An attention function maps a query and key-value pairs to an output.
Query. Keys. Values. Output. All are vectors.
The output is a weighted sum of the values.
The weight assigned to each value comes from the compatibility of the query with the corresponding key.

The attention takes queries Q. Keys K. Values V.
Queries and keys have dimension d_k.
Values have dimension d_v.

Compute the dot product of each query with all keys.
Divide by the square root of d_k.
Apply softmax to get weights on the values.
Multiply weights by values.

Formula. Attention(Q, K, V) equals softmax(Q times K transpose over sqrt(d_k)) times V.

Additive attention and dot-product attention are similar.
Dot-product attention is faster.
Dot-product attention uses improved matrix multiplication.
For small d_k both perform similarly.
For large d_k dot products grow large in magnitude.
Large dot products push softmax into regions with small gradients.
Scaling by 1 over sqrt(d_k) counteracts this effect.

Assume query and key components are independent random variables.
Mean zero. Variance one.
Then the dot product has mean zero and variance d_k.
Scaling by 1 over sqrt(d_k) keeps variance at 1.

Instead of one attention function with dimension 512 keys and values.
Linear projections project queries, keys, values h times.
Each projection goes to dimension d_k, d_k, d_v.
For each projected version perform attention in parallel.
h heads operating simultaneously.
Each head produces a d_v-dimensional output.
The h outputs are concatenated.
Another linear projection produces the final output.

This allows the model to attend to information from different representation subspaces.
Different heads learn different patterns.
Information from different positions is combined.

Parameters. h equals 8. d_k equals 64. d_v equals 64.
d_model equals 512. 512 divided by 8 equals 64.
Total computational cost is similar to single-head attention with full dimension.

Each layer contains a fully connected feed-forward network.
Applied to each position separately and identically.
Two linear transformations with ReLU activation.
Hidden dimension is 2048.
Input dimension is 512. Output dimension is 512.
Formula. FFN(x) equals max of 0, x times W1 plus b1, times W2 plus b2.

The model contains no recurrence.
No convolution.
Attention captures dependencies regardless of distance.
But the order of positions is not captured.
Position encoding injects positional information.

Two encodings are used. Sine and cosine.
For position pos and dimension i.
PE(pos, 2i) equals sin of pos over 10000 to the power of 2i over d_model.
PE(pos, 2i plus 1) equals cos of pos over 10000 to the power of 2i over d_model.
Each dimension corresponds to a sine wave.
Frequency decreases as dimension increases.
The wavelengths form a geometric progression from 2 pi to 10000 times 2 pi.

This encoding was chosen over learned position embeddings.
It allows the model to generalize to sequence lengths longer than those seen during training.
Sinusoidal encodings produce the same output for any offset.
The model learns to attend to relative positions.
Relative position attention is more important than absolute position.

Self-attention relates positions within a single sequence.
It computes a representation of the sequence.
It captures dependencies regardless of distance.

Compared to recurrent networks.
Recurrent models factor computation along symbol positions.
Each step depends on the previous step.
This prohibits parallelization.
Self-attention permits parallelization across all positions.

Compared to convolutional models.
ByteNet and ConvS2S compute hidden representations in parallel.
The number of operations to relate two positions grows with distance.
ByteNet grows logarithmically.
ConvS2S grows linearly.
The Transformer reduces this to a constant number of operations.
At the cost of reduced effective resolution.
Multi-head attention counteracts this reduced resolution.

Self-attention allows the model to capture long-range dependencies.
Dependencies between distant positions are as easy to model as adjacent positions.
The path length between any two positions is O(1).
RNNs have path length O(n).
Convolutional models have path length O(log n) or O(n).

The model was trained on eight P100 GPUs.
Training took 3.5 days for the English-to-French model.
The model achieves 41.8 BLEU on WMT 2014 English-to-French.
This is a new single-model state-of-the-art.
On WMT 2014 English-to-German the model achieves 28.4 BLEU.
This improves over existing best results by over 2 BLEU.

Label smoothing was used.
Label smoothing value of 0.1.
This improves BLEU score.
It prevents overconfidence.

Input words enter embeddings.
Positional encodings are added.
Six encoder layers.
Each encoder layer has multi-head self-attention.
Each encoder layer has position-wise feed-forward.
Six decoder layers.
Each decoder layer has masked multi-head self-attention.
Each decoder layer has multi-head attention over encoder output.
Each decoder layer has position-wise feed-forward.
Final linear transformation.
Softmax over vocabulary.

d_model. 512. Dimension of model layers and embeddings.
h. 8. Number of attention heads.
d_k. 64. Dimension of each head.
d_v. 64. Dimension of each head value.
d_ff. 2048. Dimension of feed-forward hidden layer.
N. 6. Number of layers in encoder and decoder.
P_drop. 0.1. Dropout rate.
Warmup_steps. 4000. Learning rate warmup steps.

Query. What you are looking for in the sequence.

Key. What each position offers.

Value. The actual content at each position.

Scaled dot-product. Query-key compatibility divided by sqrt(d_k).

Multi-head. Running h attention operations in parallel.

Residual connection. Adding input to output before normalization.

Layer normalization. Normalizing over features.

Position encoding. Sinusoidal encoding of position order.

Auto-regressive. Generating output step by step consuming previous outputs.

Feed-forward. Two linear layers with ReLU activation.

054 040 000

