# Verifiable Credentials Platform Decentralized Identity And Credential Verification

Verifiable Credentials are digital claims that a subject possesses certain attributes, issued by a trusted party, and verifiable by anyone.

A platform for Verifiable Credentials enables issuers to create credentials, holders to store them, and verifiers to check them.

Every concept is described by its first principles. No proprietary labels or vendor names.

A Verifiable Credential contains three parties: the issuer, the holder, and the verifier.

System (metaphor for an integrated whole or network):

The issuer makes claims about the holder. Example: a community authority issues a credential stating that a member has completed water system training.

The holder stores the credential and presents it when needed. The holder controls when and to whom the credential is shown.

The verifier checks the credential. The verifier confirms the issuer is trusted and the credential has not been tampered with.

A Verifiable Presentation is a subset of credentials presented to a verifier.

The holder selects which credentials to present. The presentation can be selective: reveal only the attribute that is needed, not the entire credential.

Example: instead of revealing a full identity document, present only the "member since" date.

Selective disclosure protects privacy. The holder reveals minimum necessary information.

A Decentralized Identifier is a URL that the holder controls without depending on a central registry.

The DID resolves to a DID document. The document contains public keys for verification and service endpoints.

Anyone can verify that the holder controls the DID by completing a challenge-response using the private key.

The holder can rotate keys without changing the identifier. If a key is compromised, a new key replaces it.

The Credential Handler API is a browser-based protocol for web applications to act as credential wallets.

An issuer website calls the API to request credentials from the holder wallet.

A verifier website calls the API to request presentation of credentials from the holder wallet.

The wallet runs in the browser. The holder never sends credentials to third-party servers.

Step 1: the verifier constructs a verification request specifying which credentials are required.

Step 2: the holder wallet receives the request and displays available credentials to the holder.

Step 3: the holder selects which credentials to present and approves the presentation.

Step 4: the wallet sends the presentation to the verifier.

Step 5: the verifier checks the cryptographic signatures, confirms the issuer is trusted, and checks any revocation lists.

Step 6: the verifier grants or denies access based on the result.

Selective disclosure allows a credential holder to reveal only specific attributes.

Instead of presenting a full credential with all attributes, the holder presents only the needed fields.

This is achieved through zero-knowledge proof techniques or bearer token truncation.

The verifier receives only what is needed. The holder's privacy is preserved.

Step 1: the holder requests a credential from an issuer.

Step 2: the issuer verifies the holder's identity through an out-of-band process.

Step 3: the issuer generates and signs the credential with their private key.

Step 4: the issuer delivers the credential to the holder wallet.

Step 5: the holder stores the credential for future use.

Regenerative communities can use Verifiable Credentials for membership management.

A community issues a credential to a member confirming their membership status and training completion.

When the member engages with another community, that community verifies the credential without contacting the issuing community.

The member controls their credentials. They can present them without the community tracking the interaction.

Skills and certifications can be issued as credentials. A member trained in water management by one community presents that credential to another community.

The decentralized nature means no single community controls the identity infrastructure.





200 208 207

