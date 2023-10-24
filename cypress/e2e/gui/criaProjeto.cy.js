/// <reference types="Cypress" />
import {faker} from '@faker-js/faker'

describe('Testando a funcionalidade de criação de projeto',()=>{

    beforeEach(()=>{
         cy.api_deleteProjects()
        cy.login()
     
    })

    it.only('Criando um projeto',function (){

        const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(12),
            
        }
        const veryText= Cypress._.repeat('texto test','15');
       
        cy.gui_createProject(project.name, project.description)

        cy.url().should('be.equal',`${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`) 
        cy.contains(project.description).should('be.visible')       
        cy.contains(project.name).should('be.visible')       
    })
})

      

