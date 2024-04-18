import { expect, test } from '@playwright/test';

test('basic test', async ({ page }) => {
	await page.goto('http://localhost:3000');
	const title = await page.textContent('h1');
	expect(title).toBe('Hello world!');
});
