class ProductsPage{

ScrollIntoViewVerifyAPIBtn(){

cy.get('.dIcyeF [href*=verify-api]')
.scrollIntoView()

}

ClickVerifyAPIBtn(){

cy.get('.dIcyeF [href*=verify-api]')
.click()

}


}
export default ProductsPage