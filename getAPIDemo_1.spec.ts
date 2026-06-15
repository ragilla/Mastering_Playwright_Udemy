import { test, expect } from '@playwright/test';

test('GET users', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('email');
    expect(body[0].id).toBe(1);
    expect(body[0].username).toBe('Bret');
    expect(body[0].address.city).toBe('Gwenborough');
});