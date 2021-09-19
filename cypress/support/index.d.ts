/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        getBySel(title: string): Chainable<any>;
        getBySelLike(title: string): Chainable<any>;
    }
}
