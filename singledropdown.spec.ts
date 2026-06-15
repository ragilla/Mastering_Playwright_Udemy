import { test, expect } from '@playwright/test';

test('Single Drop down', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');

    // Select by value
    await page.selectOption('#Skills', { value: "Android" });
    await expect(page.locator('#Skills')).toHaveValue("Android");

    // Select by label
    await page.selectOption('#Skills', { label: "Art Design" });
    await expect(page.locator('#Skills')).toHaveValue("Art Design");

    // Select by index
    await page.selectOption('#Skills', { index: 3 });
    await page.pause();
});