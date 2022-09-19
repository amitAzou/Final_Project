const puppeteer = require('puppeteer')
puppeteer
  .launch({
    headless: true,
    args: [
      '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"',
    ],
  })
  .then(async (browser) => {
    const page = await browser.newPage()
    await page.goto('https://www.nytimes.com/')
    await page.waitForSelector('body')
    var rposts = await page.evaluate(() => {
      let posts = document.body.querySelectorAll('.assetWrapper')
      let postItems = []
      posts.forEach((item) => {
        let title = ''
        let summary = ''
        let link = ''
        try {
          title = item.querySelector('h2').innerText
          if (title != '') {
            summary = item.querySelector('p').innerText
            link = item.querySelector('a').href
            postItems.push({title: title, link: link, summary: summary})
          }
        } catch (e) {
          console.error(e)
        }
      })

      var items = {
        posts: postItems,
      }
      return items
    })
    console.log(rposts)
    await browser.close()
  })
  .catch(function (error) {
    console.error(error)
  })
