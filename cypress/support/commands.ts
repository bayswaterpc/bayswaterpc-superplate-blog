Cypress.Commands.add("getBySel", (selector, ...args) => {
    console.log("hit when");
    return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add("getBySelLike", (selector, ...args) => {
    return cy.get(`[data-testid=${selector}]`, ...args);
});
