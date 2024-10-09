import { Assertions } from "../helpers/assertions";
import { Actions } from "../helpers/actions";
import { CreatePasswordTestData } from "../fixtures/createPasswordTestData";

export class CreatePasswordPage {
  h1 = 'h1';
  h3 = 'h3';
  paswwordLabel = '[for="new_password"]';
  passwordInput = '[name="new_password"]';
  confirmPassLabl = '[for="confirmed_password"]';
  confPasswordInput = '[name="confirmed_password"]';
  submitButton = '[type="submit"]';
  newPasswordAlert = '#new_password-note';
  confirmedPasswordAlert = '#confirmed_password-note';
  showNewPassBtn = '[aria-controls="new_password"]';


  checkCreatePasswordElementDisplayedByName(locator, value) {
    Assertions.expectToDisplayElementContainsValue(locator, value);
  }

  checkElementPlaceholderHaveValue(locator, value) {
    Assertions.expectInvokedAttributeContainsValue(locator, 'placeholder', value);
  }

  enterTextInInputByName(locator, text) {
    Actions.typeText(locator, text);
  }

  clickCreateAccountButton() {
    Actions.clickElementContainsValue(this.submitButton, CreatePasswordTestData.submitButton);
  }

  clickShowPasswordByLocator(locator) {
    Actions.clickElementByLocator(locator);
  }

  checkPasswordToHaveValue(locator, text) {
    Assertions.expectElementToHaveText(locator, text);
  }
}