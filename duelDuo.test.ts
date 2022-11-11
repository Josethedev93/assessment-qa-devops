
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(1000);
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(1000);
    await driver.findElement(By.xpath('(//button[text()="Add to Duo"])')).click()
    await driver.sleep(1000);
})