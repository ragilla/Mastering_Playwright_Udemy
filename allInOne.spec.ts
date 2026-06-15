import { test, expect } from '@playwright/test';
test.only('', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com");
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click();
    await page.locator("//p[@class='oxd-userdropdown-name']").click();
    await page.locator("//ul[@class='oxd-dropdown-menu']/following::li[4]").click();
    await page.waitForURL('**/dashboard/index');
    await page.close();
    await page.close();
});
test('Static Drop Down', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.selectOption('#Skills', {
        value: "C"
    })
    await page.selectOption('#Skills', {
        label: "Android"
    })
    await page.selectOption('#Skills', {
        index: 5
    })
    await page.close();
    
});
test('Multi select Drop down', async ({ page }) => {
    await page.goto("https://lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption('#multi-select', [
        {value: "Ohio"},
        {label: "Texas"},
        {index: 3}
    ])
    await page.waitForTimeout(3000);
    await page.close();
});
test('Non-Searchable dynamic drop down', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('span[role="combobox"]').click();
    await page.locator('ul#select2-country-results').locator("li", {
        hasText: "India"
    }).click();
    await page.close();
});
test('Simple Alert', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on("dialog", async (alert) => {
        await alert.accept();       
    });
    await page.locator("//button[text()='Click for JS Alert']").click();
});
test('Confirmation Alert box', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on("dialog", async (alert) => {
        await alert.accept();
    });
    await page.locator("//button[text()='Click for JS Confirm']").click();
});
test('Dialog Alert box', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on("dialog", async (alert) => {
        const alertMsg = alert.message();
        expect(alertMsg).toEqual('I am a JS prompt');
        await alert.accept("munindhar");
        await expect(page.locator('#result')).toHaveText('You entered: munindhar');

    })

    await page.locator("//button[text()='Click for JS Prompt']").click();
});