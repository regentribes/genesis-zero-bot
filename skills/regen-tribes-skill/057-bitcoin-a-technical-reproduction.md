# Bitcoin A Technical Reproduction

System (metaphor for an integrated whole or network):

Bitcoin is a peer-to-peer electronic cash system.
Satoshi Nakamoto proposed it in 2008.
This document reproduces the technical mechanisms.
No judgment. No endorsement. Just function.

Electronic payments require a trusted third party.
A bank or payment processor mediates.
The mediator can reverse transactions.
The mediator charges for this service.
The mediator limits minimum transaction size.
The mediator knows every transaction.

Sellers must verify buyer identity.
Fraud is accepted as unavoidable.
Physical cash avoids this.
No digital equivalent exists without a trusted party.

A payment system based on cryptographic proof.
No trusted third party.
Two willing parties transact directly.
Sellers are protected from fraud.
Buyers are protected through routine escrow.
Reversals are computationally impractical.

A coin is a chain of digital signatures.
Each owner transfers the coin to the next.
The owner signs a hash of the previous transaction.
The owner adds the public key of the next owner.
This signed hash goes to the end of the coin.

The payee can verify every signature.
The payee can verify the chain of ownership.

The payee cannot verify that the previous owner double-spent.
This is the double-spending problem.

A trusted mint solves double-spending.
Every transaction goes through the mint.
The mint checks for double-spending.
The mint issues a new coin after each transaction.
Only coins from the mint are trusted.

The problem is the mint controls the money system.
Every transaction goes through one company.
The fate of the system depends on one entity.

The solution uses a peer-to-peer timestamp server.
A block of items gets a hash.
The hash gets published.
The hash proves the data existed at that time.

Each timestamp includes the previous timestamp.
This forms a chain.
Each link reinforces all previous links.

A proof-of-work system replaces newspaper timestamps.
A value is found such that its hash begins with zero bits.
The work required is exponential in zero bits required.
The work is verified by executing one hash.

The block gets a nonce.
The nonce increments until the hash has required zero bits.
Once the work is done the block cannot change.
Changing the block requires redoing all work after it.

Proof-of-work implements one-CPU-one-vote.
One IP address can have many CPUs.
The majority decision is the longest chain.
The longest chain has the most proof-of-work invested.

Honest nodes control more CPU power than attackers.
Honest chain grows fastest.
Attackers must redo the block plus all blocks after it.
Attackers must catch up and surpass honest nodes.
The probability of a slower attacker catching up drops exponentially.

Difficulty adjusts dynamically.
A moving average targets an average number of blocks per hour.
Too fast means difficulty increases.
This compensates for increasing hardware speed.

Step 1. New transactions broadcast to all nodes.

Step 2. Each node collects transactions into a block.

Step 3. Each node works on finding a proof-of-work for its block.

Step 4. When a node finds a proof-of-work it broadcasts the block to all nodes.

Step 5. Nodes accept the block only if all transactions are valid and not already spent.

Step 6. Nodes express acceptance by working on the next block.
Nodes use the hash of the accepted block as the previous hash.

Nodes always consider the longest chain correct.
Nodes keep extending the longest chain.

If two nodes broadcast different versions of the next block simultaneously.
Some nodes receive one first. Some receive the other first.
Nodes work on the first received but save the other branch.
The tie breaks when the next proof-of-work is found.
The longer branch wins.
Nodes on the shorter branch switch to the longer one.

Transactions do not need to reach all nodes.
As long as they reach many nodes they will get into a block.
Block broadcasts tolerate dropped messages.
A node requests missed blocks when it receives the next block.

The first transaction in each block starts a new coin.
The new coin belongs to the creator of the block.
This rewards nodes for supporting the network.
This distributes coins without a central issuer.

This is like gold mining.
Gold miners expend resources to add gold to circulation.
Bitcoin miners expend CPU time and electricity.

The incentive can also include transaction fees.
If output value is less than input value the difference is a transaction fee.
The fee adds to the incentive value of the block.

Once a fixed number of coins have entered circulation.
The incentive can transition entirely to transaction fees.
This makes the system completely inflation free.

The incentive may encourage honest behavior.
An attacker with more CPU power than honest nodes faces a choice.
Use power to defraud and steal payments back.
Or use power to generate new coins honestly.

Honest play is more profitable.
Rules favor the attacker with more new coins.
Undermining the system undermines the attacker's own wealth.

Once a transaction is buried under enough blocks it can be discarded.
Spent transactions before the buried block are discarded.
This saves disk space.

Transactions are hashed in a Merkle Tree.
Only the root hash is included in the block header.
Old blocks can be compacted by stubbing branches of the tree.
Interior hashes do not need storage.

A block header is about 80 bytes.
Blocks generated every 10 minutes.
80 bytes times 6 times 24 times 365 equals 4.2 megabytes per year.
Storage grows faster than this.
Disk space is not a practical problem.

Double-spending. Spending the same coin twice.

Proof-of-work. CPU effort expended to find a hash with required zero bits.

Longest chain. The valid chain with the most work invested.

Merkle Tree. Transactions hashed pairwise repeatedly until one root hash represents all.

Nonce. A value incremented until the hash meets the difficulty target.

Mining. The process of finding proof-of-work and creating new coins.

050 040 058 000

