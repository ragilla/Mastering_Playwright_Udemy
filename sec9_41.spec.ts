import { test, expect } from '@playwright/test';

test('41. How to write Login Test ?', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');

    await page.locator('[name = "username"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();

    await page.waitForURL('**/dashboard/index');
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();

    await page.close();  
 });