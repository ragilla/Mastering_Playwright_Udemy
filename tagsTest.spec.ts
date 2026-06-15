import { test, expect } from '@playwright/test';

//VERY IMPORTANT
// check the playwright.config.ts file for the configurations
// setting in the playwright.confit.ts file below

//grep: [new RegExp("@smoke"), new RegExp("@sanity"), new RegExp("@regression")],
test('login page test @smoke', async ({  }) => {
    console.log('THIS IS LOGIN PAGE TEST - SMOKE')
});

test('home page test @smoke', async ({  }) => {
    console.log('THIS IS HOME PAGE TEST-SMOKE')
});

test('payment page test @sanity', async ({  }) => {
    console.log('THIS IS PAYMENT PAGE TEST-SANITY')
});

test('check out page test @regression', async ({  }) => {
    console.log('THIS IS CHECK OUT PAGE TEST-REGRESSION')
});
    
test.only('check out page test', async ({ }) => {
    console.log('THIS IS NOT PART OF ANY TAGS')
});
