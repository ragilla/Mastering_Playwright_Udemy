import { test, expect } from '@playwright/test';

test('Locator strategy', async ({ page }) => {
    await page.goto('https://saucedemo.com/');
    await page.pause();

    });