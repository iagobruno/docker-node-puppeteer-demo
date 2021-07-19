const express = require('express')
const puppeteer = require('puppeteer')

const app = express()
/** @type import('puppeteer').Browser */
let browser

app.get('/get-source', async (req, res) => {
  console.log(`Visiting "${req.query.url}"...`)

  const page = await browser.newPage()
  await page.goto(req.query.url)
  const pageSource = await page.content()
  await page.close()

  res.set('Content-Type', 'text/plain')
  res.send(pageSource)
})

async function bootstrap() {
  console.log('Starting...')

  browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
    args: ['--no-sandbox', '--disable-gpu'],
  })

  app.listen(process.env.PORT, () => {
    console.log(`🚀 App running on http://localhost:${process.env.PORT}`)
  })
}
bootstrap()


async function closeBrowser() {
  await (await browser)?.close()
}
//do something when app is closing
process.on('exit', closeBrowser)
//catches ctrl+c event
process.on('SIGINT', closeBrowser)
// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', closeBrowser)
process.on('SIGUSR2', closeBrowser)
