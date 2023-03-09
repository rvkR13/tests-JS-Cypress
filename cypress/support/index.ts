/// <reference types="Cypress" />

declare namespace Cypress {
    interface Chainable {
        getAriaLabel(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
    }
    interface Chainable {
        getHref(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
    }
  }