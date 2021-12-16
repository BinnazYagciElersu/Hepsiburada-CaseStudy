import { addHeader, postXhr, xhrIgnore } from "../../Helpers/helpers"
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { searchProduct } from "../../Pages/SearchProduct";
import { pickProduct } from "../../Pages/ProductPick";
import { shoppingTime } from "../../Pages/Sellers";
import { cartControl } from "../../Pages/GotoBasket";
import { productControl } from "../../Pages/SellerValidation";
import { loginToHB } from "../../Pages/LoginToHB";


beforeEach(function () {
    xhrIgnore();
    addHeader();
    postXhr();
})

Given('Hepsiburada is opened', () => {
    cy.visit(Cypress.config().baseUrl, { failOnStatusCode: false });
})

When('Login with {string} and {string}', (username, password) => {
    loginToHB(username, password)
})

And('User searches {string}', (product) => {
    searchProduct(product);
})

And('User chooses product {string}{string}', (buttonTitle, productDetails) => {
    pickProduct(buttonTitle, productDetails)
})

And('Sellers are clicked', () => {
    shoppingTime()
})

And('User goes to cart', () => {
    cartControl()
})

Then('Choosen products should be list to cart', () => {
    productControl()
})