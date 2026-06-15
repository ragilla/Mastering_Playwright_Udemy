// PUT → Used to completely update or replace an existing resource on the server. 

import { test, expect } from '@playwright/test';

test('Create a user using POST api', async ({ request }) => {

    var user = {
        userId: 1,
        id: 101,
        title: "Software Test Functional Engineers",
        body: " Learning POST API testing"
    }

    // POST api
    const postResponse = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: user,
        headers: { "Accept": "applications/JSON" }
    });

    expect(postResponse.status()).toBe(201);
    const postBody = await postResponse.json();
    console.log(postBody);

    expect(postBody.userId).toBe(user.userId);
    expect(postBody.id).toBe(user.id);
    expect(postBody.title).toBe(`${user.title}`);
    expect(postBody.body).toBe(`${user.body}`);
    
    //DELETE api
    const deleteResponse = await request.delete(`https://jsonplaceholder.typicode.com/posts/${user.userId}`);
    const deleteBody = await deleteResponse.json();
    console.log(deleteBody);
    expect(deleteResponse.status()).toBe(200);
});