import { test, expect } from '@playwright/test';
test('FlipKart Demo My Practise', async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    await page.locator("//span[@class='b3wTlE']").click();
    
    await page.fill('input[name="q"]', 'iPhone 17');
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);

    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//div[@class='RG5Slk']").first().click()
    ]);
    // Wait for new tab to load
    await newTab.waitForLoadState();
    const price = await newTab.locator("//div[@class='v1zwn21m v1zwn20 _1psv1zeb9 _1psv1ze0']").first().textContent();
    console.log("Price of the laptop: " + price);
    await page.close();
});