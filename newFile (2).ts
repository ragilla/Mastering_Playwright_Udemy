import { test, expect } from '@playwright/test';

test("Get User Details Using GET api method", async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');

    var responseJson = await response.json();
    console.log(responseJson);
    expect(response.status()).toBe(200);
});