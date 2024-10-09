export class Assertions {
  static expectToDisplayElementContainsValue(locator, value) {
    cy.get(locator)
      .contains(value)
      .should('be.visible');
  };

  static expectInvokedAttributeContainsValue(locator, attribute, value) {
    cy.get(locator)
      .invoke('attr', attribute)
      .should('contain', value);
  }

  static expectElementToHaveText(locator, text) {
    cy.get(locator)
      .should('have.value', text);
  }
}