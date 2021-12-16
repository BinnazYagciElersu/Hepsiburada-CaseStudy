export function pickProduct(buttonTitle,productDetails) {

    cy.get(`a[title='${buttonTitle}']`)
        .invoke("removeAttr", "target")
        .click();

    cy.get(".product-name").contains(productDetails);

}

