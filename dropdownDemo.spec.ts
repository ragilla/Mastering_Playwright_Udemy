import { test, expect } from '@playwright/test';

test('Demo of Drop downs', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.selectOption('#Skills', {
        value: "Android"
    })
    await page.waitForTimeout(3000);
});