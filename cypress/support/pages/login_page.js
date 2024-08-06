import { LOGIN_PAGE } from '../../fixtures/data';

export class LoginPage {

  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
  }

  loginSuccessfully() {
    cy.login(LOGIN_PAGE.CORRECT_USER, LOGIN_PAGE.CORRECT_PASSWORD);
  }

  productsTitleAssertions() {
    this.elements.productsTitle().contains(LOGIN_PAGE.TITLE);
    cy.url().should('include', '/inventory');
  }

  userNameErrorMessage() {
    this.elements.passwordInput().type(LOGIN_PAGE.CORRECT_PASSWORD);
    this.elements.loginButton().click();
  }

  userNameErrorMessageAssertion() {
    this.elements.errorMessage().should('be.visible')
    this.elements.errorMessage().should('have.text', LOGIN_PAGE.USER_ERROR_MESSAGE)
  }

  passwordErrorMessage() {
    this.elements.usernameInput().type(LOGIN_PAGE.CORRECT_USER);
    this.elements.loginButton().click();
  }

  passwordErrorMessageAssertion() {
    this.elements.errorMessage().should('be.visible')
    this.elements.errorMessage().should('have.text', LOGIN_PAGE.PASSWORD_ERROR_MESSAGE)
  }

}

export default new LoginPage();
