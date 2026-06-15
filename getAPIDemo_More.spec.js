import { test, expect, request } from '@playwright/test';

test('GET /users/{id} - Full API Validation', async () => {

 const apiContext = await request.newContext({
   baseURL: 'https://reqres.in/api'
 });

 const userId = 2;

 const startTime = Date.now();

 const response = await apiContext.get(`/users/${userId}`, {
   headers: {
     Authorization: 'Bearer valid_token'
   }
 });

 const endTime = Date.now();
 const responseTime = endTime - startTime;

 // RESPONSE STRUCTURE VALIDATION
 expect(response.status()).toBe(200);

 const body = await response.json();

 expect(body).toHaveProperty('data');
 expect(body.data).toMatchObject({
   id: expect.any(Number),
   email: expect.any(String),
   first_name: expect.any(String),
   last_name: expect.any(String),
   avatar: expect.any(String)
 });

 // Check no sensitive fields
 expect(body.data).not.toHaveProperty('password');
 expect(body.data).not.toHaveProperty('ssn');

 //PERFORMANCE VALIDATION
 console.log('Response Time:', responseTime);
 expect(responseTime).toBeLessThan(2000); // < 2 sec

 // SECURITY VALIDATION

 // Invalid token test
 const unauthorizedResponse = await apiContext.get(`/users/${userId}`, {
   headers: { Authorization: 'Bearer invalid_token' }
 });

 expect([401, 403]).toContain(unauthorizedResponse.status());


 // Invalid user ID
 const invalidResponse = await apiContext.get(`/users/9999`);
 expect(invalidResponse.status()).toBe(404);

 // Boundary / edge case
 const boundaryResponse = await apiContext.get(`/users/0`);
 expect(boundaryResponse.status()).toBeGreaterThanOrEqual(400);


 // Simulate UI validation
 const uiEmail = body.data.email;

 // In real test → fetch from UI using page.locator()
 expect(uiEmail).toContain('@reqres.in');

});
