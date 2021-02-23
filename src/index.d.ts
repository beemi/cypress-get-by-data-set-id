// load type definitions that come with Cypress module
/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable {
        /**
         * Finds a form element using the label's text
         * @param value string
         * @example
         *  cy.getByDataSetId('first-name').type('Joe')
         */
        getByDataSetId(value: string): Chainable<Element>
    }
}