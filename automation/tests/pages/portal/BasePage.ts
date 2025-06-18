import { Page } from "@playwright/test";
import { AcceptCookieBanner } from "../components/buttons";

export class BasePage {
  readonly page: Page;
  readonly cookieBanner: AcceptCookieBanner;
  readonly acceptCookies: boolean;

  constructor(page: Page, acceptCookies: boolean = true) {
    this.page = page;
    this.acceptCookies = acceptCookies;
    this.cookieBanner = new AcceptCookieBanner(page);
  }

  async waitForLanding(): Promise<void> {
    await this.page
      .locator("h2", { hasText: "Secure Area" })
      .waitFor({ timeout: 15000 });

    if (this.acceptCookies) {
      await this.cookieBanner.accept();
    }
  }
}
