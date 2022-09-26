import Header from "../Pages/Header";
import Cookie from "../Pages/Cookie";

describe("Check functionality of header elements test", function (){

const header = new Header()
const cookie = new Cookie()

it('Open telnyx page', () => {

cy.visit('https://telnyx.com/')
cy.url().should('eq','https://telnyx.com/')
})

it('click on X button and verify url', () => {

    cookie.MouseclickXBtn()
    cy.location('protocol').should('eq','https:')
    cy.url().should('eq','https://telnyx.com/')

})

it('Hover mouse on Products menu and click on Global numbers button', () => {

header.MouseoverAndClickProductsDDmenuGlobalNumbers()
cy.url().should('eq','https://telnyx.com/products/phone-numbers')

})
it('click on Join The Waitlist url text', () => {

    header.MouseClickOnJoinTheWaitlistUrlText()
    cy.url().should('eq','https://telnyx.com/products/storage')

})

it('click on Log in Btn and go back to homepage', () => {

header.MouseClickOnLogInBtn()
cy.url().should('eq','https://portal.telnyx.com/#/login/sign-in')
cy.visit('https://telnyx.com/')
cy.url().should('eq','https://telnyx.com/')

})
it('click on Talk to an expert button ', () => {

header.MouseClickOnTalkToAnExpertBtn()
cy.url().should('eq','https://telnyx.com/contact-us')

})
it('click on Logo button', () => {

   header.MouseClickOnLogoBtn()
   cy.url().should('eq','https://telnyx.com/')

})

})