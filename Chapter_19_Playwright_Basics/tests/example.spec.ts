import { test, expect } from '@playwright/test';

// page  - Inbuilt fixture  is autmatically given to you
// which are the functions you can directlyuse in playwright.

test("verify the title is TTA Cart", async ({ page }) => {
  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  await expect(page).toHaveTitle("TTACart - Login")
  await page.waitForTimeout(5000);
})