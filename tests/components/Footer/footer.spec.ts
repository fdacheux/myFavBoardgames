import { test, expect } from "@playwright/test";

test.describe("Footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("footer has correct content", { tag: "@smoke" }, async ({ page }) => {
    await expect(page.locator("footer")).toContainText("My Fav Boardgames");
    await expect(page.locator("footer")).toContainText("Official shopping partners");
    await expect(page.locator("footer")).toContainText("© 2026 My Fav Boardgames. Made with love for tabletop lovers.");
  });
  test("footer link Rules of site navigates to correct page", async ({ page }) => {
    await page.locator("footer a:has-text('Rules of site')").click();
    await expect(page).toHaveURL("/rules");
    await expect(page.locator("h2")).toContainText("Rules of site");
  });
  test("footer link Privacy Policy navigates to correct page", async ({ page }) => {
    await page.locator("footer a:has-text('Privacy Policy')").click();
    await expect(page).toHaveURL("/privacy-policy");
    await expect(page.locator("h2")).toContainText("Privacy Policy");
  });
  test("footer link contact navigates to correct page", async ({ page }) => {
    await page.locator("footer a:has-text('Contact')").click();
    await expect(page).toHaveURL("/contact");
    await expect(page.locator("h2")).toContainText("Contact");
  });
  test("footer has link to dummy partner", async ({ page }) => {
    const meepleMartLink = page.locator("footer a:has-text('MeepleMart')");
    await expect(meepleMartLink).toBeVisible();
    await meepleMartLink.click();
  });
});
