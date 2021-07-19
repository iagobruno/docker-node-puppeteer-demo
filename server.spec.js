const puppeteer = require('puppeteer')


async function test() {
  console.log('Running tests...')

  let browser

  try {
    browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser',
      args: ['--no-sandbox', '--disable-gpu'],
    })

    const page = await browser.newPage()

    await page.goto('http://localhost:3000')

    const html = await page.content()

    console.assert(html.includes('Hello world!'), 'Deve retornar "Hello world!"')

    console.log('✅ All tests passed.')
  }
  catch(err) {
    throw err
  }
  finally {
    if (browser) await browser.close()
  }
}

test()
