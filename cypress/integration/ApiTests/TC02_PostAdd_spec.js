
/// <reference types="cypress" />

Cypress.config('baseUrl', 'https://61b49a3059c6ac00173011bc.mockapi.io')

describe("Post Request", () => {
    it("Post -200", () => {
        cy.request({
            method: "POST",
            url: "/allGrocery",
            body: {
                name: "Pineapple",
                price: "12,75",
                stock: "10"
            }
        }).then(response => {
            expect(response.status).to.eql(201)
        })
    });
    it("Post -404", () => {
        cy.request({
            method: "POST",
            url: "/allGrocer",
            failOnStatusCode: false,
            body: {
                name: "Pineapple",
                price: "8.5",
                stock: "5"
            }
        }).then(response => {
            expect(response.status).to.eql(404)
        });
    });
})