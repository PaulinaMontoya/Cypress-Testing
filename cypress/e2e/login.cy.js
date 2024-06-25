describe('template spec', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Test case 1: Positive LogIn test', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('[data-test="title"]').contains('Products')
    cy.url().should('include', '/inventory')
  })

  it('Test case 2: Negative username is required error message', () => {
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('have.text','Epic sadface: Username is required')
  })

  it('Test case 3: Negative password is required error message', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('have.text','Epic sadface: Password is required')
  })

})