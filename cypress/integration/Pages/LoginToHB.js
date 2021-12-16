
export function loginToHB(username, password) {


    cy.get("#myAccount").realHover(username, password);
    cy.wait(4000)

    cy.get('a#login')
        .should('have.text', 'Giriş Yap')
        .click();

    //username
    cy.get('#txtUserName').type(username);
    cy.get('#btnLogin').click();

    //password
    cy.get('input#txtPassword')
        .click()
        .type(password)
        .wait(4000);
    cy.get('#btnEmailSelect').click();

}
