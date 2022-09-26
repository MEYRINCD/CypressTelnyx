class Header {

 MouseoverAndClickProductsDDmenuGlobalNumbers(){
    cy.get('.bjOBlW>a[href="/products/phone-numbers"]').invoke('show').click({ force: true })
    
 }
 MouseClickOnJoinTheWaitlistUrlText(){
    cy.get('span.eOkMfg>div>span>a')
    .click()

 }
MouseClickOnLogInBtn(){
cy.get('div.biNvWx>a.blLdCs[href*=portal]')
.click()

}
MouseClickOnTalkToAnExpertBtn(){
    cy.get('ul.hhCIhu>li>div>[href*="us"]')
    .click()

}
MouseClickOnLogoBtn(){
cy.get('.fkpNi')
.click()

}

MouseOverAndClickProductsDDmenuSeeAllProducts(){

cy.get('.ftReEQ [href="/products"]').invoke('show').click({ force: true})

}

MouseOverAndClickSolutionsDDmenuSMSCustomer(){

cy.get('.fVDMEa[href*=sms-customer-service]').invoke('show').click({force: true})

}

MouseOverAndClickCompanyDDmenuAboutTelnyx(){

cy.get('.bjOBlW [href*=about]').invoke('show').click({force: true})

}
MouseOVerAndClickCompanyDDmenuCareers(){

cy.get('.bjOBlW [href*=careers]').invoke('show').click({force: true})

}

MouseOverAndClickCompanyDDmenuPartners(){

cy.get('.bjOBlW [href*=partnerships]').invoke('show').click({force: true})

}

MouseOverAndClickCompanyDDmenuIntergrations(){

cy.get('.bjOBlW [href="/integrations"]').invoke('show').click({force: true})

}

ClickOnNetworkBtn(){

cy.get('.gdETaM [href*=global-ip-network]')
.click()

}

HoverMouseAndClickOnFaxBtn(){

cy.get('[href="/pricing/fax"]').invoke('show').click({force: true})

}

HoverMouseAndClickSavingCalBtn(){

cy.get('[href="/twilio-pricing-calculator"]').invoke('show').click({force: true})

}

}
export default Header
