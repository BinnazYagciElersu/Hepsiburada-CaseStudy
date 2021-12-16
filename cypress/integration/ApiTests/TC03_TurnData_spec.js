
/// <reference types="cypress" />

describe('API Testing', () => {

    Cypress.config('baseUrl', 'https://61b49a3059c6ac00173011bc.mockapi.io')

    it('Get - 200', () => {
        cy.request({
            method: 'GET',
            url: '/allGrocery/2'
        })
            .its('status')
            .should('equal', 200)
    })

    it('Get - 404', () => {
        cy.request({
            method: 'GET',
            url: '/allGrocery/44',
            failOnStatusCode: false
        })
            .its('status')
            .should('equal', 404)
    })

})
