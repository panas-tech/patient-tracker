/// <reference path="../support/index.d.ts" />

describe('Auth flow', () => {
  // start with clean auth
  beforeEach(() => indexedDB.deleteDatabase('firebaseLocalStorageDb'))

  it('should reroute user to /login if not logged in', () => {
    cy.visit('http://localhost:3000/')
      .url()
      .should('eq', 'http://localhost:3000/login')
  })

  it('should route to index route when logged in', () => {
    cy.login().url().should('eq', 'http://localhost:3000/')
  })

  it('should make the /login inaccessible if user is logged in', () => {
    cy.login()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.visit('http://localhost:3000/login')
      .url()
      .should('eq', 'http://localhost:3000/')
  })

  it('clicking logout should log the user out', () => {
    cy.login()
      .get('[data-test-id="signout"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/login')
  })
})
