import { test, expect } from "@playwright/test";

for (const width of [375, 768, 1440]) {
  test(`Hero and navigation work at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "FULL STACKDEVELOPER.",
    );
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    await page.getByRole("link", { name: "VIEW MY WORK" }).click();
    await expect(page.locator("#work")).toBeInViewport();
    await expect(page.locator("html")).not.toHaveClass(/lenis-scrolling/);
    await page
      .getByRole("button", { name: "View Benihku details" })
      .click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await expect(page.locator("html")).toHaveClass(/lenis-stopped/);
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toHaveCount(0);
    await expect(page.locator("html")).not.toHaveClass(/lenis-stopped/);
    expect(errors).toEqual([]);
    await page.goto("/");
    await expect(page.locator("[data-hero-enter]").last()).toHaveCSS(
      "opacity",
      "1",
    );
    await page.screenshot({ path: `test-results/hero-${width}.png` });
  });
}

test("reduced motion uses native scrolling and visible content", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator("html")).not.toHaveClass(/lenis/);
  await page.getByRole("link", { name: "VIEW MY WORK" }).click();
  await expect(page).toHaveURL(/#work$/);
  await expect(page.locator("#work")).toBeInViewport();
  await expect(page.locator("html")).not.toHaveClass(/lenis-scrolling/);
});

test("Hero and links remain usable without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.getByRole("link", { name: "VIEW MY WORK" }).click();
  await expect(page).toHaveURL(/#work$/);
  await context.close();
});
