import { COMMON_PAGE } from '../../fixtures/data';

export class CommonPage {

    constructor() {
        this.burguerButton = () => cy.get('[id="react-burger-menu-btn"]')
        this.allItemsButton = () => cy.get('[id="inventory_sidebar_link"]')
        this.aboutButton = () => cy.get('[id="about_sidebar_link"]')
        this.logoutButton = () => cy.get('[id="logout_sidebar_link"]')
        this.resetAppStateButton = () => cy.get('[id="reset_sidebar_link"]')
        this.swagLabsLogo = () => cy.get('[class="app_logo"]')
    }

    logoutSuccessfully() {
        this.swagLabsLogo().then(() => {
            this.burguerButton().click()
            this.logoutButton().click()
        })
    }

}

export default new CommonPage();
