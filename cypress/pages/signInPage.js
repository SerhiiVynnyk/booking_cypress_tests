import { Assertions } from '../helpers/assertions';
import { Actions } from '../helpers/actions'
import { signInTestData } from '../fixtures/signInTestData';

export class SignInPage {
  h1 = 'h1';
  emailInput = '[type="email"]';
  emailLabel = '[for="username"]';
  continueWithEmailButton = '[type="submit"]';
  emailAlert = '#username-note';

  checkSignInElementDisplayedByName(locator, value) {
    Assertions.expectToDisplayElementContainsValue(locator, value);
  }

  checkEmailPlaceholderHaveValue(value) {
    Assertions.expectInvokedAttributeContainsValue(this.emailInput, 'placeholder', value);
  }

  enterEmailAndClickContinue(text) {
    Actions.typeText(this.emailInput, text);
    cy.get(this.continueWithEmailButton).click();
  }

  clicContinueWithEmail() {
    Actions.clickElementContainsValue(this.continueWithEmailButton, signInTestData.continueButton);
  }
}