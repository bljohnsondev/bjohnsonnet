import { promises as fs } from 'node:fs';
import path from 'node:path';
import { type Browser, chromium } from 'playwright-chromium';

async function generatePdf(url: string, filename: string) {
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

const args = process.argv.slice(2);

if (args.length < 1) {
  console.log('resume requires the URL and filename:\ngen-resume http://localhost:3000/resume brentjohnson_resume.pdf');
  process.exit(1);
}

generatePdf(args[0], args[1]);
