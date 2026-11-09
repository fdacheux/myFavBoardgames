import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});
test("has title", async ({ page }) => {

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("My Fav Boardgames");
  await expect(page.locator("h1")).toHaveText("Welcome to My Fav Boardgames");
  await expect(page.locator("header>p")).toHaveText("Discover, rate, and discuss the absolute best tabletop experiences. Your next favorite game is just a roll away!");
});

test("load button click", async ({ page }) => {
  await page.getByRole("button", { name: "Load More Games" }).click();
  console.log("Load More Games button clicked!");
});
