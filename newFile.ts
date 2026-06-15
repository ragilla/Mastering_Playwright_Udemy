import { test } from '@playwright/test';

test('Working with  web table - clicking next page links', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');
    const column = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const rowData = row.locator('td');
        for (let j = 0; j < await rowData.count(); j++) {
            const cellContent = await rowData.nth(j).innerText();
            console.log(cellContent.trim());
        }
    }
    await page.close();
});
test('Working with  web table another way chatGPT- clicking next page links', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const rows = page.locator('#productTable tbody tr');

    const allRows = await rows.all();

    for (const row of allRows) {
        const cells = await row.locator('td').allInnerTexts();
        console.log(cells);
    }
    await page.close();
});

test.only('Working with  web table another way chatGPT- clicking next page links', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const column = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    const pages = page.locator('#pagination li a');
    const totalPages = await pages.count();
    console.log("Total No of pages: " + totalPages);

    for (let p = 0; p < totalPages; p++) {
        if (p > 0) {
            await pages.nth(p).click()
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const rowData = row.locator('td');
            for (let j = 0; j < await rowData.count(); j++) {
                const cellContent = await rowData.nth(j).innerText();
                console.log(cellContent.trim());
            }
        }
    }
});