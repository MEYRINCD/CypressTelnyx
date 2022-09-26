import Cookie from "../Pages/Cookie"
import Header from "../Pages/Header"
import SMSCustomerServicePage from "../Pages/Sms-customer-servicepage"


describe('Check functionality of elements on SMS-customer-service', function (){

    const cookie =new Cookie
    const header = new Header
    const smscustservice = new SMSCustomerServicePage

    it('Open Homepage and decline cookie', () => {

        cy.visit('https://telnyx.com/')
        cy.url().should('eq','https://telnyx.com/')
        cookie.MouseclickXBtn()
    
    })

    it('Hover mouse on Solution drop-down menu and click SMS customer support button', () => {

     header.MouseOverAndClickSolutionsDDmenuSMSCustomer()
     cy.url().should('eq','https://telnyx.com/use-cases/sms-customer-service')
        
    })

     it('Should scroll to Customer Service SMS... title,and check it on visibility', () =>{

     smscustservice.ScrolltoCustomerSSMStitle()
     cy.get('.kJbTRv>div>div>header>h2').should('be.visible')

     })

     it('Scroll to SMS capable Global Numbers... block and click on learn more', () => {

    smscustservice.ScrollToSMScapableGNsBlock()
    smscustservice.ClickOnSMScapableGNsBlock()
    cy.url().should('eq','https://telnyx.com/products/phone-numbers')

     })


     it('Go back to sms-customer-page', () => {

     cy.visit('https://telnyx.com/use-cases/sms-customer-service')
     cy.url().should('eq','https://telnyx.com/use-cases/sms-customer-service')

     })


     it('Scroll to Telnyx for Contact Center SMS', () => {

     smscustservice.ScrollToTelnyxForContractblock()
     smscustservice.ClickOnTelnyxForContractblock()
     cy.url().should('eq','https://telnyx.com/resources/ebook-how-to-build-a-customer-first-contact-center-platform')

     })

     it('Go back to sms-customer-page', () => {

        cy.visit('https://telnyx.com/use-cases/sms-customer-service')
        cy.url().should('eq','https://telnyx.com/use-cases/sms-customer-service')
   
        })

     it('Scroll to FAQ and click on of questions', () => {

     smscustservice.ScrollToFAQ2()
     smscustservice.ClickOnFAQ2()
     cy.get('[aria-controls="faq2_description"]').should('have.attr','aria-expanded','true')

     })

     it('Scroll to Try it Free button', () => {

     smscustservice.ScrollToTryItBtn()
     smscustservice.ClickOnTyItBtn()
     cy.url().should('eq','https://telnyx.com/sign-up')
     

     })

})