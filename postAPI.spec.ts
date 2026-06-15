import { test, expect } from '@playwright/test';

test('POST API Example', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            name: "Munindhar",
            job: "QA"
        }
    });
    console.log(await response.text()); // print raw response
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(201);
});