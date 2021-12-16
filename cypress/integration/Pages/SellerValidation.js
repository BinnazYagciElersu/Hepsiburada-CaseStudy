
export function productControl() {

    cy.get("ul").should("have.length.greaterThan", 1);
     
}