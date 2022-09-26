import Cookie from "../Pages/Cookie"
import Header from "../Pages/Header"

describe('Check functionality of header Company Drop-down menu', function (){

    const cookie = new Cookie
    const header = new Header

    it('Open Homepage and decline cookie', () => {

        cy.visit('https://telnyx.com/')
        cy.url().should('eq','https://telnyx.com/')
        cookie.MouseclickXBtn()
    
    })

    it('Hover mouse on Company drop-down list and click about Telnyx button', () =>{

header.MouseOverAndClickCompanyDDmenuAboutTelnyx()
cy.url().should('eq','https://telnyx.com/company/about')

    })

    it('Hover mouse on Company drop-down list and click Careers button', () =>{

header.MouseOVerAndClickCompanyDDmenuCareers()
cy.url().should('eq','https://telnyx.com/company/careers')

    })

    it('Hover mouse on Company drop-down list and click Partners button', () =>{

      header.MouseOverAndClickCompanyDDmenuPartners()
      cy.url().should('eq','https://telnyx.com/company/partnerships')  

    })
    it('Hover mouse on Company drop-down list and click Intergrations button', () =>{

    header.MouseOverAndClickCompanyDDmenuIntergrations()
    cy.url().should('eq','https://telnyx.com/integrations')

    })
})