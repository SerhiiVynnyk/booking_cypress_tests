import { SignInPage } from "../pages/signInPage";
import { signInTestData } from "../fixtures/signInTestData";
import { CreatePasswordTestData } from "../fixtures/createPasswordTestData";
import { CreatePasswordPage } from "../pages/createPasswordPage";
import { MakeData } from "../helpers/makeData";

const signInPage = new SignInPage;
const createPasswordPage = new CreatePasswordPage;

describe('Sign In page tests', () => {
  beforeEach(() => {
    cy.visit('/');
    signInPage.checkSignInElementDisplayedByName(signInPage.h1, signInTestData.signInHeader);
  });

  it('Check the presence of Sign In page elements', () => {
    signInPage.checkSignInElementDisplayedByName(signInPage.emailLabel, signInTestData.emailAddressLabel);
    signInPage.checkEmailPlaceholderHaveValue(signInTestData.enterEmail);
    signInPage.checkSignInElementDisplayedByName(signInPage.continueWithEmailButton, signInTestData.continueButton);
  });

  it('Verify Sign in functionality with valid email', () => {
    const userEmail = MakeData.getEmail();

    signInPage.enterEmailAndClickContinue(userEmail);
    createPasswordPage.checkCreatePasswordElementDisplayedByName(createPasswordPage.h1, CreatePasswordTestData.createPasswordHeader);
  });

  it('Verify Sign in functionality with incorrect email', () => {
    signInPage.enterEmailAndClickContinue(signInTestData.incorrectEmail);
    signInPage.checkSignInElementDisplayedByName(signInPage.emailAlert, signInTestData.incorrectEmailAlert);
  });

  it('Verify Sign in functionality with empty Email address input', () => {
    signInPage.clicContinueWithEmail();
  });
});