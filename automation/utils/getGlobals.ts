import { customGlobals } from "../../playwright.config";
import type { TestInfo } from "@playwright/test";

export function getGlobals(testInfo: TestInfo) {
  const envMap = {
    DEV: customGlobals.DEV,
    UAT: customGlobals.UAT,
    PROD: customGlobals.PROD,
    STG: customGlobals.STG,
  };

  const matchedKey = Object.keys(envMap).find((key) =>
    testInfo.project.name.includes(key)
  );

  if (!matchedKey) {
    throw new Error("Unknown project: " + testInfo.project.name);
  }

  return envMap[matchedKey];
}
