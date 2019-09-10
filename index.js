const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 250 // slow down by 250ms
    });
    const page = await browser.newPage();
    await page.goto('https://www.moneycontrol.com/financials/tatamotorsltddvr/balance-sheetVI/TATAM57000#TATAM57000');
    await page.screenshot({ path: 'example.png' });

    await browser.close();
})();