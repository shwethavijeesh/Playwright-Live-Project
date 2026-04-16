const data=JSON.parse((JSON.stringify(require('../utils/testdata.json'))))
//const dataset = require('../utils/invalidLogindata.json')
const Loginscenarios = require('../pages/logincases.js')
const PurchaseProduct = require('../pages/purchase.js')
const {test} = require('../utils/fixture.js')
const {expect} = require("@playwright/test")
/*test.beforeEach(async({page})=>{
  await page.goto("https://demoblaze.com/")
})*/
test("Purchase Add Cart Phone",async({login,page})=>{
    //const loginobj=new Loginscenarios(page);
   // await loginobj.clickLogin()
    //await loginobj.enterCredentials(data.username,data.password)
   // await loginobj.validloginButton()


    const purchaseobj=new PurchaseProduct(page);
    await purchaseobj.choosePhone()
    await purchaseobj.selectProductPhn()
    //await purchaseobj.addCartPopupPhn()
    const message1 = await purchaseobj.addCartPopupPhn();
    expect(message1).toContain('Product added.');
   
    //console.log(await(loginobj.welcomeUser).textContent());
    

})

test("Purchase Add Cart Monitor",async({login,page})=>{
    //const loginobj=new Loginscenarios(page);
    //await loginobj.clickLogin()
    //await loginobj.enterCredentials(data.username,data.password)
    //await loginobj.validloginButton()


    const purchaseobj=new PurchaseProduct(page);
    await purchaseobj.chooseMonitor()
    await purchaseobj.selectProductMontr()
    //await purchaseobj.addCartPopupMontr()
    const message2 = await purchaseobj.addCartPopupMontr();
    expect(message2).toContain('Product added.');
   
    //console.log(await(loginobj.welcomeUser).textContent());
    

})