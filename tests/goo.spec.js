import {test,expect} from "@playwright/test"
test('go',async({page}){
    await page.goto('https://www.google.com/')
    await page.getByText('Submit').press('Enter');
})