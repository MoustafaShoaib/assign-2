const { cpSync } = require("fs");

describe('checkout an adidas item until the payment page', function () {
    beforeEach(() => {
        cy.clearCookies()
    })
    describe('adidas item will be added to unauthenicated user', function () {
        describe('checkout Happy Flows', function () {
            it('reach payment page with authenicated user', function () {
                cy.homePage();
                cy.sigin();
                cy.login("shoeib.mostafa@gmail.com","123456789");
                cy.addAproductToShoppingCart();
                cy.ShippingAddress("moustafa","shoaib","shoeib.mostafa@gmail.com","611820729","1062HJ","29")
                cy.continueToPay();
            })
        });
    });
});