import { test, expect, APIResponse } from '@playwright/test';

test('API data used for UI validation', async ({ request, page }) => {

    // 🔹 Step 1: Call API
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    expect(response.status()).toBe(200);

    const user = await response.json();

    // Extract required data
    const userName = user.name;
    const userEmail = user.email;

    console.log('API User:', userName, userEmail);

    // 🔹 Step 2: Navigate to UI
    await page.goto('https://example.com'); // replace with real app

    // 🔹 Step 3: Use API data as input in UI
    await page.fill('#searchBox', userName);
    await page.click('#searchBtn');

    // 🔹 Step 4: Validate UI using API data
    await expect(page.locator('.user-name')).toHaveText(userName);
    await expect(page.locator('.user-email')).toHaveText(userEmail);
});