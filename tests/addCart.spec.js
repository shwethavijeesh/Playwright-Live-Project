//import test, { expect } from "playwright/test";
const data=JSON.parse((JSON.stringify(require('../utils/testdata.json'))))
//const dataset = require('../utils/invalidLogindata.json')
const Loginscenarios = require('../pages/logincases.js')
const AddCart = require('../pages/cartAdd.js')
const {test} = require('../utils/fixture.js')
const {expect} = require("@playwright/test")
/*test.beforeEach(async({page})=>{
  await page.goto("https://demoblaze.com/")
})*/
test("Add to Cart",async({login,page})=>{
    //const loginobj=new Loginscenarios(page);
    //await loginobj.clickLogin()
    //await loginobj.enterCredentials(data.username,data.password)
    //await loginobj.validloginButton()


    const addcartt=new AddCart(page);
    await addcartt.selectProduct()
    await addcartt.addCartPopup()
    const message = await addcartt.addCartPopup();
    expect(message).toContain('Product added.');
   
    //console.log(await(loginobj.welcomeUser).textContent());
    

})