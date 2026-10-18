import { test, expect } from "@playwright/test";

test.describe("Venue navigation", () => {
  test("user can navigate from homepage to venue details", async ({ page }) => {
    await page.goto("/");

    const venueContainer = page.locator("#venue-container");
    await expect(venueContainer).toBeVisible();

    const firstVenue = venueContainer.locator('a[href^="/venue/?id="]').first();

    await expect(firstVenue).toBeVisible();

    await firstVenue.click();

    await expect(page).toHaveURL(/\/venue\/\?id=.+/);

    await expect(
      page.getByRole("heading", { name: /venue details/i }),
    ).toBeVisible();
  });
});
