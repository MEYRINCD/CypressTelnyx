import Cookie from "../Pages/Cookie"
import Header from "../Pages/Header"
import Fax from "../Pages/Fax"

describe('Check functionality of Fax pricing page and elements test', function () {

    const cookie = new Cookie
    const header = new Header
    const fax = new Fax

    it('Open Homepage and decline cookie', () => {

        cy.visit('https://telnyx.com/')
        cy.url().should('eq','https://telnyx.com/')
        cookie.MouseclickXBtn()
    
    })

    it('Hover mouse on Pricing DD menu and click on Fax button', () => {

header.HoverMouseAndClickOnFaxBtn()
cy.url().should('eq','https://telnyx.com/pricing/fax')

    })

    it('Click on DD menu and choose EUR', () => {

fax.ClickOnDropdownMenu()
fax.ClickOnEURoption()
cy.get('.cvfxOh :nth-child(4)').should('have.attr','aria-selected','true')

    })

    it('Hover mouse on Info icon',() => {
fax.ScrollToSignUpAndStartBuildingBTn()
fax.HoverMouseOnInfoIcon()
cy.get('#nocSupport').should('have.attr','aria-hidden','false')

    })

    it('Click on Sign up and start building',() => {

fax.ScrollToSignUpAndStartBuildingBTn()
fax.ClickOnSignUpAndStartBuildingBtn()
cy.url().should('eq','https://telnyx.com/sign-up')

    })


    it('Go back to pricing fax page',() => {

cy.visit('https://telnyx.com/pricing/fax')
cy.url().should('eq','https://telnyx.com/pricing/fax')

    })

    it('Scroll and click on Talk to sales', () => {

fax.ScrollToTalkToSalesBtn()
fax.ClickOnTalkToSalesBtn()
cy.url().should('eq','https://telnyx.com/contact-us')


    })

})