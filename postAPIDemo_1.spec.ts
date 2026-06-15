import { test, expect } from '@playwright/test';
var userId;

test('Create a user using POST api', async ({ request }) => {
    var user = {
        userId: 1,
        id: 101,
        title: "Software Test Automation Engineers",
        body: " Learning POST API testing"
     }
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: user,
        headers: {"ACCEPT":"applications/JSON"}
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    console.log(body);
    expect(body.userId).toBe(user.userId);
    expect(body.id).toBe(user.id);
    expect(body.title).toBe(`${user.title}`);
    expect(body.body).toBe(`${user.body}`);
    var userId = response.userId;
    console.log(body.userId);
});