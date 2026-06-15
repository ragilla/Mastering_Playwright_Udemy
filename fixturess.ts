// fixtures.ts
import { test as base } from '@playwright/test';

type MyFixtures = {
    loggedInPage: any;
};

export const test = base.extend<MyFixtures>({
    loggedInPage: async ({ page }, use) => {
        // Setup: login
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        // Provide fixture to test
        await use(page);

        // Teardown (optional)
        await page.close();
    },
});
export { expect } from '@playwright/test';