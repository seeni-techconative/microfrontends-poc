import { test, expect } from "@playwright/test";

test("Page has button on it", async({page}) => {
await page.goto("http://localhost:3000/");

const button = page.getByRole("button", {
    name: "Click Me!"
});

await expect(button).toBeVisible();
})