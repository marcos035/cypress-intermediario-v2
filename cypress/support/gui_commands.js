

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
Cypress.Commands.add('criarIssue',(name,title,description)=>{

  // cy.visit(`${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${name}`)
  cy.visit(`/${Cypress.env('user_name')}/${name}/issues/new`)
  // cy.get('.shortcuts-issues').click()
  // cy.get('#new_issue_link').contains('New issue').click()

  cy.get('#issue_title').type(title)
  cy.get('#issue_description').type(description)
  cy.get('input[class="btn btn-success qa-issuable-create-button"]').click()

})
Cypress.Commands.add('gui_setLabelOnIssue', label => {
  cy.get('.qa-edit-link-labels').click()
  cy.contains(label.name).click()
  cy.get('body').click()
})