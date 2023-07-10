import { test } from "@playwright/test";
import { URl_TEST_BROWSER } from "./../src/config/index";

test("test browser", async ({ page }) => {
  // this url have to run dev server before
  await page.goto(URl_TEST_BROWSER);

  // keep browser open
  await page.pause();
});
