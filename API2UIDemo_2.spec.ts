import { test, expect, APIResponse } from '@playwright/test';

test('API data used for UI validation (real site)', async ({ request, page }) => {
    test.slow();

    // 🔹 Step 1: Call API
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    expect(response.status()).toBe(200);

    const user = await response.json();

    const userName= user.name;
    const userEmail = user.email;

    console.log('API User:', userName, userEmail);

    // 🔹 Step 2: Navigate to UI
    await page.goto('https://automationexercise.com/');

    // 🔹 Step 3: Go to Signup/Login page
    await page.click('a[href="/login"]');

    // 🔹 Step 4: Use API data in UI (login form)
    await page.fill('input[data-qa="login-email"]', userEmail);
    await page.fill('input[data-qa="login-password"]', 'dummyPassword');
    await page.click('button[data-qa="login-button"]');
    

    // 🔹 Step 5: Validation (negative scenario expected)
    await expect(page.locator('p')).toContainText('incorrect');
});