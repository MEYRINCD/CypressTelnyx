import Cookie from "../Pages/Cookie"
import Header from "../Pages/Header"
import Network from "../Pages/Network"

describe('Check functionality of Global-ip-network page', function () {

    const cookie = new Cookie
    const header = new Header
    const network = new Network

    it('Open Homepage and decline cookie', () => {

        cy.visit('https://telnyx.com/')
        cy.url().should('eq','https://telnyx.com/')
        cookie.MouseclickXBtn()
    
    })

    it('Click on Nework button at header', () => {
        
     header.ClickOnNetworkBtn()
     cy.url().should('eq','https://telnyx.com/solutions/global-ip-network')

    })

    it('Scroll to Competitor Network button and click on it', () => {

     network.ScrollToCompetitorNetBtn()
     network.ClickOnCompetitorNetBtn()
     cy.get('#content-2IXQpgM9HStNH0WnUUiWCw').should('have.attr','aria-hidden','false')

    })

    it('Scroll to See our pricing button and click on it', () => {

network.ScrolltoSeeOutPricingBtn()
network.ClickOnSeeOurPricingBtn()
cy.url().should('eq','https://telnyx.com/pricing')

    })

    it('Go back to Network page', () => {

cy.visit('https://telnyx.com/solutions/global-ip-network')
cy.url().should('eq','https://telnyx.com/solutions/global-ip-network')

    })

    it('Scroll to Explore Button and click on it', () => {

network.ScrollToExploreVoiceBtn()
network.ClickOnExploreVoiceBtn()
cy.url().should('eq','https://telnyx.com/products/voice-api')

    })

    it('Go back to Network page', () => {

        cy.visit('https://telnyx.com/solutions/global-ip-network')
        cy.url().should('eq','https://telnyx.com/solutions/global-ip-network')

    })

    it('Scroll to Explore Messaging button anc click on it', () => {

network.ScrollToExploreMessagingBtn()
network.ClickOnExploreMessagingBtn()
cy.url().should('eq','https://telnyx.com/products/sms-api')

    })

    it('Go back to Network page', () => {

        cy.visit('https://telnyx.com/solutions/global-ip-network')
        cy.url().should('eq','https://telnyx.com/solutions/global-ip-network')

    })

    it('Scroll to Explore VXCs button and click on it', () => {

network.ScrollToExploreVXCsBtn()
network.ClickOnExploreVXCsBtn()
cy.url().should('eq','https://telnyx.com/products/virtual-cross-connects')

    })

    it('Go back to Network page', () => {

        cy.visit('https://telnyx.com/solutions/global-ip-network')
        cy.url().should('eq','https://telnyx.com/solutions/global-ip-network')

    })


    it('Scroll to comments and click on right arrow', () => {

network.ScrollToRightArrow()
network.ClickOnRightArrow()
cy.get('div>ul>li:nth-child(2)[class*=fCiTXY]').should('have.attr','aria-hidden','false')


    })
    
it('Scroll to FAQ2 and click on it', () => {

network.ScrollToFAQ2()
network.ClickOnFAQ2()
cy.get('[aria-controls="faq2_description"]').should('have.attr','aria-expanded','true')

})

it('Click again on chosen FAQ', () => {

network.ClickOnFAQ2()
cy.get('[aria-controls="faq2_description"]').should('have.attr','aria-expanded','false')

})

})