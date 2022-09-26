class SMSCustomerServicePage{

ScrolltoCustomerSSMStitle(){

cy.get('.kJbTRv>div>div>header>h2')
.scrollIntoView()

}

ScrollToSMScapableGNsBlock(){

cy.get('.hNhQXn [href*=phone-numbers]')
.scrollIntoView()

}

ClickOnSMScapableGNsBlock(){

cy.get('.hNhQXn [href*=phone-numbers]')
.click()

}

ScrollToTelnyxForContractblock(){

cy.get('.kwRiFd [href*=first-contact-center-platform]')
.scrollIntoView()

}

ClickOnTelnyxForContractblock(){

cy.get('.kwRiFd [href*=first-contact-center-platform]')
.click()

}

ScrollToFAQ2(){

cy.get('[aria-controls="faq2_description"]')
.scrollIntoView()

}

ClickOnFAQ2(){

    cy.get('[aria-controls="faq2_description"]')
    .click()

}

ScrollToTryItBtn(){

cy.get('.bgmPIp [href="/sign-up"]')
.scrollIntoView()

}

ClickOnTyItBtn(){

cy.get('.bgmPIp [href="/sign-up"]')
.click()

}

}

export default SMSCustomerServicePage