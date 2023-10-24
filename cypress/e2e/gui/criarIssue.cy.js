/// <reference types="Cypress" />
import {faker} from '@faker-js/faker'

describe('Testando a funcionalidade de criação de projeto',()=>{

    const issue = {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(12),
        title: faker.company.name()
     
    }
    
    beforeEach(()=>{
      cy.api_deleteProjects()
        cy.login()
        cy.gui_createProject(issue.name, issue.description)
       

    })

    it('Criando um projeto',function (){

        cy.criarIssue(issue.name, issue.description, issue.title)

        
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${issue.name}/issues/1`)
        cy.contains(issue.title).should('be.visible')
    })

})

