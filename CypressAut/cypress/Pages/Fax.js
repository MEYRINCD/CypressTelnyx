class Fax{

ClickOnDropdownMenu(){

cy.get('.cyquva')
.click()

}

ClickOnEURoption(){

cy.get('.cvfxOh :nth-child(4)')
.click()

}

HoverMouseOnInfoIcon(){

cy.get('.cYdohw')
.trigger('mouseover')

}

ScrollToSignUpAndStartBuildingBTn(){

cy.get('.exkRjO [href*=sign-up]')
.scrollIntoView()

}

ClickOnSignUpAndStartBuildingBtn(){

    cy.get('.exkRjO [href*=sign-up]')
    .click()

}

ScrollToTalkToSalesBtn(){

cy.get('.cZQSuZ [href="/contact-us"]')
.scrollIntoView()

}

ClickOnTalkToSalesBtn(){

cy.get('.cZQSuZ [href="/contact-us"]')
.click()

}

}
export default Fax