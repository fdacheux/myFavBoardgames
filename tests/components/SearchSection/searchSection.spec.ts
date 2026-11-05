import { test, expect } from "@playwright/test";

test.describe("search bar section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("search bar is selectable", async ({ page }) => {
    const searchBar = page.getByPlaceholder(
      "Search for a game (e.g. Catan, Root...)",
    );
    await searchBar.fill("Catan");
    expect(await searchBar.inputValue()).toBe("Catan");
    await searchBar.clear();
  });

  test("order dropdown is selectable", async ({ page }) => {
    const orderDropdown = page.getByRole("combobox");
    await orderDropdown.selectOption("A-Z");
    expect(await orderDropdown.inputValue()).toBe("A-Z");
    await orderDropdown.selectOption("Trending First");
    expect(await orderDropdown.inputValue()).toBe("Trending First");
  });

  test("test filters button", async ({ page }) => {
    const filtersButton = page.getByRole("button", { name: /Filters/i } );
    await filtersButton.click();
    
  })
});
