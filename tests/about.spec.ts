import { test, expect } from "@playwright/test";

for (const width of [375, 768, 1440]) {
  test(`About reveals and stays readable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("/");
    await page.locator("#about").scrollIntoViewIfNeeded();
    await expect(
      page.getByRole("heading", { level: 2, name: /FULL STACK/ }),
    ).toBeVisible();
    await expect(page.locator("[data-about-reveal]").last()).toHaveCSS(
      "opacity",
      "1",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    expect(errors).toEqual([]);
    await page.screenshot({ path: `test-results/about-${width}.png` });
  });
}

test("About reduced motion keeps copy visible without animation", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.locator("#about").scrollIntoViewIfNeeded();
  await expect(
    page.getByRole("heading", { level: 2, name: /FULL STACK/ }),
  ).toBeVisible();
  await expect(page.locator("[data-about-reveal]").first()).toHaveCSS(
    "opacity",
    "1",
  );
});

test("About content remains usable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100");
  await page.locator("#about").scrollIntoViewIfNeeded();
  await expect(
    page.getByRole("heading", { level: 2, name: /FULL STACK/ }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /make something meaningful/i })).toHaveAttribute(
    "href",
    "#contact",
  );
  await context.close();
});
