# Behavior Driven Development With Gherkin Executable Specifications

Behavior-Driven Development connects human-readable specifications to automated executable tests.

Gherkin is the language of those specifications. It is a domain-specific language designed to be readable by technical and non-technical people simultaneously.

Every concept is described by its first principles. No proprietary labels or vendor names.

A specification written in Gherkin serves two audiences simultaneously.

First, it communicates to humans what the software is supposed to do. Second, it drives automated test execution.

The same document is the requirement and the test. This eliminates the gap between what was specified and what was tested.

Gherkin uses a small set of keywords to give structure to plain-text descriptions.

The primary keywords are: Feature, Scenario, Given, When, Then, And, But.

Feature describes a high-level piece of functionality and its business value.

Scenario describes one specific situation in which the feature produces an observable outcome.

System (metaphor for an integrated whole or network):

Given sets the initial context. It describes the state of the system before the action begins.

When describes the action or event that triggers behavior.

Then describes the expected outcome after the action completes.

And and But extend the previous step without repeating the keyword.

A complete feature with scenarios takes this form:

Feature: User authentication
  Users must enter correct credentials to access their account.

  Scenario: Valid login
    Given the user is on the login page
    And the user has entered their username
    And the user has entered their password
    When the user clicks the login button
    Then the user should see their dashboard

  Scenario: Invalid password
    Given the user is on the login page
    And the user has entered their username
    And the user has entered an incorrect password
    When the user clicks the login button
    Then the user should see an error message
    And the user should remain on the login page

A Scenario Outline runs the same scenario multiple times with different data.

The outline uses angle brackets to mark variables in the steps.

An Examples table provides the data values for each run.

  Scenario Outline: Withdraw money from ATM
    Given the account balance is <balance>
    When the user requests <amount>
    Then the new balance should be <new_balance>
    Examples:
- balance
- 1000
- 500

Each row in the Examples table produces one full scenario run.

The Background keyword defines steps that run before every scenario in a file.

Use Background when the same Given steps appear at the start of every scenario.

Place Background after the Feature line and before the first Scenario.

Tags are labels prefixed with the at symbol. They can annotate Features or Scenarios.

Tags enable filtering: run only scenarios with a specific tag, or exclude scenarios with another tag.

Common uses: mark scenarios as work-in-progress with @wip, mark tests for specific environments with @slow, group related tests with @auth or @payment.

A step definition is code that connects a Gherkin step to executable action.

When the test runner encounters the step text, it searches for the matching step definition and executes it.

Step definitions are written in a general-purpose programming language.

The step text is the contract. The step definition is the implementation.

ATDD extends TDD by incorporating acceptance tests from the start.

The cycle: write the acceptance test, watch it fail, implement the feature, watch the test pass.

The acceptance test is written from the perspective of the user or customer. It tests observable behavior, not internal implementation.

This ensures the software does what the user needs, not just what the developer assumed.

Specification by Example is the practice of capturing requirements as concrete examples.

Instead of writing abstract requirements, write examples of specific behavior.

Examples reveal ambiguity. When a stakeholder sees an example, they can confirm whether it matches their intent.

Gherkin scenarios are concrete examples of system behavior.

Gherkin enables a three-way collaboration: developers, testers, and non-technical stakeholders.

All three groups read the same document. All three groups contribute to writing it.

The document is the shared language that bridges technical and business perspectives.

Without this bridge, developers implement what they think is needed, not what the user actually needs.

Regenerative community projects can use Gherkin to specify what their systems should do.

Example: a water management system.

  Feature: Water allocation
    Community members submit water requests.
    The system allocates based on priority.

    Scenario: Priority allocation
      Given member Alex has priority level 1
      And member Sam has priority level 2
      When both request water simultaneously
      Then Alex receives allocation first

The community reviews these scenarios before building. The scenarios confirm shared understanding.

Step definitions connect to the actual water management code. The scenarios become the acceptance tests.





207 206 204

