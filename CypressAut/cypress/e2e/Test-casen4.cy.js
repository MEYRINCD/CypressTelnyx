import Homepage from "../Pages/Homepage"
import Cookie from "../Pages/Cookie"

describe('Check functionality of Email form at homepage', function (){

const homepage = new Homepage
const cookie = new Cookie

it('Open homepage and decline cookie', () => {

    cy.visit('https://telnyx.com/')
    cy.url().should('eq','https://telnyx.com/')
    cookie.MouseclickXBtn()

})

it('Fill Email Input Line', () => {

homepage.FillEmailInputLine()
cy.get('[name="email"]').should('have.attr','value','valddlav11@gmail.com')

})

it('should click on Try on free button', () => {

homepage.ClickOnTryForFreeBtn()
    cy.url().should('eq','https://telnyx.com/sign-up?email=valddlav11@gmail.com')


})

})