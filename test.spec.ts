// test.spec.ts
import { test, expect } from './fixturess';

test('Verify inventory page', async ({ loggedInPage }) => {
    await expect(loggedInPage).toHaveURL(/inventory/);
});