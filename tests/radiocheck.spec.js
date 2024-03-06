import { test, expect } from '@playwright/test'
import exp from 'constants'
test('Radio button', async ({ page }) => {
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-7-1')).not.toBeChecked()
    await page.locator('#vfb-7-1').check()
    await expect(page.locator('#vfb-7-1')).toBeChecked()
    await page.locator('#vfb-7-2').check()
    await expect(page.locator('#vfb-7-1')).not.toBeChecked()
    await page.waitForTimeout(4000)

})
test(' check box using click and check', async ({ page }) => {
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-6-0')).not.toBeChecked()
    await page.locator('#vfb-6-0').check()
    // await page.locator('#vfb-6-0').click()()
    await expect(page.locator('#vfb-6-0')).toBeChecked()
    await page.waitForTimeout(4000)

}
)
test.only('Mutiple checkbox check', async ({ page }) => {
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await page.locator('#vfb-6-0').check()
    await page.locator('#vfb-6-1').check()
    await page.locator('#vfb-6-2').check()
    await expect(page.locator('#vfb-6-0', '#vfb-6-1', '#vfb-6-2')).toBeChecked()
    await page.locator('#vfb-6-0').uncheck()
    await page.locator('#vfb-6-1').uncheck()
    await page.locator('#vfb-6-2').uncheck()
    await expect(page.locator('#vfb-6-0', '#vfb-6-1', '#vfb-6-2')).not.toBeChecked()
    await page.waitForTimeout(4000)

})
