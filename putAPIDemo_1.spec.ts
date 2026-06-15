// PUT → Used to completely update or replace an existing resource on the server. 


import { test, expect } from '@playwright/test';

test('Create a user using POST api', async ({ request }) => {

    var user = {
        userId: 1,
        id: 101,
        title: "Software Test Functional Engineers",
        body: " Learning POST API testing"
    }
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

    var updateUser = {
        userId: 2,
        id: 201,
        title: "Software Test Automation Engineers",
        body: " Learning PUT API testing"
    }

    const putResponse = await request.put(`https://jsonplaceholder.typicode.com/posts/${user.userId}`, {
        data: updateUser,
        headers: { "Accept": "applications/JSON" }
    });
    expect(putResponse.status()).toBe(200);
    const putBody = await putResponse.json();
    console.log(putBody);

    expect(putBody.userId).toBe(updateUser.userId);
    //expect(putBody.id).toBe(updateUser.id); // since this is MOCK API does not update data on the server
    expect(putBody.title).toBe(`${updateUser.title}`);
    expect(putBody.body).toBe(`${updateUser.body}`);

});


