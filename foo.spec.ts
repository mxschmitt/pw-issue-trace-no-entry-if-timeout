import {test} from '@playwright/test'

test("foo", async ({ page }) => {
  await page.goto("https://google.com")
  await page.click("text=Where?!?")
})