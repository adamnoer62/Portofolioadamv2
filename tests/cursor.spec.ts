import { test, expect } from "@playwright/test";

test("Custom cursor follows the pointer and labels project hover", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/has-custom-cursor/);
  const card = page.getByRole("button", { name: "View Benihku details" });
  await card.scrollIntoViewIfNeeded();
  const box = await card.boundingBox();
  if (!box) throw new Error("card not found");
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2, {
    steps: 10,
  });
  await expect(page.locator(".cursor")).toHaveClass(/cursor-open/);
  await expect(page.locator(".cursor")).toContainText("OPEN");
});

test("Custom cursor is disabled on touch devices", async ({ browser }) => {
  const context = await browser.newContext({ hasTouch: true });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100");
  await page.waitForTimeout(300);
  await expect(page.locator("html")).not.toHaveClass(/has-custom-cursor/);
  await context.close();
});
