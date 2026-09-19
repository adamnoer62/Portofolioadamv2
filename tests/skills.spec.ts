import { test, expect } from "@playwright/test";

for (const width of [375, 768, 1440]) {
  test(`Skills cloud stays readable and in-bounds at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("/");
    await page.locator("#skills").scrollIntoViewIfNeeded();
    await expect(page.getByText("React", { exact: true }).first()).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    expect(errors).toEqual([]);
    await page.screenshot({ path: `test-results/skills-${width}.png` });
  });
}

test("Skills hover reveals a contextual note without overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.locator("#skills").scrollIntoViewIfNeeded();
  const react = page
    .locator(".skill-word")
    .filter({ has: page.getByText("React", { exact: true }) });
  await react.hover();
  await expect(react.locator("small")).toHaveCSS("opacity", "1");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
});

test("Skills content remains usable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100");
  await page.locator("#skills").scrollIntoViewIfNeeded();
  await expect(
    page.getByText("Laravel", { exact: true }).first(),
  ).toBeVisible();
  await context.close();
});
