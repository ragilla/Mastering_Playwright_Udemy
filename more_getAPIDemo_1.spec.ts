import { test, expect } from '@playwright/test';

test('GET users', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    const body = await response.json();
    console.log(body);

    const startTime = Date.now();
    const endTime = Date.now();
    const responseTime = endTime - startTime;

    //PERFORMANCE VALIDATION
    console.log('Response Time:', responseTime); // < 2 sec


    // RESPONSE STRUCTURE VALIDATION
    expect(response.status()).toBe(200);
    //expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('email');
    expect(body[0].id).toBe(1);
    expect(body[0].username).toBe('Bret');
    expect(body[0].address.city).toBe('Gwenborough');

  
    // Check no sensitive fields
    expect(body[0].email).not.toHaveProperty('password');
    expect(body[0].username).not.toHaveProperty('ssn');

    // Invalid token test
    const unauthorizedResponse = await request.get(`https://jsonplaceholder.typicode.com/users`, {
        headers: { Authorization: 'Bearer invalid_token' }
    });
    expect([401, 403]).toContain(unauthorizedResponse.status());

});