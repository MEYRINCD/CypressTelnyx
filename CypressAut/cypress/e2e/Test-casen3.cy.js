import Header from "../Pages/Header"
import StoragePage from "../Pages/Storage"
import WaitlistForm from "../Pages/WaitlistForm"
import Cookie from "../Pages/Cookie"

describe('Joining Waitlist', function (){
    const header = new Header()
    const storagepage = new StoragePage()
    const waitlistform = new WaitlistForm()
    const cookie = new Cookie()

it('Open homepage', () => {

    cy.visit('https://telnyx.com/')
    cy.url().should('eq','https://telnyx.com/')

})

it('Decline cookies', () => {

    cookie.MouseclickXBtn()

})

it('Click on Join the waitlist url text', () =>  {

header.MouseClickOnJoinTheWaitlistUrlText()
cy.url().should('eq','https://telnyx.com/products/storage')

})

it('Click on Join the waitlist btn', () => {

storagepage.ClickOnJoinTheWaitListBtn()
cy.url().should('eq','https://telnyx.com/products/storage#form')

})

it('Fill First Name input line', () => {

    waitlistform.FillFirstNameInputLine()
    cy.get('#FirstName')
    .should('have.attr','aria-invalid','false')

})

it('Fill Last Name Input Line', () => {

 waitlistform.FillLastNameInputLine()
 cy.get('#LastName')
 .should('have.attr','aria-invalid','false')

})

it('Fill Business Email Input LIne', () => {

waitlistform.FillBusinessEmailInputLine()
cy.get('#Email')
.should('have.attr','aria-invalid','false')

})

it('Fill What would Input Line', () => {

waitlistform.FillWhatWouldInputLine()
cy.get('#Email')
.should('have.attr','aria-invalid','false')

})

it('Should click on Check Box', () => {

waitlistform.ClickOnReceiveMailCheckBox()
cy.get('.mktoFieldWrap .mktoField[type="checkbox"]')
.should('be.checked')

})

it('should click on Submit Button', () => {

waitlistform.ClickOnSubmitBtn()
cy.url().should('eq','https://telnyx.com/products/storage-waitlist')

})

})
