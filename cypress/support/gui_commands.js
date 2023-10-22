

Cypress.Commands.add('login', (user = Cypress.env('user_name'),password = Cypress.env('user_password'),) => {
    const login = () => {

      cy.session([user, password],()=>{
        cy.visit('/users/sign_in')
      cy.get("[data-qa-selector='login_field']").type(user)
      cy.get("[data-qa-selector='password_field']").type(password, { log: false })
      cy.get("[data-qa-selector='sign_in_button']").click()

      })
      
    }
  
    login()
  })
  
  Cypress.Commands.add('logout',()=>{
    cy.get('a[class="header-user-dropdown-toggle"]').click()
    cy.get('a[class="sign-out-link"]').click()

  })

  Cypress.Commands.add('gui_createProject',(name,description)=>{

    cy.visit('/projects/new')
    cy.get('#project_name').type(name)
    cy.get('#project_description').type(description)
    cy.get('#blank-project-pane > #new_project > .visibility-level-setting > :nth-child(3) > #project_visibility_level_20')
    .check()
    cy.get('#project_initialize_with_readme').check()
    cy.contains('Create project').click()
})

