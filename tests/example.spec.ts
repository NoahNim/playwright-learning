import {test, expect} from '@playwright/test';

test('has title', async({page}) => {
  await page.goto('https://playwright.dev/');

  // expect title to have substring
  await expect(page).toHaveTitle(/Playwright/);
})

test('get started link', async({page}) => {
  await page.goto('https://playwright.dev/');

  // click get started link
  await page.getByRole('link', { name: 'Get started' }).click();

  // expects page to have heading with name of installation
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
})

