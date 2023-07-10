import { defineConfig, devices } from "@playwright/test";
import * as dotenv from "dotenv";

// Read from default ".env" file.
dotenv.config();

// Alternatively, read from "../my.env" file.
// import path from "path";
// dotenv.config({ path: path.resolve(__dirname, '..', 'my.env') });

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: "tests",

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: "html",

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: process.env.URl_TEST_BROWSER,

    // Collect trace when retrying the failed test.
    trace: "on-first-retry",
  },
  // Configure projects for major browsers.
  projects: [
    // {
    //   name: "chromium",
    //   use: { ...devices["Desktop Chrome"] },
    // },
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
  // Run your local dev server before starting the tests.
  webServer: {
    command: "npm run dev",
    url: process.env.URl_TEST_BROWSER,
    reuseExistingServer: !process.env.CI,
  },
});
