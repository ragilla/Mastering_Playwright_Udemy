import { test, expect } from '@playwright/test';
test('Drag and Drop', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Static.html');

    const dragItem = page.locator('#angular');
    const dropItem = page.locator('#droparea');

    await dragItem.hover();
    await page.mouse.down();

    await dropItem.hover();
    await page.mouse.up();

    //await page.waitForTimeout(5000);
})
test.only('Drag and Drop single command', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');

    const dragItem = page.locator('img[alt="The chalet at the Green mountain lake"]');
    const dropItem = page.locator('#trash');

    await dragItem.dragTo(dropItem);

    //await page.waitForTimeout(5000);
})