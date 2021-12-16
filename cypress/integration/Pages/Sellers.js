
export function shoppingTime() {

    cy.get(".add-to-basket").eq(0).click().wait(2000);
    cy.get(".add-to-basket").eq(1).click().wait(2000);

}

