import loginPage from "../support/pages/login_page";
import commonPage from "../support/pages/common_page";
import productsPage from "../support/pages/products_page";

describe('Login Page Test Cases', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Test case 1: Positive LogIn test', () => {
    loginPage.loginSuccessfully();
    productsPage.productsTitleAssertions();
  })

  it('Test case 2: Negative username is required error message', () => {
    loginPage.userNameErrorMessage();
    loginPage.userNameErrorMessageAssertion();
  })

  it('Test case 3: Negative password is required error message', () => {
    loginPage.userNameErrorMessage();
    loginPage.userNameErrorMessageAssertion();
  })

  it('Test case 4: Logout successfully', () => {
    loginPage.loginSuccessfully();
    commonPage.logoutSuccessfully();
    loginPage.loginButton().should('be.visible')
  })

})