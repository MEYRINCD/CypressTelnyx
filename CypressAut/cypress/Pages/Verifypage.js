class Verifypage{

ScrollTo5FQuestion(){

    cy.get('[aria-controls*=faq5]')
    .scrollIntoView()

}

ClickOn5FQuestion(){

cy.get('[aria-controls*=faq5]')
.click()

}

ScroolToDeviceAuthentication(){

cy.get('[href*=two-factor-authentication]')
.scrollIntoView()

}

ClickOnDeviceAuthentication(){

cy.get('[href*=two-factor-authentication]')
.click()

}

ClickOnGetFreeTCard(){

cy.get('.jnwLUb [href="/sign-up"]')
.click()

}

}
export default Verifypage