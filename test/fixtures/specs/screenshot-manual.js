const expect = require('chai').expect
const fs = require('fs')

suite('A Screenshot suite', () => {
    test('A Screenshot test', () => {
        browser.url('https://www.google.com')
        var screenshotName = 'sample.png'
        var screenshot = browser.saveScreenshot(screenshotName)
        fs.writeFileSync(screenshotName,screenshot)
        fs.unlinkSync(screenshotName)
    })
})
