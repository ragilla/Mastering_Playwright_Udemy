import { test, expect } from '@playwright/test';

test('Flipkart iPhone 17 Search', async ({ browser }) => {

    // Launch browser
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to Flipkart
    await page.goto('https://www.flipkart.com/');

    // Close login popup if displayed
    const closeBtn = page.locator('button:has-text("✕")');

    if (await closeBtn.isVisible()) {
        await closeBtn.click();
    }

    // Search for iPhone 17
    await page.fill('input[name="q"]', 'iPhone 17');

    // Press Enter
    await page.keyboard.press('Enter');

    // Wait for products to load
    await page.waitForTimeout(3000);

    // Capture new tab while clicking first product
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),

        page.locator('a[target="_blank"]').first().click()
    ]);

    // Wait for new tab to load
    await newPage.waitForLoadState();

    // Get product price
    const productPrice = await newPage.locator('div._30jeq3').first().textContent();

    console.log('Product Price is:', productPrice);

    // Close browser
    await browser.close();

});