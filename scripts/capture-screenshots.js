import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const screenshotDir = path.resolve(__dirname, '../public/screenshots');
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function run() {
  console.log('[Screenshots] Launching headless Edge...');
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--window-size=1280,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', err => {
    consoleErrors.push(err.message);
  });

  console.log('[Screenshots] Navigating to http://127.0.0.1:5173/ ...');
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle0' });

  // Wait for loader to fade out (300ms)
  await new Promise(r => setTimeout(r, 600));

  console.log('[Screenshots] Capturing Dark Mode Hero...');
  await page.screenshot({ path: path.join(screenshotDir, 'dark-hero.png') });

  console.log('[Screenshots] Scrolling to Projects section...');
  await page.evaluate(() => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 400));
  console.log('[Screenshots] Capturing Dark Mode Projects...');
  await page.screenshot({ path: path.join(screenshotDir, 'dark-projects.png') });

  console.log('[Screenshots] Scrolling to Contact section...');
  await page.evaluate(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 400));
  console.log('[Screenshots] Capturing Dark Mode Contact...');
  await page.screenshot({ path: path.join(screenshotDir, 'dark-contact.png') });

  // Test toggling 5 times
  console.log('[Screenshots] Testing Theme Toggle 5 times...');
  for (let i = 0; i < 5; i++) {
    await page.click('#theme-toggle-btn');
    await new Promise(r => setTimeout(r, 100));
  }

  // Ensure Light mode is active
  const isLight = await page.evaluate(() => {
    return document.documentElement.classList.contains('light');
  });

  if (!isLight) {
    await page.click('#theme-toggle-btn');
    await new Promise(r => setTimeout(r, 200));
  }

  console.log('[Screenshots] Light mode confirmed active. Capturing Light Mode...');
  // Scroll to Hero
  await page.evaluate(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 400));
  console.log('[Screenshots] Capturing Light Mode Hero...');
  await page.screenshot({ path: path.join(screenshotDir, 'light-hero.png') });

  // Scroll to Projects
  await page.evaluate(() => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 400));
  console.log('[Screenshots] Capturing Light Mode Projects...');
  await page.screenshot({ path: path.join(screenshotDir, 'light-projects.png') });

  // Scroll to Contact
  await page.evaluate(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 400));
  console.log('[Screenshots] Capturing Light Mode Contact...');
  await page.screenshot({ path: path.join(screenshotDir, 'light-contact.png') });

  // Test Refresh and persistence
  console.log('[Screenshots] Refreshing page to verify persistence...');
  await page.reload({ waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));

  const persistentTheme = await page.evaluate(() => {
    return {
      class: document.documentElement.className,
      dataTheme: document.documentElement.getAttribute('data-theme'),
      localStore: localStorage.getItem('theme'),
      bodyBg: window.getComputedStyle(document.body).backgroundColor
    };
  });

  console.log('[Screenshots] Persistent Theme Data:', persistentTheme);

  // Test Mobile Breakpoint (375px)
  console.log('[Screenshots] Testing Mobile Breakpoint (375x812)...');
  await page.setViewport({ width: 375, height: 812 });
  await page.evaluate(() => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: path.join(screenshotDir, 'mobile-hero.png') });

  // Test Mobile Menu drawer
  await page.click('#mobile-menu-toggle-btn');
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({ path: path.join(screenshotDir, 'mobile-menu.png') });

  console.log('[Screenshots] Console Errors:', consoleErrors);
  console.log('[Screenshots] All screenshots captured successfully in public/screenshots!');

  await browser.close();
}

run().catch(err => {
  console.error('[Screenshots Error]', err);
  process.exit(1);
});
