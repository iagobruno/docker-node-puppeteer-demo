const test = require('japa')
const puppeteer = require('puppeteer')
const fetch = require('node-fetch')

const server_base_url = `http://localhost:${process.env.PORT}`

test.group('Puppeteer', (group) => {
  /** @type import('puppeteer').Browser */
  let browser

  group.after(async () => {
    await browser?.close()
  })

  test('Should be able to launch and visit pages', async (assert) => {
    browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser',
      args: ['--no-sandbox', '--disable-gpu'],
    })

    const page = await browser.newPage()
    await page.goto(`${server_base_url}/get-source?url=https://github.com`)
    const content = await page.content()

    assert.include(content, 'Where the world builds software')
  })
    .timeout(20_000)

})


test.group('http://localhost/get-source', () => {

  test('Should return page source from url', async (assert) => {
    const content = await fetch(`${server_base_url}/get-source?url=https://github.com`)
      .then(res => res.text())

    assert.include(content, 'Where the world builds software')
  })
    .timeout(20_000)

})
