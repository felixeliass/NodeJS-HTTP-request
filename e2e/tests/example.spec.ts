import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test.describe("Mern authentication", () => {
  test("should load homepage", async ({ page }) => {
    await expect(page.locator('data-test-id="homepage-anchor"')).toBeVisible();
  });
});
