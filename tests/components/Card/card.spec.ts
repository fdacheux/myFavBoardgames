import { test, expect } from "@playwright/test";

test.describe("cards", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("card is displayed", { tag: "@smoke" }, async ({ page }) => {
    await expect(page.locator(".card")).toBeVisible();
  });
});
