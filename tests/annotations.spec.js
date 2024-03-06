import {test,expect} from '@playwright/test'
test.skip('testone', async({page})=>{

})
test('not yet ready', async({page})=>{
    test.fail();
})
test.fixme('Fix me',async({page})=>{

})
test('slow test',async({page})=>{
    test.slow()
})
//test.only('Test only',async({page})=>{
    
//})
// Tags
test('Test login page @smoke',async({page})=>{

})