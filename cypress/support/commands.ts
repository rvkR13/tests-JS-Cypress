 ///<reference types="cypress" />

Cypress.Commands.add("getAriaLabel", (selector) => {
  return cy.get(`[aria-label=${selector}]`)
})
Cypress.Commands.add("getHref", (selector) => {
  return cy.get(`[href=${selector}]`)
})
