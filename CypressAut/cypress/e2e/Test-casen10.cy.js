import Cookie from "../Pages/Cookie"
import Header from "../Pages/Header"
import PricingCalculator from "../Pages/Pricingcalculator"

describe('Check functionality of pricing calculator page and elements', function (){

    const cookie = new Cookie
    const header = new Header
    const pricingcalc = new PricingCalculator

    it('Open Homepage and decline cookie', () => {

        cy.visit('https://telnyx.com/')
        cy.url().should('eq','https://telnyx.com/')
        cookie.MouseclickXBtn()
    
    })

    it('Hover mouse on Resources DD menu and click on Saving calculator button', () => {

header.HoverMouseAndClickSavingCalBtn()
cy.url().should('eq','https://telnyx.com/twilio-pricing-calculator')

    })

    it('Scroll and click on Messaging API and Voice API btns', () => {

pricingcalc.ScrollToMessagingAPIBtn()
pricingcalc.ClickOnMessagingAPIBtn()
pricingcalc.ClickOnVoiceAPIBtn()


    })

    it('Click on Continue Btn', () => {

pricingcalc.ClickOnContinueBtn()
cy.get('.cTxamq').should('have.text','How many phone numbers do you use?')

    })

    it('Input value 2000 in Local numbers input line',() => {

pricingcalc.InputLocalNumbersInputLine()
pricingcalc.LocalNumbersENTERkey()


    })

    it('Click on + and - buttons at Local Numbers input line',() => {

pricingcalc.PressPlusButtonLocalNumbers()
pricingcalc.PressMinusBtnLocalNumbers()
cy.get('#local-numbers').should('have.attr','value','2000')

    })


    it('Input value 2500 in Toll-numbers input line', () => {

pricingcalc.InputTollFreeNumbersInputLine()


    })


    it('Click on + and - buttons at Toll-Free numbers input line',()=>{

pricingcalc.PressPlusButtonTollFree()
pricingcalc.PressMinusBtnTollFree()
cy.get('#toll-free-numbers').should('have.attr','value','2500')

    })


    it('Click on continue button',() => {

        pricingcalc.ClickOnContinueBtn()
                
    })


    it('Input value 30000 in Send SMS input Line', () => {

pricingcalc.InputInSendSMSInputLine()
        
    })

    it('Click on + and - buttons at Send SMS', () => {

     pricingcalc.ClickOnPlusSendSMSBtn()
     pricingcalc.ClickOnMinusSendSMSBtn()
     cy.get('#send-sms').should('have.attr','value','30000')

    })


    it('Input value 40000 in Receive Inboud calls...',() => {

pricingcalc.InputInReceiveInboundCallsIL()

    })

    it('Click on + and - buttons at Receive Inboud calls...',() => {

pricingcalc.ClickOnPlusReceiveInboundCalls()
pricingcalc.ClickOnMinusReceiveInboundCalls()
cy.get('#receive-inbound-calls-with-call-control').should('have.attr','value','40000')

    })

it('Click on Try for free Telnyx btn',() => {

pricingcalc.ClickOnTryForFreeBtn()
cy.url().should('eq','https://telnyx.com/sign-up')
    
})

})