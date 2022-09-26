class Homepage{

FillEmailInputLine(){

    cy.get('[name="email"]')
    .type('valddlav11@gmail.com')

}
ClickOnTryForFreeBtn(){

    cy.get('[type="submit"]>span')
    .click()
     }
}
export default Homepage