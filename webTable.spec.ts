import { test, expect, Locator, Page } from '@playwright/test';
test(' Selecting Single checkboxes', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.mouse.wheel(0, 500);
    const table = page.locator('#productTable').scrollIntoViewIfNeeded();
    const row = page.locator('#productTable tbody tr').filter({
        hasText: 'Smartwatch'
    });
    await row.locator('input[type="checkbox"]').check();
    console.log(row);
    await page.pause();

    /*
    const rows = table.locator('tbody tr');
    const columns = table.locator('thead tr th');
   
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })
    await matchedRow.locator('input').check();
    await page.pause();
    await page.close();*/
});
