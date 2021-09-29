class orderPage {
    oneYearContract() {
        cy.get('#app > div.container > div > div.col-lg-8 > form > div.commitments.my-3 > label:nth-child(1) > span').click();
        return cy.get('#start_m12 > div.radio').click();
    }

    toOrder() {
        return cy.get('#app > div.container > div > div.col-lg-8 > form > div.my-3.btn-toolbar.justify-content-between > a')
    }

    requestNewPhoneNumber() {
        return cy.get('#app > div.container.mt-4 > div > div.col-lg-8 > form > fieldset.active > div > div > div:nth-child(1)').click();
    }
}

export default orderPage