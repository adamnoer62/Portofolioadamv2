import { test, expect } from "@playwright/test";

test("More Portfolio button opens a contact prompt", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  const button = page.getByRole("button", { name: /More Portfolio/i });
  await button.scrollIntoViewIfNeeded();
  await button.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("heading", { name: "Want to see more?" }),
  ).toBeVisible();
  await expect(
    dialog.getByRole("link", { name: /adamnoer62@gmail\.com/ }),
  ).toHaveAttribute("href", "mailto:adamnoer62@gmail.com");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("More Portfolio prompt remains usable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100");
  await expect(
    page.getByRole("button", { name: /More Portfolio/i }),
  ).toBeVisible();
  await context.close();
});
