import { test, expect, Locator, Page } from '@playwright/test';
import { count } from 'console';
import { console } from 'inspector/promises';
test('Hangle Web Tables', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('table[name="BookTable"]');

    const columns = table.locator('tr th');
    console.log("No Of Columns", await columns.count());
    
    const rows = table.locator('tbody tr');
    console.log("No Of rows", await rows.count());

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(7);

    await page.close();
})

test('webtable with selection', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    //const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })

    await matchedRow.locator('input').check();

    await page.pause();

    await page.close();
})

test('webtable with multiple selection', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    await selectProduct(rows, page, 'Tablet');
    await selectProduct(rows, page, 'Smartwatch');
    await selectProduct(rows, page, 'Smartphone');
    await selectProduct(rows, page, 'Laptop');
        
    await page.pause();
    await page.close();

    async function selectProduct(rows: Locator, page: Page, productName: string) {
        const matchedRow = rows.filter({
            has: page.locator('td'),
            hasText: productName
        })
        await matchedRow.locator('input').check();
    }

})
test('Pagination Table all the items for Page-1', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const cells = row.locator('td');

        let rowValues: string[] = [];

        for (let j = 0; j < await cells.count(); j++) {
            const text = (await cells.nth(j).textContent())?.trim();
            rowValues.push(text || "");
        }

        console.log(rowValues.join(" | ")); // print row in one line
    }
    await page.close();
})


test.only('Pagination Table all the items for ALL Page', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');
    const pages = table.locator('#pagination li a');
    const totalPages = await pages.count();
    console.log('Total No of Pages: ' + totalPages);

    for (let p = 0; p < await totalPages; p++) {
        if (p > 0) {
            await pages.nth(p).click();
            await page.waitForTimeout(500);
        }
        console.log(`\n---- Page ${p + 1} ----`);
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const rowData = row.locator('td');
            for (let j = 0; j < await rowData.count(); j++) {
                const cellContent = await rowData.nth(j).textContent();
                console.log(cellContent);
            }
            await page.waitForTimeout(500);
        }
    }
    await page.close();
})


