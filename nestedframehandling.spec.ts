import { test, expect } from '@playwright/test';

test('Nested Frame Handling', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });

    
    //const childFrames = frame3?.childFrames();
   // console.log('No Of child Frames' + childFrames?.length);

    //await childFrames[0].locator('//*[@id="i21"]/div[3]').check({ force: true });
    const checkbox = page
        .frameLocator('iframe[src="frame_3.html"]')
        .locator('//*[@id="i21"]/div[3]');

    await checkbox.check();
    await expect(checkbox).toBeChecked();
    
    await page.waitForTimeout(2000);
    await page.close();
});


