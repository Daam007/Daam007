import {test, expect} from '@playwright/test'

test('login',async({page}) =>{
    await page.goto('https://www.saucedemo.com/v1/')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
    await expect(page.locator('#item_4_title_link')).toHaveText('Sauce Labs Backpack')
    await expect(page.locator('.product_label')).toHaveText('Products')
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
    await page.waitForTimeout(4000)
    
})

test('logout',async({page}) =>{
    await page.goto('https://www.saucedemo.com/v1/')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
    await page.locator('text=Open Menu').click()
    await page.locator('#logout_sidebar_link').click()
    await page.pause()
})