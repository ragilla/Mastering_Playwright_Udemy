import { test, expect } from '@playwright/test';
import {DateTime} from 'luxon';
test('Calender handling using FILL method demo', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
    let date = '1993-10-18';
    await page.locator('#birthday').fill(date);
    await page.pause();
})
test.only('Calender handling using LUXON demo', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');

    // to Select Past date
    await page.locator('input[placeholder="Start date"]').click();
    await selectDate(20, "June 2019", page);
    await page.waitForTimeout(5000);
    await page.reload();
    

    // to Select Future date
    await page.locator('input[placeholder="Start date"]').click();
    await selectDate(20, "June 2025", page);
    await page.waitForTimeout(5000);
    await page.reload();
    

    // to Select Current date
    await page.locator('input[placeholder="Start date"]').click();
    await selectDate(17, "December 2025", page);
    await page.waitForTimeout(5000);
    await page.reload();
    
});
async function selectDate(date: Number, dateToSelect: String, page: any) {
        // Calender UI elements
        const monthYear = page.locator('div[class="datepicker-days"] th[class="datepicker-switch"]');
        const prevButton = page.locator('div[class="datepicker-days"] th[class="prev"]');
        const nextButton = page.locator('div[class="datepicker-days"] th[class="next"]');

        const formattedMonth = DateTime.fromFormat(dateToSelect, "MMMM yyyy");

        while (await monthYear.textContent() != dateToSelect) {
            if (formattedMonth < DateTime.fromJSDate(new Date())) {
                await prevButton.click();
            }
            else {
                await nextButton.click();
            }
        }
        await page.locator(`//td[@class="day"][text()="${date}"]`).click();
    }