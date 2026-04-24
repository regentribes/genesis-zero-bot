# Paid Api Gateway Metered Programmatic Access With Blockchain Settlement

A Paid API Gateway charges callers for each invocation of an API method. Payment is settled on a blockchain ledger.

The gateway stands between the caller and the API backend. It deducts the appropriate fee before forwarding the request.

Every concept is described by its first principles. No proprietary labels or vendor names.

APIs provide programmatic access to services. Traditional APIs meter usage through rate limits or subscription tiers.

System (metaphor for an integrated whole or network):

A blockchain-based payment system enables direct per-call payment without a central payment processor.

The fee is settled atomically with the call. If payment fails, the call is rejected before reaching the backend.

Step 1: the API owner defines the fee schedule. Each method has a price in token units.

Step 2: the gateway receives the API call with payment metadata.

Step 3: the gateway verifies the caller has sufficient funds. If not, the call is rejected.

Step 4: the gateway deducts the fee from the caller and forwards the call to the backend.

Step 5: the backend processes the call and returns the response.

Step 6: the gateway forwards the response to the caller.

Steps 3 and 6 happen atomically. If step 4 fails, the caller is not charged.

Method 1 is attached tokens.
The caller attaches the fee to the API call message itself.
The fee is transferred to the API owner in the same transaction as the call.

Method 2 is approved tokens. The caller pre-authorizes the gateway to deduct fees up to a limit. Each call deducts from the authorized allowance.

Method 3 is third-party payment. A sponsor pre-funds an allowance for a specific caller. The sponsor pays the fees on behalf of the caller.

Tokens supported include blockchain-native tokens, wrapped tokens on layer 2 networks, and stablecoins pegged to fiat currency.

Layer 2 tokens enable high speed and low transaction cost. The gateway can accept tokens designed for fast settlement.

Chain Key technology enables decentralized signing and verification across multiple blockchain networks. The gateway abstracts the token network from the API caller.

The gateway is a separate component deployed in front of the API backend. The backend code requires no modification to accept payments.

The wrapper exposes a small set of generic proxy methods. Callers send requests to the wrapper. The wrapper charges the fee and proxies the call to the real destination.

This pattern enables payment enforcement on existing APIs without changing their implementation.

The gateway configuration specifies which payment methods are accepted per API method.

The API owner defines: the default payment method, the acceptable payment types, and the fee amount per method.

The caller specifies which payment method to use at call time. If the caller omits the method, the default applies.

Blockchain settlement provides cryptographic proof of payment. The transaction hash serves as the receipt.

Once a transaction confirms, the payment cannot be reversed. This eliminates chargeback risk.

The gateway does not hold funds between payment and settlement. Funds move directly from caller to API owner.

A community can publish its knowledge base as a paid API. Developers pay per call to access community data.

The community defines which data is public free and which is premium paid.

Payment settlement happens on-chain. The community treasury receives funds automatically.

Community members can become sponsors, pre-funding calls for new members who cannot yet pay directly.





200 208 205

