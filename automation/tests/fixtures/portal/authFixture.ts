import {
  test as base,
  expect as baseExpect,
  BrowserContext,
  Page,
} from "@playwright/test";
import { LoginPage } from "../../pages/portal/LoginPage";
import { customGlobals } from "../../../../playwright.config";

type Env = keyof typeof customGlobals;

function inferEnvFromProject(projectName: string): Env {
  if (projectName.includes("DEV")) return "DEV";
  if (projectName.includes("UAT")) return "UAT";
  if (projectName.includes("STG")) return "STG";
  if (projectName.includes("PROD")) return "PROD";
  return "DEV"; // fallback
}

export const test = base.extend<{
  env: Env;
  context: BrowserContext;
  page: Page;
  admin: { username: string; password: string };
  student: { username: string; password: string };
  acceptCookies: boolean;
}>({
  acceptCookies: [true, { option: true }],
  env: async ({}, use, testInfo) => {
    const inferredEnv = inferEnvFromProject(testInfo.project.name);
    await use(inferredEnv);
  },

  context: async ({ browser }, use) => {
    const context = await browser.newContext({
      permissions: [],
      geolocation: { latitude: 0, longitude: 0 },
    });
    await use(context);
    await context.close();
  },

  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
  },

  admin: async ({ page, env, acceptCookies }, use) => {
    const creds = customGlobals[env];
    const login = new LoginPage(page, acceptCookies);
    await login.loginAs(creds.adminUsername, creds.adminPassword);
    await use({ username: creds.adminUsername, password: creds.adminPassword });
  },
});

export const expect = baseExpect;
