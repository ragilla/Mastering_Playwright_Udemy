import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('laptop');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter');
  await page.getByRole('link', { name: 'laptop in Laptops' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'ASUS Chromebook CX14 Intel Celeron Dual Core N50 - (4 GB/64 GB EMMC Storage/' }).click();
  const page1 = await page1Promise;
  await page1.locator('a').filter({ hasText: /^22%22,990₹17,990$/ }).click();
  await page1.locator('._1psv1zeb9._1o6mltljo._1psv1ze9f').click();
});