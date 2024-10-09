import { SignInPage } from "../pages/signInPage";
import { CreatePasswordTestData } from "../fixtures/createPasswordTestData";
import { CreatePasswordPage } from "../pages/createPasswordPage";
import { MakeData } from "../helpers/makeData";

const signInPage = new SignInPage;
const createPasswordPage = new CreatePasswordPage;

describe('Sign In page tests', () => {
  const password = MakeData.getValidPassword();

  beforeEach(() => {
    const userEmail = MakeData.getEmail();

    cy.visit('/');
    signInPage.enterEmailAndClickContinue(userEmail);
    createPasswordPage.checkCreatePasswordElementDisplayedByName(createPasswordPage.h1, CreatePasswordTestData.createPasswordHeader);
  });

  it('Check the presence of Create password page elements', () => {
    createPasswordPage.checkCreatePasswordElementDisplayedByName(createPasswordPage.paswwordLabel, CreatePasswordTestData.passwordLabel);
    createPasswordPage.checkElementPlaceholderHaveValue(createPasswordPage.passwordInput, CreatePasswordTestData.enterPassword);
    createPasswordPage.checkCreatePasswordElementDisplayedByName(createPasswordPage.confirmPassLabl, CreatePasswordTestData.confirmPaswordLabel);
    createPasswordPage.checkElementPlaceholderHaveValue(createPasswordPage.confPasswordInput, CreatePasswordTestData.confirmPassword);
    createPasswordPage.checkCreatePasswordElementDisplayedByName(createPasswordPage.submitButton, CreatePasswordTestData.submitButton);
  });

  it('Verify Create password functionality with empty Password, Confirm password inputs', () => {
    createPasswordPage.clickCreateAccountButton();
    createPasswordPage.checkCreatePasswordElementDisplayedByName(createPasswordPage.newPasswordAlert, CreatePasswordTestData.emptyNewPasswordAlert);
    createPasswordPage.checkCreatePasswordElementDisplayedByName(createPasswordPage.confirmedPasswordAlert, CreatePasswordTestData.emptyConfirmPasswordAlert);
  });
  
  it('Verify Create password functionality with filled password and blank confirm password inputs', () => {
    createPasswordPage.enterTextInInputByName(createPasswordPage.passwordInput, password);
    createPasswordPage.clickCreateAccountButton();
    createPasswordPage.checkCreatePasswordElementDisplayedByName(createPasswordPage.confirmedPasswordAlert, CreatePasswordTestData.emptyConfirmPasswordAlert);
  });

  it('Verify Create password functionality with blank password and filled confirm password inputs', () => {
    createPasswordPage.clickShowPasswordByLocator(createPasswordPage.showNewPassBtn);
    createPasswordPage.enterTextInInputByName(createPasswordPage.confPasswordInput, password);
    createPasswordPage.clickCreateAccountButton();
    createPasswordPage.checkCreatePasswordElementDisplayedByName(createPasswordPage.newPasswordAlert, CreatePasswordTestData.emptyNewPasswordAlert);
    createPasswordPage.checkCreatePasswordElementDisplayedByName(createPasswordPage.confirmedPasswordAlert, CreatePasswordTestData.notMatchedPasswords);
  });

  it('Verify Create password functionality with blank password and filled confirm password inputs', () => {
    createPasswordPage.enterTextInInputByName(createPasswordPage.passwordInput, CreatePasswordTestData.nineLettersPassword);
    createPasswordPage.enterTextInInputByName(createPasswordPage.confPasswordInput, CreatePasswordTestData.nineLettersPassword);
    createPasswordPage.clickCreateAccountButton();
    createPasswordPage.checkCreatePasswordElementDisplayedByName(createPasswordPage.newPasswordAlert, CreatePasswordTestData.shortPasswordAlert);
  });

  it('Verify Create password functionality with password that consist only from numbers', () => {
    createPasswordPage.enterTextInInputByName(createPasswordPage.passwordInput, CreatePasswordTestData.numbersPassword);
    createPasswordPage.enterTextInInputByName(createPasswordPage.confPasswordInput, CreatePasswordTestData.numbersPassword);
    createPasswordPage.clickCreateAccountButton();
    createPasswordPage.checkCreatePasswordElementDisplayedByName(createPasswordPage.newPasswordAlert, CreatePasswordTestData.passwordWithoutLettersAlert);
  });

  it('Verify Create password functionality with password that consists only of numbers and uppercase letters', () => {
    createPasswordPage.enterTextInInputByName(createPasswordPage.passwordInput, CreatePasswordTestData.passwordWithNumAndUpperCase);
    createPasswordPage.enterTextInInputByName(createPasswordPage.confPasswordInput, CreatePasswordTestData.passwordWithNumAndUpperCase);
    createPasswordPage.clickCreateAccountButton();
    createPasswordPage.checkCreatePasswordElementDisplayedByName(createPasswordPage.newPasswordAlert, CreatePasswordTestData.passwordWithoutLowerCaseLettersAlert);
  });

  it.skip('Verify Create password functionality with password that consists of numbers, lowercase and uppercase letters', () => {
    createPasswordPage.enterTextInInputByName(createPasswordPage.passwordInput, password);
    createPasswordPage.enterTextInInputByName(createPasswordPage.confPasswordInput, password);
    createPasswordPage.clickCreateAccountButton();
  });

  it('Verify show password functionality by clicking show password icon', () => {
    createPasswordPage.enterTextInInputByName(createPasswordPage.passwordInput, password);
    createPasswordPage.enterTextInInputByName(createPasswordPage.confPasswordInput, password);
    createPasswordPage.clickShowPasswordByLocator(createPasswordPage.showNewPassBtn);
    createPasswordPage.checkPasswordToHaveValue(createPasswordPage.passwordInput, password);
  });
});