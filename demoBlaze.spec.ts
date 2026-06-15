import { test } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

const fileContent = fs.readFileSync('./test-data/orangeHRMCred.csv', 'utf-8');

const testData = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
});

if (!testData.length) {
    throw new Error('CSV file is empty');
}

test.describe('Login Tests from CSV', () => {

    for (const data of testData) {

        test(`Login test for ${data.username}`, async ({ page }) => {

            await page.goto('https://opensource-demo.orangehrmlive.com');

            await page.getByPlaceholder('Username').fill(data.username);
            await page.getByPlaceholder('Password').fill(data.password);

            await page.getByRole('button', { name: 'Login' }).click();

        });

    }

});