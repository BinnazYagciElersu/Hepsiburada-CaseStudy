const xhrIgnore = () => {
    cy.server({
        ignore: (xhr) => {
            return true;
        },
    });
}

const addHeader = () => {

    // Add Header for Http code 403
    cy.intercept(Cypress.config().baseUrl, (req) => {
        req.headers["HBAday"] = "5gNUIwnlmDe0ZWQp";
    }).as("headers");
}

const postXhr = () => {
    cy.intercept('POST', '*', (req) => {
        req.headers["HBAday"] = "5gNUIwnlmDe0ZWQp";
    }).as("headers");
}

export { xhrIgnore, addHeader, postXhr }
