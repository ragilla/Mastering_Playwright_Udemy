import { test, expect } from '@playwright/test';

test('Single Tab Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');
    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button:has-text("click")')
    ])
    await newTab.waitForLoadState();
    newTab.locator('.DocSearch-Button-Placeholder').click();
    newTab.locator('#docsearch-input').fill("Locator Stratagies");
    await page.waitForTimeout(5000);
    await page.close();
});
test('Single window Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');
    await page.locator('.analystic[href="#Seperate"]').click();

    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="newwindow()"]')
    ])
    await newWindow.waitForLoadState();
    newWindow.locator('.DocSearch-Button-Placeholder').click();
    newWindow.locator('#docsearch-input').fill("Locator Stratagies");
    await page.waitForTimeout(5000);
    await page.close();
});

test.only('Multiple Tab Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');
    await page.locator('.analystic[href="#Multiple"]').click();

    const [multipleTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="multiwindow()"]')
    ]);
    await multipleTab.waitForLoadState();
    const pages = multipleTab.context().pages();
    console.log("Total No Of pages:" + pages.length);

    await pages[1].locator('#email').fill('WORKING@GMAIL.COM');
    await multipleTab.waitForTimeout(5000);

    await pages[2].locator('.DocSearch-Button-Placeholder').click();
    await pages[2].locator('#docsearch-input').fill("Locator Stratagies");
    await multipleTab.waitForTimeout(5000);

    await pages[1].close();
    await pages[2].close();
});

