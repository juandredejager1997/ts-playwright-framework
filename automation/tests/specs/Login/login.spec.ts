import { getGlobals } from "../../../utils/getGlobals";
import { test, expect } from "../../fixtures/portal/authFixture";

test("Admin can log in", async ({ page, admin }, testInfo) => {
  const globals = getGlobals(testInfo);

  expect(await page.locator("h2").textContent()).toContain("Secure Area");

  expect(await page.locator(".subheader").textContent()).toContain(
    "Welcome to the Secure Area. When you are done click logout below."
  );

  expect(await page.locator(".button").textContent()).toContain("Logout");

  await page.locator(".button").click();

  expect(await page.locator(".fa.fa-2x.fa-sign-in").textContent()).toContain(
    "Login"
  );
});
