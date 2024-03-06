const {test,expect} =require('@playwright/test')
const exp= require('constants')
test('Demologin',async({page})=>{
await page.goto('https://demo.applitools.com/')
await page.locator('[id="username"]').fill('Dharma')
await page.locator('[id="password"]').fill('pass')
await page.locator('[id="log-in"]').click()
await page.waitForTimeout(3000)
})