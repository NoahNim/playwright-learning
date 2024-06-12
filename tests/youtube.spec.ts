import { test, expect, request } from '@playwright/test';

test.describe('Youtube Tests', async () => {
    test('Youtube loads', async ({ page }) => {
        const res = await page.request.get('https://www.youtube.com/');
        await expect(res).toBeOK();
    }); 

    test('Youtube has title', async ({ page }) => {
        await page.goto('https://www.youtube.com/');

        await expect(page).toHaveTitle("YouTube");
    });
    
    test('Youtube has search', async ({page}) => {
        await page.goto('https://www.youtube.com/');

        await expect(page.getByRole("search")).toBeVisible();
    });

    test('Youtube search API works', async ({page}) => {
       const res = (await (await request.newContext()).get('https://www.youtube.com/results?search_query=cat')).status();

       await expect(res).toBe(200);
    });
})