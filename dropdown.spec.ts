import { test, expect } from '@playwright/test';
test('', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com");
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click();
    await page.locator("//p[@class='oxd-userdropdown-name']").click();
    await page.locator("//ul[@class='oxd-dropdown-menu']/following::li[4]").click();
    await page.waitForURL('**/dashboard/index');
    await page.close();
});