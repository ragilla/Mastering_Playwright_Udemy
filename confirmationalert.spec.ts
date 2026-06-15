import { test, expect } from '@playwright/test';
test('Confirmation alert box', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    
    page.on("dialog", async (alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Confirm');
        //await alert.accept();
        //await expect(page.locator('#result')).toHaveText('You clicked: Ok');
        await alert.dismiss();
        await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
    })
    await page.locator('button[onclick="jsConfirm()"]').click();


    //await page.locator('button[onclick="jsAlert()"]').click();
    //await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');


    await page.close();


})