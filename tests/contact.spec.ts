import { test, expect } from "@playwright/test";

for (const width of [375, 1440]) {
  test(`Contact reveals and stays in-bounds at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("/");
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await expect(
      page.getByRole("heading", { level: 2, name: /make[\s\S]*something[\s\S]*great/ }),
    ).toBeVisible();
    await expect(page.locator("[data-contact-reveal]").last()).toHaveCSS(
      "opacity",
      "1",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    expect(errors).toEqual([]);
  });
}

test("Contact content remains usable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100");
  await page.locator("#contact").scrollIntoViewIfNeeded();
  await expect(
    page.getByRole("heading", { level: 2, name: /make[\s\S]*something[\s\S]*great/ }),
  ).toBeVisible();
  await context.close();
});
