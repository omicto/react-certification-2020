# Mini Challenge 2 answers

> Using `create-react-app`, what do we need to set up for testing?

Apps created with _CRA_ come with Jest preconfigured so we can run tests right away. However we can install `react-testing-library` to test components in a way that is more similar to how a user will interact with our app.

> What components are worth to test in your development?

We should strive to test all of our components. A comprehensive suite of tests allows a faster feedback loop when making changes in the code, given that all of our components are subject to change in the future, it may be worth to write tests for all of them.

> Can you apply TDD once you already created components?

Yes, the first step would be to create the missing tests for the existing components (and maybe refactor them, given that they probably were not created with tests in mind).

From that point on, you can now start by writing the tests for whatever new components or functionality you need to add.
