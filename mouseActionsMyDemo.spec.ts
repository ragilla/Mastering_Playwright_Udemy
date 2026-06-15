import { test } from '@playwright/test';

test('Mouse Actions Demo', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/hovers');

    // Hover
    await page.locator('.figure').first().hover();
    await page.waitForTimeout(3000);

    // Scroll
    await page.mouse.wheel(0, 500);

    // Move mouse
    await page.mouse.move(300, 300);

    // Left click
    await page.mouse.click(300, 300);

    // Right click
    await page.mouse.click(300, 300, {
        button: 'right'
    });

    // Double click
    await page.mouse.dblclick(300, 300);
});