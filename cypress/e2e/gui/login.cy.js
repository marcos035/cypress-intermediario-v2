/// <reference types="Cypress" />


describe('Login', () => {
  it('testando a funcionalidade de login = successfully', () => {
    cy.login()
    cy.visit('/')

    cy.get('.qa-user-avatar').should('be.visible')
  })
}) 
