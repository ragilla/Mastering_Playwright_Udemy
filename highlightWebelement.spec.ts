import { test, expect } from '@playwright/test';

test('Highlight element', async ({ page }) => {
    //await page.goto('https://example.com');
    await page.goto('https://www.hyrtutorials.com/p/add-padding-to-containers.html');
    await page.mouse.wheel(0, 800);

    //const element = page.locator('//input[@maxlength!=10]');
    //const element = page.locator("//table[@id='contactList']/tbody/tr[2]");
    //const element = page.locator("(//table[@id='contactList']/tbody/tr/td)[23]");
    //const element = page.locator("(//table[@id='contactList']/tbody/tr/td)[15]");

    /*
        XPath functions    

        Text            Normalize-space
        Contains        Last
        Starts-with     Position
    
    const element = page.locator("//a[text()='Sign in']");
    const element = page.locator("//h1[text()='Register']");
    const element = page.locator("//div[contains(@class='sign in')]");
    const element = page.locator("//a[starts-with(text(),'Sign in into')]");
    const element = page.locator("//label[normalize-space(text())='First Name']");
    const element = page.locator("(//table[@id='contactList']/tbody/tr)[last()]");
    const element = page.locator("(//table[@id='contactList']/tbody/tr)[position()=3]");

    */


   /*
        XPath Axes

         following-sibling   
         preceding-sibling


    */

    //await element.highlight();
    //const element = page.locator("//label[text()='Email']/following-sibling::input[@type='text']");
    //const element = page.locator("//td[text()='Francisco Chang']/preceding-sibling::td/child::input").click();
    //const element = page.locator("//td[text()='Helen Bennett']/parent::tr")
    //const element = page.locator("//label[text()='Password']/following::input[1]")
    const element = page.locator("//label[text()='Password']/preceding::input[1]")

    await element.evaluate((el) => {
        (el as HTMLElement).style.border = '3px solid red'; 
        (el as HTMLElement).style.backgroundColor = 'yellow';
    });
    await page.waitForTimeout(5000);
}); 