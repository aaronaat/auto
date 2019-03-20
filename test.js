
const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    let data = [];


    await page.goto('http://books.toscrape.com/');
    await page.waitFor(1000);

    const result = await page.evaluate(() => {

        let elements = document.querySelectorAll('img');
        let e = [];

        elements.forEach(element => {
            let alt = element.getAttribute('alt');
            let src = element.getAttribute('src');
            e.push(p);
          });

        // let title = elements().innerText;
        // let price = document.querySelector('.price_color').innerText;

        return {
          e
        }

    });

    browser.close();
    return result;
};

scrape().then((value) => {
    console.log(value); // Success!
});
