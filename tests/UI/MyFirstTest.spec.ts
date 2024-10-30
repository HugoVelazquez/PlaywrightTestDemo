import { test, expect } from '@playwright/test';

const Pagename = 'PlaywrightCom';

test('test', async ({ page }, testInfo ) => {
  const projectName = testInfo.project.name;

  await page.goto('https://www.google.com/');
  await page.getByLabel('Buscar', { exact: true }).click();
  await page.getByLabel('Buscar', { exact: true }).click();
  await page.getByLabel('Buscar', { exact: true }).fill('Playwright test step by step');
  await page.goto('https://www.google.com/search?q=Playwright+test+step+by+step&sca_esv=3f48a25a88a0a09a&source=hp&ei=fyQgZ5a2JJ3BkPIP7PHTkQs&iflsig=AL9hbdgAAAAAZyAyj4-VPG0G6nUmTSHOKcdlg5-TDeMl&ved=0ahUKEwjW8a-no7KJAxWdIEQIHez4NLIQ4dUDCA0&uact=5&oq=Playwright+test+step+by+step&gs_lp=Egdnd3Mtd2l6IhxQbGF5d3JpZ2h0IHRlc3Qgc3RlcCBieSBzdGVwMgYQABgWGB4yCBAAGIAEGKIEMggQABiABBiiBEjZ2QFQsW9Yu9UBcAd4AJABAZgB4AGgAdYeqgEGNC4yNi4xuAEDyAEA-AEBmAIloALaHqgCCsICEBAAGAMY5QIY6gIYjAMYjwHCAhAQLhgDGOUCGOoCGIwDGI8BwgILEAAYgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICDhAuGIAEGLEDGNEDGMcBwgIFEAAYgATCAggQABiABBixA8ICERAuGIAEGLEDGNEDGIMBGMcBwgIIEC4YgAQYsQPCAgsQLhiABBjRAxjHAcICBxAAGIAEGArCAgoQABiABBixAxgKwgIHEC4YgAQYCsICBxAAGIAEGBPCAggQABgTGBYYHsICCBAAGAgYDRgemAMRkgcEOS4yOKAH9JoB&sclient=gws-wiz');
  await page.getByRole('link', { name: 'TestStep Playwright https://' }).click();
  await expect(page.getByRole('article')).toContainText('number');

  await page.screenshot({ path: `test-results/screenshots/${Pagename}${projectName}${Date.now().toString()}.jpg` })
});