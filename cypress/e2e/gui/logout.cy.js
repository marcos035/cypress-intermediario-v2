/// <reference types="Cypress" />


describe('Login', () => {
 
    beforeEach(()=>{
      cy.login()
      cy.visit('/')
      

    })

  it.only('Testando a funcionalidade de logout',()=>{
  
    cy.logout()

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
      
  })
}) 
