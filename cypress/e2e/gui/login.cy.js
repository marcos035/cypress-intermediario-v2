/// <reference types="Cypress" />



describe('Login', () => {
  it('testando a funcionalidade de login = successfully', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })

  it.only('Testando a funcionalidade de logout',()=>{
  
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')

    cy.logout()

    cy.get("[data-qa-selector='sign_in_button']")
    .should("[data-qa-selector='sign_in_button']", 'be.visible')
    
    
    .should("[data-qa-selector='sign_in_button']", '')

    
  })






}) 
