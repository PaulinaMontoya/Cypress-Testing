import { PRODUCTS_PAGE } from '../../fixtures/data';

export class ProductsPage {

  elements = {
    productsTitle: () => cy.get('[data-test="title"]'),
  }

  productsTitleAssertions() {
    this.elements.productsTitle().contains(PRODUCTS_PAGE.TITLE);
    cy.url().should('include', '/inventory');
  }

}

export default new ProductsPage();
