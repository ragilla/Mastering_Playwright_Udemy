import { test, expect } from '@playwright/test';
test('POST user', async ({ request }) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
        data: {
            name: "Munindhar",
            username: "muni123",
            email: "muni@test.com"
        }
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    console.log(body);

});