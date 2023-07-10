import { test } from "@playwright/test";

test("test browser", async ({ page }) => {
  // this url have to run dev server before
  await page.goto(process.env.URl_TEST_BROWSER, { waitUntil: "networkidle" });

  // keep browser open
  await page.pause();
});
