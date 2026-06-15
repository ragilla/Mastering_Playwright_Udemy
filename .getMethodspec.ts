import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://winwebtest.cleanharbors.com/');
    await page.locator('iframe[name="idFrameCRM"]').contentFrame().locator('iframe[name="idFrameDashboard_Data"]').contentFrame().locator('#txtBranch').fill('a');
    await page.locator('iframe[name="idFrameNavBar"]').contentFrame().getByRole('link', { name: 'Facility Area Management' }).click();
    await page.locator('iframe[name="idFrameNavBar"]').contentFrame().getByRole('link', { name: 'Facility Management' }).click();
    await page.locator('iframe[name="idFrameCRM"]').contentFrame().locator('#txtLocation').click();
    await page.locator('iframe[name="idFrameCRM"]').contentFrame().locator('#txtLocation').press('CapsLock');
    await page.locator('iframe[name="idFrameCRM"]').contentFrame().locator('#txtLocation').fill('SG');
    await page.locator('iframe[name="idFrameCRM"]').contentFrame().getByText('SG - Spring Grove, OH Facility').click();
    await page.locator('iframe[name="idFrameCRM"]').contentFrame().getByRole('button', { name: 'Retrieve' }).click();
});

test.afterEach(async ({ page }, testInfo) => {
    const screenshot = await page.screenshot();

    await testInfo.attach('Screenshot', {
        body: screenshot,
        contentType: 'image/png'
    });
});