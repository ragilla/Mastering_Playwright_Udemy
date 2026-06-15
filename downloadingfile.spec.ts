import { test, expect } from '@playwright/test';
test('Downloading a file', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/FileDownload.html');
    await page.locator('//*[@id="textbox"]').click();
    await page.locator('//*[@id="textbox"]').pressSequentially("Demo of downloading a file - MUNINDHAR RAGILLA");
    await page.locator('#createTxt').click();

    const downLoad = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#link-to-download').click()

    ])
    const path = await downLoad[0].path();
    console.log("downloaded path:" + path);

    //Option -1 default name
    //const fileName = downLoad[0].suggestedFilename();
    //await downLoad[0].saveAs(fileName);

    //Option -2 customized file name
    const customizedfileName = "playwright_file";
    await downLoad[0].saveAs(customizedfileName);

})