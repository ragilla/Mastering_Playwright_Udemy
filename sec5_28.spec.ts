import { test, expect } from '@playwright/test';

test('41. How to write Login Test ?', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');

    await page.locator('[name = "username"]').fill('Admin');


    


});