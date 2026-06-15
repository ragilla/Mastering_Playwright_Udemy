import { test, expect } from '@playwright/test';
test('SDynamic Drop down', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('span[role="combobox"]').click();
    await page.locator('input[role="textbox"]').fill("India");
    
    await page.locator('//*[@id="select2-country-container"]').click();
    //await page.waitForTimeout(7000);

    await page.close();


})