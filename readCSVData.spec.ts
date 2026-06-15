import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const orangeHrmData = parse(
    fs.readFileSync(
        path.join(__dirname, 'testData', 'orangeHRMCred.csv'),
        'utf-8'
    ),
    {
        columns: true,
        skip_empty_lines: true,
    }
);

test('Login Test with valid credentials using .csv file', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@placeholder="Username"]').fill(orangeHrmData[0].username);
    await page.locator('//input[@placeholder="Password"]').fill(orangeHrmData[0].password);
    await page.locator('//button[normalize-space()="Login"]').click();
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('//a[normalize-space()="Logout"]').click();
});

test('Login Test with Invalid credentials using .csv file', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@placeholder="Username"]').fill(orangeHrmData[1].username);
    await page.locator('//input[@placeholder="Password"]').fill(orangeHrmData[1].password);
    await page.locator('//button[normalize-space()="Login"]').click();
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('//a[normalize-space()="Logout"]').click();
});