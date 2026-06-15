import { test, expect } from '@playwright/test';
/*test.skip('Skipping a Test', async () => {
    console.log('I am a skipped Test');
})


test('Skipping a Test with an condition', async ({ page, browserName }) => {
    test.skip(browserName ==='webkit','test condition for skipping');
    console.log('Test with Skip Condition');
})*/

test('Not yet ready test', async () => {
    test.fail();
})

test('Skipping a Test with an condition', async ({ page, browserName }) => {
    test.fail(browserName === 'webkit', 'test condition for skipping');
    console.log('Test with Skip Condition');
})
test('Test . ONLY', async () => {
        console.log('TEST DOT ONLY');
})

