import AxeBuilder from '@axe-core/webdriverjs'
import WebDriver, { By, Builder, until } from 'selenium-webdriver'

/** 
 * Note: @types/axe-webdriverjs": "^2.3.0" is deprecated. 
 * Typescript config set noImplicitAny to false
*/

const browser = 'firefox' //chrome

;(async () => {
  /** Build & Navigate to URL */
  const driver: WebDriver.ThenableWebDriver = new Builder()
    .forBrowser(browser)
    .build()
  await driver.get('https://dequeuniversity.com/demo/mars/')

  /** Analyze active page */
  const axe: any = new AxeBuilder(driver)
  await axe.analyze(function (err, results) {
    if (err) {
      console.error(err)
    }
    console.log(results)
  })

  /** Wait for element is visable */
  const logoElement: WebDriver.WebElement = await driver.findElement(
    By.id('logo')
  )
  await driver.wait(until.elementIsVisible(logoElement))

  /** Quit Browser */
  await driver.quit()
})()
