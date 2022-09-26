import Cookie from "../Pages/Cookie";
import Footer from "../Pages/Footer"

describe('Check functionality of footer elements test', function(){

    const cookie = new Cookie()
    const footer = new Footer()


it('Open telnyx page', () => {

    cy.visit('https://telnyx.com/')
    cy.url().should('eq','https://telnyx.com/')
    })

it('Decline cookies', () => {

    cookie.MouseclickXBtn()

})

it('Scroll to footer,click on WhatsApp API button', () => {

footer.ScrollIntoViewFooter()
footer.ClickOnWhatsAppAPIBtn()
cy.url().should('eq','https://telnyx.com/products/whatsapp-api')

})

it('Scroll to footer, click on Blog button', () => {

    footer.ScrollIntoViewFooter()
    footer.ClickOnBlogBtn()
    cy.url().should('eq','https://telnyx.com/resources')

})

it('Scroll to footer, click on SMS API Pricing Btn', () => {

    footer.ScrollIntoViewFooter()
    footer.ClickOnSmsApiPricingBtn()
    cy.url().should('eq','https://telnyx.com/pricing/messaging')

})

it('Scroll to footer, click on Report Abuse Btn', () => {

    footer.ScrollIntoViewFooter()
    footer.ClickOnReportAbuseBtn()
    cy.url().should('eq','https://telnyx.com/report-abuse')
    
})

it('Should visit go back to homepage', () => {

cy.visit('https://telnyx.com/')
cy.url().should('eq','https://telnyx.com/')

})

it('Scroll to footer, click Log in Btn', () => {

    footer.ScrollIntoViewFooter()
    footer.ClickOnLogInBtn()
    
})

it('Should visit go back to homepage', () => {

    cy.visit('https://telnyx.com/')
    cy.url().should('eq','https://telnyx.com/')
    
    })

    it('Scroll to footer, click Follow on Twitter', () => {

        footer.ScrollIntoViewFooter()
        footer.ClickOnFollowOnTwitterBtn()
        

    })

})