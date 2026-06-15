import { test, expect } from '@playwright/test';

const credentials = [
    // Valid credentials
    {
        "username": "Admin",
        "password": "admin123"
    },
    // InValid credentials
    {
        "username": "Admin",
        "password": "admin"
    },
    // InValid credentials
    {
        "username": "admin123",
        "password": "Admin"
    }
]
credentials.forEach(data => {
    test(`Parameterize Test -- Login for Orange HRM ${data.password} + ${data.password}`, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.locator('//input[@placeholder="Username"]').fill(data.username);
        await page.locator('//input[@placeholder="Password"]').fill(data.password);
        await page.locator('//button[normalize-space()="Login"]').click();
        await page.locator('.oxd-userdropdown-tab').click();
        await page.locator('//a[normalize-space()="Logout"]').click();
    })
})

