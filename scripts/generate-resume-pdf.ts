import { promises as fs } from 'node:fs';
import path from 'node:path';
import { type Browser, chromium } from 'playwright-chromium';

const url = 'http://localhost:3000/resume';
//const url = 'http://localhost:3000/resume-ats';

const filename = 'brentjohnson_resume.pdf';
//const filename = 'brentjohnson_resume_ats.pdf';

async function generatePdf() {
  let browser: Browser | undefined;

  try {
    // note: the server does need to be started manually prior to generating
    // I could add calls to start the server via execa, generate the pdf, then stop the server
    browser = await chromium.launch();

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });

    const pdfPath = path.join(process.cwd(), 'public', filename);
    await fs.mkdir(path.dirname(pdfPath), { recursive: true });

    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });

    console.log(`PDF generated at ${pdfPath}`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
    // if I used execa or something to start the server I should stop it here
  }
}

generatePdf();
