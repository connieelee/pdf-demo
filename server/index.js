const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/report-pdfs', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}`);
    await page.evaluate(report => {
      window.renderReport(report);
    }, req.body);

    const pdf = await page.pdf({ printBackground: true });
    res.contentType('application/pdf');
    res.send(pdf);
  
    await browser.close();
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`Ready to make PDFs on port ${PORT}`);
});
