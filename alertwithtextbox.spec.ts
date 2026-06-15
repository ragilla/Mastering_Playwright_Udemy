import { test, expect } from '@playwright/test';
test('alert with text box', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog", async (alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS prompt');

        await alert.accept("Muni");
        await expect(page.locator('#result')).toHaveText('You entered: Muni');
    })
    await page.locator('button[onclick="jsPrompt()"]').click();

    //await page.locator('button[onclick="jsAlert()"]').click();
    //await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

    await page.close();
})