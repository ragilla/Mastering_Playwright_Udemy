import { test, expect } from '@playwright/test';
import * as orangeHRMData from './testData/orangeHRMCredentials.json';

test('Login Test with valid credentials', async ({ page }) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@placeholder="Username"]').fill(orangeHRMData.validUsername);
    await page.locator('//input[@placeholder="Password"]').fill(orangeHRMData.validPassword);
    await page.locator('//button[normalize-space()="Login"]').click();
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('//a[normalize-space()="Logout"]').click();
})
test('Login Test with Invalid credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@placeholder="Username"]').fill(orangeHRMData.InvalidUsername);
    await page.locator('//input[@placeholder="Password"]').fill(orangeHRMData.InvalidPassword);
    await page.locator('//button[normalize-space()="Login"]').click();
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('//a[normalize-space()="Logout"]').click();
})