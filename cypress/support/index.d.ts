// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  export interface Chainable {
    /**
     * Custom command log in
     * @example cy.login()
     */
    login(): Chainable<Element>
  }
}
