// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

describe("Homepage", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("Brings header", () => {
        //cy.getBySel("main-heading").should("contain.text", "superplate");
        cy.getBySel("main-heading").should("have.length", 1);
    });

    it("Sel Like Test", () => {
        // https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/testing-dom__tab-handling-links/cypress/integration/tab_handling_anchor_links_spec.js
        cy.get("[data-testid=btn]").should("have.length", 1);
        cy.getBySelLike("btn").should("have.length", 1);
    });

    it("Should length one", () => {
        cy.get("[data-test=colorModeBtn]").should("have.length", 1);
        cy.getBySel("colorModeBtn").should("have.length", 1);
    });

    it("Should have icons", () => {
        cy.getBySel("icon").should("have.length", 5);
    });
});
