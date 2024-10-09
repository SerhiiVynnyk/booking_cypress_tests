export class Actions {
  static typeText(locator, text) {
    cy.get(locator)
      .click()
      .type(text);
  }

  static clickElementByLocator(locator) {
    cy.get(locator)
      .click();
  }

  static clickElementContainsValue(locator, value) {
    cy.get(locator)
      .contains(value)
      .click();
  }
}