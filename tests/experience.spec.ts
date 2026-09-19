import { test, expect } from "@playwright/test";

for (const width of [375, 1440]) {
  test(`Experience story stays readable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("/");
    await page.locator("#experience").scrollIntoViewIfNeeded();
    await expect(
      page.getByRole("heading", { level: 3, name: "Senior Software Engineer" }),
    ).toBeVisible();
    expect(await page.locator(".experience-connector").count()).toBe(4);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    expect(errors).toEqual([]);
  });
}

test("Experience content remains usable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100");
  await page.locator("#experience").scrollIntoViewIfNeeded();
  await expect(
    page.getByRole("heading", { level: 3, name: "Fullstack Web Developer" }),
  ).toBeVisible();
  await context.close();
});
