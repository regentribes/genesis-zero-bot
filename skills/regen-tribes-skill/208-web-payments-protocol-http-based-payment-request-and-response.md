# Web Payments Protocol Http Based Payment Request And Response

This note describes the first principles of web payments protocols that enable payment initiation and settlement over HTTP.

The source material covers the W3C Web Payments Working Group specifications and a commercial web3 payment platform.

Every concept is described by its fundamental nature and purpose. No proprietary labels or vendor names.

When requesting and fulfilling a payment via HTTP on the web, multiple messages must pass between parties to execute the movement of funds.

These parties include: the software that initiates the payment, the software that executes the payment, and the software that finalizes the settlement.

System (metaphor for an integrated whole or network):

Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): The core problem: each payment ecosystem developed its own proprietary integration. Merchants faced costly custom development for each payment method.

The protocol standardizes the message formats so that a single integration works across multiple payment methods.

A payment request expresses a payment that is requested by a payee.

A payee is the party that will receive the funds.

The message contains:

The type identifier. This identifies the message as a PaymentRequest. The set of types can be extended to include things like SubscriptionRequest for recurring payments.

The description. This is a human-readable explanation of why the payment was initiated. Example: payment for widgets from the seller name.

The payment terms. These express the type of payment method, amount, and other conditions under which the transaction may be fulfilled.

The payment details. These are optional information about what is being purchased, such as a list of line items.

The payment options.
These are optional requests intended for the payment mediator or the payment application.
Example: request that the payment mediator return the shipping address and email selected by the payer.

Payment terms express the conditions under which a payee will accept payment.

The payment method identifier. This identifies the payment method. Examples: a card network identifier, a bank identifier, or a protocol identifier.

The payment amount. This is the financial amount requested by the payee. The amount may be expressed in multiple currencies.

A financial amount expresses a scalar financial value.

The currency. This is a three-character alphabetic code as defined by ISO 4217, or a URL that serves as a currency identifier.

The amount.
This is a string containing the decimal monetary value.
The string uses a single full stop as the decimal separator.
Only digits zero through nine appear in the string.

Example: fifty-five US dollars expressed as fifty-five and zero cents.

A payment response expresses the result of processing a payment request.

The message contains:

The type identifier. This identifies the message as a PaymentResponse. The set of types can be extended to include Receipt for acknowledgements containing receipt information.

The description. Human-readable text identifying what the payment was for.

The payment information.
This includes the payment method used and the payment amount.
Payment-method-specific information such as the status of the payment may be included.
This information enables the payee or their payment service provider to finalize the payment.

The payment options. Any options that were requested by the payee, such as email address, phone number, or billing address.

Step 1: the payer initiates a payment by clicking a buy or checkout button on a website.

Step 2: the website constructs a PaymentRequest message containing the payment terms acceptable to the payee.

Step 3: the website calls the show method on the PaymentRequest. This displays the browser payment interface to the payer.

Step 4: the payer selects a payment method and approves the payment. The browser returns a PaymentResponse to the website.

Step 5: the website processes the payment using the information in the PaymentResponse. The website calls the complete method on the PaymentResponse with a success indicator.

Step 6: the payment interface closes.

A payment method identifier is a string that uniquely identifies a payment method.

Identifiers can be URLs. A URL-based identifier indicates that the payment method is defined at that URL. This enables decentralized extensibility.

Any party can define a new payment method by publishing a specification at a URL. The payment method specification defines the data format for requests and responses using that method.

This design means new payment methods do not require protocol changes. The identifier system provides extensibility without coordination.

The data model for payment messages tends toward abstraction to aid readability and ensure applicability across programming environments.

Constraints on values can be added in concrete syntax.
For JSON environments, JSON Schema validation can be applied.
For structured data requiring semantic context, JSON-LD with a specific context can be used.

JSON-LD with a decentralized context provides message extensibility without centralized coordination. It also prevents terminology clashes between industry verticals.

The abstract approach means: the same conceptual model applies whether the implementation uses JSON, WebIDL, or another format.

The browser acts as an intermediary between the merchant website and the payment method.

The browser presents a standardized payment interface regardless of which payment method is selected.

This browser mediation provides security benefits. Tokenization and system-level authentication are possible through the browser that are not available to standard JavaScript libraries.

The browser operates only in secure contexts. This means HTTPS is required for all payment flows.

The Payment Handler API enables web applications to act as payment method providers.

A payment handler is a web application that can provide a payment method to any merchant that accepts it.

Payment handlers register with the browser. When a merchant initiates a PaymentRequest, the browser presents registered payment handlers as options to the payer.

This model enables anyone to become a payment method provider without requiring browser vendor cooperation.

In web3 payment contexts, additional concerns appear.

The payment method is a blockchain network and a cryptocurrency.

The payment amount is expressed in cryptocurrency units.

The settlement is on-chain. The transaction hash serves as proof of payment.

Additional concerns: gas fees, network congestion, wallet addresses, smart contract interactions.

Commercial platforms for web3 payments offer services on top of the base protocol.

Services offered include: smart contract templates for token launches, staking dashboards, embedded widgets for accepting crypto payments, multi-network support, and real-time settlement.

The platform handles the technical complexity of smart contract deployment and blockchain interaction. The merchant integrates via an API or embedded widget.

Additional services include: tokenomics advisory, custom presale page design, vesting schedule configuration, and exchange listing coordination.

Security auditing of smart contracts is a standard service offering. Auditing provides third-party verification that contract logic matches intended behavior.

Principle 1: separation of concerns. The protocol handles message format. Payment method specifications handle method-specific behavior. Merchants integrate once to the protocol.

Principle 2: decentralized extensibility. New payment methods are defined by publishing a URL-based identifier and a specification. No central registry required.

Principle 3: browser as trust intermediary. The browser mediates between payer and merchant, providing standardized UX and security guarantees.

Principle 4: abstraction over implementation. The data model is described in abstract terms. Concrete syntax is a choice of the implementation environment.

Principle 5: on-chain finality. In blockchain contexts, the settlement is the blockchain transaction. The protocol message confirms the transaction exists and contains the expected data.

Regenerative communities can use payment protocols for member-to-member and member-to-community transactions.

A community payment system could accept multiple payment methods: national currency, community currency, and cryptocurrency.

The payment request message provides a standard format for expressing what is being paid for and at what amount.

The payment handler model enables the community to register its own payment handler. Community members can pay using the community payment method in any compliant browser.

For community currencies, a payment method identifier URL would point to the community currency specification. The specification defines the currency rules: issuance, transfer, redemption.

The payment response includes the transaction confirmation. For community currencies, this confirms the balance transfer occurred in the community ledger.





200 204 207

