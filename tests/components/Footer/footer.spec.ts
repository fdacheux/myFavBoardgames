import { test, expect } from "@playwright/test";

test.describe("Footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("footer has correct content", { tag: "@smoke" }, async ({ page }) => {
    await expect(page.locator("footer")).toContainText("My Fav Boardgames");
  });
  test("footer link Rules of site navigates to correct page", async ({ page }) => {
    await page.locator("footer a:has-text('Rules of site')").click();
    await expect(page).toHaveURL("/rules");
    await expect(page.locator("h2")).toContainText("Rules of site");
  });
});
