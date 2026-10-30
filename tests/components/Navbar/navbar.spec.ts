import { test, expect } from "@playwright/test";


test.describe("navigation bar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("navbar brand", {tag: "@smoke"}, async ({ page }) => {
    await expect(page.locator(".nav-brand")).toHaveText(/My Fav Boardgames/);
  });
  test("navigating to blog", {tag: "@smoke"}, async ({page}) => {
    const blogLink = page.getByRole("link").nth(1);
    await expect(blogLink).toHaveText("Blog");
    await blogLink.click();
    await expect(page.locator('.blog-page_title')).toHaveText("Blog")
  });
  test("navigating to About page", {tag: "@smoke"}, async ({page}) => {
    const aboutLink = page.getByRole("link").nth(2);
    await expect(aboutLink).toHaveText("About");
    await aboutLink.click();
    await expect(page.locator('.about-page_title')).toHaveText("About")
  })
  test("opening login modal", {tag: "@smoke"}, async ({page}) =>{
    const loginButton = page.getByRole("button").nth(0);
    await expect(loginButton).toHaveAccessibleName("Login or Sign Up");
    await loginButton.click();
    // await expect(page.locator('.login-modal_title')).toHaveText("Login")
  })
});
