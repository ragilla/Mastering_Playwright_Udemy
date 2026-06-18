import { test, expect } from '@playwright/test';

test('Login in to Demo Blaze application - press sequentially', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').waitFor();
    // User Name
    await page.locator('//input[@id="loginusername"]').pressSequentially('Admin');
    //Password
    await page.locator('#loginpassword').pressSequentially('admin');
    // <button type="button" onclick = "logIn()" class="btn btn-primary" > Log in </button>
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.locator('#nameofuser')).toHaveText('Welcome Admin');
});