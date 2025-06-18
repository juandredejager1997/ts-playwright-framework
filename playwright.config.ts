import { defineConfig, devices } from "@playwright/test";

export const customGlobals = {
  DEV: {
    adminUsername: "tomsmith",
    adminPassword: "SuperSecretPassword!",
  },
  UAT: {
    adminUsername: "",
    adminPassword: "",
  },
  STG: {
    adminUsername: "",
    adminPassword: "",
  },
  PROD: {
    adminUsername: "",
    adminPassword: "",
  },
};

export default defineConfig({
  timeout: 130000,
  expect: {
    timeout: 100000,
  },
  testDir: "./automation/tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 6,
  reporter: [["list"], ["allure-playwright"]],
  use: {
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "DEV - Chrome",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://the-internet.herokuapp.com/login",
      },
    },
    {
      name: "UAT - Chrome",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "",
      },
    },
    {
      name: "PROD - Chrome",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "",
      },
    },
    {
      name: "STG - Chrome",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "",
      },
    },
  ],
});
