import Cookie from "../Pages/Cookie"
import Header from "../Pages/Header"
import ProductsPage from "../Pages/ProductsPage"
import VerifyPage from "../Pages/Verifypage"

describe('Check functionality of verify API page', function (){

const cookie =new Cookie
const header = new Header
const productspage = new ProductsPage
const verifypage = new VerifyPage

it('Open Homepage and decline cookie', () => {

    cy.visit('https://telnyx.com/')
    cy.url().should('eq','https://telnyx.com/')
    cookie.MouseclickXBtn()

})

it('Hover on Products Drop down list and click on see all products btn', () => {

header.MouseOverAndClickProductsDDmenuSeeAllProducts()
cy.url().should('eq','https://telnyx.com/products')

})

it('Scroll to view and find Verify API', () => {

productspage.ScrollIntoViewVerifyAPIBtn()
productspage.ClickVerifyAPIBtn()
cy.url().should('eq','https://telnyx.com/products/verify-api')

})

it('Scroll down and click on one of frequency Questions', () => {

   verifypage.ScrollTo5FQuestion()
   verifypage.ClickOn5FQuestion()
   cy.get('[aria-controls*=faq5]').should('have.attr','aria-expanded','true')

})

it('Scroll up and click on Device Authentication', () => {

 verifypage.ScroolToDeviceAuthentication()
 verifypage.ClickOnDeviceAuthentication()
 cy.url().should('eq','https://telnyx.com/use-cases/two-factor-authentication')

})

it('Go back to Verify API page', () => {

cy.visit('https://telnyx.com/products/verify-api')
cy.url().should('eq','https://telnyx.com/products/verify-api')

})

it('Click on Get Free Testing Credit', () => {

verifypage.ClickOnGetFreeTCard()
cy.url().should('eq','https://telnyx.com/sign-up');

})

})