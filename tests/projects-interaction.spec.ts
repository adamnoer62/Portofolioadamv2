import { test, expect } from "@playwright/test";

test("Project card reveals arrow and shifts title on hover", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const card = page.getByRole("button", { name: "View Benihku details" });
  await card.scrollIntoViewIfNeeded();
  const arrow = card.locator(".project-arrow");
  await expect(arrow).toHaveCSS("opacity", "0.3");
  await card.hover();
  await expect(arrow).toHaveCSS("opacity", "1");
});

test("Project filters narrow the visible grid", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.locator("#work").scrollIntoViewIfNeeded();
  await page.getByRole("button", { name: "Game Development", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "View Benihku details" }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: "View ENEOS Race Game details" }),
  ).toBeVisible();
});
