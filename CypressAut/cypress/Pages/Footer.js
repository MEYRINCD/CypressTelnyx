class Footer {

ScrollIntoViewFooter(){
cy.get('.fwhIL [href*="request"]')
.scrollIntoView()

}

ClickOnWhatsAppAPIBtn(){

cy.get('.fwhIL [href*="whatsapp-api"]')
.click()

}
ClickOnBlogBtn(){
cy.get('.fwhIL [href="/resources"]')
.click()

}

ClickOnSmsApiPricingBtn(){

    cy.get('.fwhIL [href*="messaging"]')
    .click()

}

ClickOnReportAbuseBtn(){

cy.get('.fwhIL [href*="abuse"]')
.click()

}

ClickOnLogInBtn(){

cy.get('.fwhIL [href*="portal.telnyx.com/"]')
.click()

}

ClickOnFollowOnTwitterBtn(){

cy.get('.fwhIL [href*="twitter.com/telnyx"]')
.click()

}

}
export default Footer