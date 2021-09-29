import orderPage from "../pageObject/orderPage";

Cypress.Commands.add("homePage", () => {
	cy.visit("https://www.otrium.com/");
});

Cypress.Commands.add("sigin", () => {
	cy.visit("https://www.otrium.com/sign-in");
});

Cypress.Commands.add("login", (email, password) => {
	cy.get(
		"#__next > div > div > div.css-1cow8i0 > div > div.css-9bopg6 > div.css-ltt8ra > div > form > input"
	).clear();
	cy.get(
		"#__next > div > div > div.css-1cow8i0 > div > div.css-9bopg6 > div.css-ltt8ra > div > form > input"
	).type(email);

	cy.get(
		"#__next > div > div > div.css-1cow8i0 > div > div.css-9bopg6 > div.css-ltt8ra > div > form > div.css-15owl46 > input"
	).clear();
	cy.get(
		"#__next > div > div > div.css-1cow8i0 > div > div.css-9bopg6 > div.css-ltt8ra > div > form > div.css-15owl46 > input"
	).type(password);
	cy.get(
		"#__next > div > div > div.css-1cow8i0 > div > div.css-9bopg6 > div.css-ltt8ra > div > form > div.css-1g1x2nw > button"
	).click();
});

Cypress.Commands.add("addAproductToShoppingCart", () => {
	cy.get(":nth-child(3) > [data-testid=regular-menu-item]").click();
	cy.get("[data-testid=search-label-all-brands] > .css-dxyfrk > span").click();
	cy.get(
		"[data-testid=search-letters-list-all-brands] > :nth-child(2)"
	).click();
	cy.get('[href="/sales/men/adidas"] > .css-y5ih86 > :nth-child(1) > .css-4cffwv > .css-ltci4').click();
	cy.get(
		":nth-child(1) > .ProductCard__link > .ProductCard__photoContainer > :nth-child(1) > .css-155fnzs > .css-4skrsu > .skeleton"
	).click();
	cy.get(".default").click();
	cy.get(
		"#__next > div > div > div.Page__container > div > div:nth-child(1) > div.ProductView__productDetails.css-1fq3rhf > div.ProductView__productSidebar > div.ProductView__productOrder.css-cmp48 > div.ProductOrder__size > div > div.visible.menu.transition > div.selected.item > div"
	).click();
	cy.get("[data-testid=product-order-button]").click();
    cy.get('[data-testid=order-now-button]').click();
    cy.get('.cart-page-title > .wc-proceed-to-checkout > .proceed-to-checkout').click();
});

Cypress.Commands.add("continueToPay", () => {
	cy.get('#step3 > .checkout-btn-cnt-new').click();
	cy.get('#step3 > .checkout-btn-cnt-new').click();
});

Cypress.Commands.add("ShippingAddress", (firstName,lastName,email,phone,postCode,houseNumber) => {
	cy.get('#shipping_first_name').click();
	cy.get('#shipping_first_name').clear();
	cy.get('#shipping_first_name').type(firstName);

	cy.get('#shipping_last_name').click();
	cy.get('#shipping_last_name').clear();
    cy.get('#shipping_last_name').type(lastName);

	cy.get('#shipping_email').click();
	cy.get('#shipping_email').clear();
	cy.get('#shipping_email').type(email);

	cy.get('#shipping_email_repeat').click();
	cy.get('#shipping_email_repeat').clear();
	cy.get('#shipping_email_repeat').type(email);

	cy.get('#shipping_phone').click();
	cy.get('#shipping_phone').clear();
	cy.get('#shipping_phone').type(phone);

	cy.get('#shipping_postcode').click();
	cy.get('#shipping_postcode').clear();
	cy.get('#shipping_postcode').type(postCode);

	cy.get('#shipping_house_number').click();
	cy.get('#shipping_house_number').clear();
	cy.get('#shipping_house_number').type(houseNumber)



});
