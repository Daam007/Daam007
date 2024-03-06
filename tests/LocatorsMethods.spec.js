const {test,expect} =require('@playwright/test')
const exp =require('constants')
// getByAltText
// getByLabel
// getByPlaceholder
// getByRole
// getByTestId
// getByText
// getByTitle
// locator
test("GetByAlttext",async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    await expect(page).toHaveURL('https://letcode.in/test#google_vignette'); 
    let ele =await page.getByAltText('letcode')
    await expect(page.getByAltText('letcode')).toBeVisible()
    await expect(ele).toBeVisible()
})
test('getByLabel',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele1 = await page.getByLabel('main navigation')
    await expect(page.getByLabel('main navigation')).toBeVisible()
    await expect(ele1).toBeVisible()
    let ele2 =await page.getByLabel('Advertisement').first()
    await expect(ele2).toBeVisible()

})
test('getByPlaceholder',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele3= await page.getByPlaceholder('Enter first & last name')
    await expect(page.getByPlaceholder('Enter first & last name')).toBeHidden()
    await expect(ele3).toBeHidden()
    await page.waitForTimeout(4000)


})
test('getByRole',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await page.getByRole('checkbox',{name:"Option 1"}).check()
})

test('getByText',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    let ele4= await page.getByTestId('WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))')
    await expect(ele4).toBeHidden()//visible
    await expect(page.getByText('WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s)')).toBeVisible()
})
test('getByTitle',async({page})=>{
    await page.goto('https://letcode.in/radio')
    //let ele5= await page.getByTitle(' Practice and become pro in test automation')
   // await expect(ele5).toHaveText(' Practice and become pro in test automation')
    //await expect(ele5).toBeVisible()
    let ele4 = await page.getByTitle('Koushik Chatterjee')
    await expect(ele5).toHaveText(' Koushik Chatterjee ')
    await expect(ele5).toBeVisible()

})
test('Verify getByTitle in playwright',async({page})=>{
    await page.goto('https://letcode.in/radio')
    let ele6 = await page.getByTitle('Advertisement').first()
    await expect(ele6).toBeVisible()
})


test.only('Verify getByTestId method in playwright',async({page})=>{
    await page.goto('https://www.atlassian.com/')
    await page.getByTestId('global-nav-search-icon').click()
    await expect(page.locator('#global-nav-search-input')).toBeVisible()
    await page.waitForTimeout(5000)
})