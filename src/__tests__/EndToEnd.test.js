import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
      browser = await puppeteer.launch({
        headless: true,
        slowMo: 250, // slow down by 250ms
        timeout: 0 // removes any puppeteer/browser timeout limitations
      });
      page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.event');
    });
  
    afterAll(() => {
      browser.close();
    });
  
    test('An event element is collapsed by default', async () => {
      const details = await page.$('.event .event-details');
      expect(details).toBeNull();
    });
  
    test('User can expand an event to see details', async () => {
      await page.click('.event .showDetails-btn');
      const details = await page.$('.event .event-details');
      expect(details).toBeDefined();
    });

    test('User can collapse an event to hide details', async () => {
        await page.click('.event .showDetails-btn');
        const details = await page.$('.event .event-details');
        expect(details).toBeNull();
      });
});