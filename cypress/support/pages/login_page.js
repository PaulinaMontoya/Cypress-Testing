import { LOGIN_PAGE } from '../../fixtures/data';

export class LoginPage {

  constructor() {
    this.usernameInput = () => cy.get('[data-test="username"]')
    this.passwordInput = () => cy.get('[data-test="password"]')
    this.loginButton = () => cy.get('[data-test="login-button"]')
    this.errorMessage = () => cy.get('[data-test="error"]')
  }

  loginSuccessfully() {
    cy.login(LOGIN_PAGE.CORRECT_USER, LOGIN_PAGE.CORRECT_PASSWORD);
  }

  productsTitleAssertions() {
    this.productsTitle().contains(LOGIN_PAGE.TITLE);
    cy.url().should('include', '/inventory');
  }

  userNameErrorMessage() {
    this.passwordInput().type(LOGIN_PAGE.CORRECT_PASSWORD);
    this.loginButton().click();
  }

  userNameErrorMessageAssertion() {
    this.errorMessage().should('be.visible')
    this.errorMessage().should('have.text', LOGIN_PAGE.USER_ERROR_MESSAGE)
  }

  passwordErrorMessage() {
    this.usernameInput().type(LOGIN_PAGE.CORRECT_USER);
    this.loginButton().click();
  }

  passwordErrorMessageAssertion() {
    this.errorMessage().should('be.visible')
    this.errorMessage().should('have.text', LOGIN_PAGE.PASSWORD_ERROR_MESSAGE)
  }

  productsTitleAssertions() {
    this.productsTitle().contains(LOGIN_PAGE.TITLE);
    cy.url().should('include', '/inventory');
  }

  userNameErrorMessage() {
    this.passwordInput().type(LOGIN_PAGE.CORRECT_PASSWORD);
    this.loginButton().click();
  }

  userNameErrorMessageAssertion() {
    this.errorMessage().should('be.visible')
    this.errorMessage().should('have.text', LOGIN_PAGE.USER_ERROR_MESSAGE)
  }

  passwordErrorMessage() {
    this.usernameInput().type(LOGIN_PAGE.CORRECT_USER);
    this.loginButton().click();
  }

  passwordErrorMessageAssertion() {
    this.errorMessage().should('be.visible')
    this.errorMessage().should('have.text', LOGIN_PAGE.PASSWORD_ERROR_MESSAGE)
  }

}

export default new LoginPage();
