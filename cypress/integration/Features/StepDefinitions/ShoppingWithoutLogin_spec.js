import { addHeader, xhrIgnore } from "../../Helpers/helpers"

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { searchProduct } from "../../Pages/SearchProduct";
import { pickProduct } from "../../Pages/ProductPick";
import { shoppingTime } from "../../Pages/Sellers";
import { cartControl } from "../../Pages/GotoBasket";
import { productControl } from "../../Pages/SellerValidation";


beforeEach(function () {
    xhrIgnore();
    addHeader();
})

Given('User navigate to the website', () => {
    cy.visit(Cypress.config().baseUrl, { failOnStatusCode: false });
})

When('{string} is searched', (product) => {
    searchProduct(product);
})

And('Product is choosed {string}{string}', (buttonTitle, productDetails) => {
    pickProduct(buttonTitle, productDetails)
})

And('Sellers are choosed', () => {
    shoppingTime()
})

And('Click to basket', () => {
    cartControl()
})

Then('Choosen products should be list to sellers', () => {
    productControl()
})