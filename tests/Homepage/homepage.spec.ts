import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("My Fav Boardgames");
  await expect(page.locator("h1")).toHaveText("Welcome to My Fav Boardgames");
  await expect(page.locator("header>p")).toHaveText("Discover, rate, and discuss the absolute best tabletop experiences. Your next favorite game is just a roll away!");
});
