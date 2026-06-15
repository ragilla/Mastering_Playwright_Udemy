import { test, expect } from '@playwright/test';
import path from 'path/posix';

// Demo on taking a screen shot on failure the test
// check the playwright.config.ts file
// screenshot: 'only-on-failure'

test('Taking a Screent shot', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    // below statement i have made Login to Login111 - which in correct. make Login to Logout111 to check screen shot is taking or not
    await page.locator('//button[normalize-space()="Login"]').click();
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('//a[normalize-space()="Logout"]').click();

})
