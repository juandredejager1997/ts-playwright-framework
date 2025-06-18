import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page, acceptCookies: boolean = true) {
    super(page, acceptCookies);
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.submitButton = page.locator(".fa.fa-2x.fa-sign-in");
  }

  /**
   * Fill in username & password, click submit, and wait for navigation.
   * @param username your adminUsername from fixtures/config
   * @param password your adminPassword from fixtures/config
   */
  async loginAs(username: string, password: string) {
    await this.page.goto("/login");

    // Fill and submit
    await this.usernameInput.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.click();
    await this.passwordInput.fill(password);

    await Promise.all([this.submitButton.click()]);

    // Wait for landing and optionally accept cookie banner
    await this.waitForLanding();
  }
}
