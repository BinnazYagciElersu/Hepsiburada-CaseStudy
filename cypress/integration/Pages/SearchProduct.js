
export function searchProduct(product) {
    cy.get(".desktopOldAutosuggestTheme-input").type(product);
    cy.get(".SearchBoxOld-buttonContainer").click();
    cy.wait(4000);
}