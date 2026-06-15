import { test, expect } from '@playwright/test';

test('Frames Handling Using Page.Frame()', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    // To find the total No.Of Frames
    const allFrames = page.frames();
    const allFramesCount = allFrames.length;
    console.log('Total No.of Frames: ' + allFramesCount);
    const frame1 = page.frame({ url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1?.locator('input[name="mytext1"]').fill('WORKING WITH PLAYWRIGHT');
    await page.waitForTimeout(2000);
    await page.close();
});

test('Frames Handling Using Page.FrameLocator', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame1 = page.frameLocator('frame[src="frame_1.html"]');

    await frame1?.locator('input[name="mytext1"]').fill('WORKING WITH UDEMY');

    await page.waitForTimeout(2000);
    await page.close();
});


