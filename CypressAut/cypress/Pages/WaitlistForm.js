class WaitlistForm{

FillFirstNameInputLine(){

cy.get('#FirstName')
.type('Darin')

}

FillLastNameInputLine(){

cy.get('#LastName')
.type('Gramatico')

}

FillBusinessEmailInputLine(){

cy.get('#Email')
.type('valddlav11@gmail.com')

}

FillWhatWouldInputLine(){

cy.get('#Form_Additional_Information__c')
.type('I love This Project!!')

}

ClickOnReceiveMailCheckBox(){

cy.get('#LblSubscription_Opt_In__c')
.click()

}

ClickOnSubmitBtn(){

cy.get('[type="submit"]')
.click()

}

}
export default WaitlistForm