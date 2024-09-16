import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the Landing page", () => {
  cy.visit("/");
  cy.wait(1000);
});

When("I click on the Login button in the Navbar", () => {
  cy.get('[href="/login"]').click();
});

Then("I should be redirected to the Login page", () => {
  // TODO: implement step
});

Then("I enter my username and password", () => {
  cy.get("#userName").type("farre");
  cy.wait(1000);
  cy.get("#password").type("123456!Farre");
  cy.wait(1000);
});

When("I click on the Login button", () => {
  cy.get(".login-button").click();
});

Then("I should be logged into my account", () => {});

Then("I should see the account information", () => {});

When("I Click on the Log out button", () => {
  cy.wait(3000);
  cy.get(".navbar-link-wrapper > .active").click();
});

Then("I should logged out", () => {});
