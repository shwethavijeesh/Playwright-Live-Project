import test, { expect } from "playwright/test";
const data=JSON.parse((JSON.stringify(require('../utils/testdata.json'))))
const dataset = require('../utils/invalidLogindata.json')
const Loginscenarios = require('../pages/logincases')

test.beforeEach(async({page})=>{
  await page.goto("https://demoblaze.com/")
})
test("Login with valid credentials",async({page})=>{

    const loginobj=new Loginscenarios(page);
    await loginobj.clickLogin()
    await loginobj.enterCredentials(data.username,data.password)
    await loginobj.validloginButton()
    await loginobj.welcomeUser.waitFor();
    //await page.screenshot({ path: 'screenshot/loginsuccess.png' });
    await expect(loginobj.welcomeUser).toHaveText('Welcome '+data.username);
    console.log(await(loginobj.welcomeUser).textContent());//not recommended debugging purpose
    

})
for(const datanew of dataset){
test.only(`Invalid login for ${datanew.username}`,async({page})=>{

    const logininv=new Loginscenarios(page);
    await logininv.clickLogin()
    await logininv.enterCredentials(datanew.username,datanew.password)
    await logininv.invalidloginButton()
    //await page.screenshot({ path: 'screenshot/loginfail.png' });
    //await logininv.welcomeUser.waitFor();
    //await page.screenshot({ path: 'screenshot/loginsuccess.png' });
    await expect(logininv.welcomeUser).not.toBeVisible();
    //await expect(logininv.welcomeUser).toBeHidden();
   
  
   

})
}