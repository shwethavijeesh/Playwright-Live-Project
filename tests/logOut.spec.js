//import test, { expect } from "playwright/test";
const data=JSON.parse((JSON.stringify(require('../utils/testdata.json'))))
const Loginscenarios = require('../pages/logincases.js')
const Logout = require('../pages/logout.js')
const {test} = require('../utils/fixture.js')
const {expect} = require("@playwright/test")

/*test.beforeEach(async({page})=>{
  await page.goto("https://demoblaze.com/")
})*/

test("Login with valid credentials and logout",async({login,page})=>{

    //const loginobj=new Loginscenarios(page);
    //await loginobj.clickLogin()
    //await loginobj.enterCredentials(data.username,data.password)
    //await loginobj.validloginButton()

   /*await loginobj.welcomeUser.waitFor();
    await expect(loginobj.welcomeUser).toHaveText('Welcome '+data.username);
    console.log(await(loginobj.welcomeUser).textContent());//not recommended debugging purpose*/

    const logoutobj=new Logout(page);
    await logoutobj.logout()
    

})
