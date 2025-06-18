import { Page, expect } from "@playwright/test";

export async function signOut(page: Page) {
  await page.locator(".outer-menu-item.lpx-user-menu").click();
  await page.locator("a").filter({ hasText: "Log out" }).click();
  await expect(page.getByRole("button", { name: "Sign in" })).toBeVisible();
}
