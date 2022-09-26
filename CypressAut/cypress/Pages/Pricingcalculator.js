class PricingCalculator{

ScrollToMessagingAPIBtn(){

cy.get('.fkuRxe div:nth-child(1)')
.scrollIntoView()

}

ClickOnMessagingAPIBtn(){

cy.get('.fkuRxe div:nth-child(1)')
.click()

}

ClickOnVoiceAPIBtn(){

cy.get('[alt="voice api"]')
.click()

}

ClickOnContinueBtn(){

cy.get('.gMRGHv .hBNXWZ')
.click()

}


InputLocalNumbersInputLine(){

cy.get('#local-numbers')
.clear()
.type('200')

}

LocalNumbersENTERkey(){

cy.get('#local-numbers').type('{enter}')

}

PressPlusButtonLocalNumbers(){

cy.get('.jVrZQH div:nth-child(1) .gTMYjT>.SNUDP>.dyjmeu:nth-child(3)')
.click()

}

PressMinusBtnLocalNumbers(){

cy.get('.jVrZQH div:nth-child(1) .gTMYjT>.SNUDP>.dyjmeu:nth-child(1)')
.click()

}

InputTollFreeNumbersInputLine(){

cy.get('#toll-free-numbers')
.clear()
.type('250')

}

PressPlusButtonTollFree(){

cy.get('.jVrZQH div:nth-child(2) .gTMYjT>.SNUDP>.dyjmeu:nth-child(3)')
.click()

}

PressMinusBtnTollFree(){

cy.get('.jVrZQH div:nth-child(2) .gTMYjT>.SNUDP>.dyjmeu:nth-child(1)')
.click()

}


InputInSendSMSInputLine(){

cy.get('#send-sms')
.clear()
.type('3000')

}

ClickOnPlusSendSMSBtn(){

cy.get('.dYsOSq:nth-child(1) .eOMKVt div:nth-child(2) .SNUDP>.dyjmeu:nth-child(3)')
.click()

}

ClickOnMinusSendSMSBtn(){

cy.get('.dYsOSq:nth-child(1) .eOMKVt div:nth-child(2) .SNUDP>.dyjmeu:nth-child(1)')
.click()

}

InputInReceiveInboundCallsIL(){

cy.get('#receive-inbound-calls-with-call-control')
.clear()
.type('4000')

}

ClickOnPlusReceiveInboundCalls(){

cy.get('.dYsOSq:nth-child(2) .eOMKVt div:nth-child(2) .SNUDP>.dyjmeu:nth-child(3)')
.click()

}


ClickOnMinusReceiveInboundCalls(){

cy.get('.dYsOSq:nth-child(2) .eOMKVt div:nth-child(2) .SNUDP>.dyjmeu:nth-child(1)')
.click()

}

ClickOnTryForFreeBtn(){

cy.get('.dSfmPD [href="/sign-up"]')
.click()

}


}
export default PricingCalculator