import { test, expect } from '@playwright/test';
test('Single Drop down', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption('#multi-select', [
        { value: "Ohio" },
        { value: "Texas" },
        { value: "Florida" },
        { value: "Washington" }
        //{ label: "Texas" },
        //{ index: 3 }
    ])

    await page.pause();
    await page.close();


})