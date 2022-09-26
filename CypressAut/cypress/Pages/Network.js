class Network{

ScrollToCompetitorNetBtn(){

cy.get('#tab-2IXQpgM9HStNH0WnUUiWCw')
.scrollIntoView()

}

ClickOnCompetitorNetBtn(){

    cy.get('#tab-2IXQpgM9HStNH0WnUUiWCw')
    .click()

}

ScrolltoSeeOutPricingBtn(){

cy.get('.eKznVb [href="/pricing"]')
.scrollIntoView()

}

ClickOnSeeOurPricingBtn(){

    cy.get('.eKznVb [href="/pricing"]')
    .click()

}

ScrollToExploreVoiceBtn(){

cy.get('.eKznVb [href*=voice-api]')
.scrollIntoView()

}


ClickOnExploreVoiceBtn(){

    cy.get('.eKznVb [href*=voice-api]')
    .click()

}

ScrollToExploreMessagingBtn(){

cy.get('.eKznVb [href*=sms-api]')
.scrollIntoView()

}


ClickOnExploreMessagingBtn(){

    cy.get('.eKznVb [href*=sms-api]')
    .click()

}


ScrollToExploreVXCsBtn(){

cy.get('.eKznVb [href*=virtual-cross-connects]')
.scrollIntoView()

}

ClickOnExploreVXCsBtn(){

    cy.get('.eKznVb [href*=virtual-cross-connects]')
    .click()

}

ScrollToRightArrow(){

cy.get('[aria-label="Next Item"]')
.scrollIntoView()

}

ClickOnRightArrow(){

cy.get('[aria-label="Next Item"]')
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


}
export default Network