import test, { expect } from "playwright/test";
const data=JSON.parse((JSON.stringify(require('../utils/testdata.json'))))
const Signup = require('../pages/signUp.js');


test.beforeEach(async({page})=>{
  await page.goto("https://demoblaze.com/")
})

test("Sign Up-Enter data click Sign up",async({page})=>{

  
    const signUpobj=new Signup(page);
    await signUpobj.clickSignup()
    await signUpobj.enterCredentials(data.username,data.password)
    const msg=await signUpobj.signupDialog()
    expect(msg).toContain('Sign up successful');

    /*const signup=page.locator('xpath=//a[@data-target="#signInModal"]')
    const username=page.locator('#sign-username')
    const password=page.locator('#sign-password')
    const signbutton=page.getByRole('button',{name:'Sign up'})
    await signupButton.click()
    await username.fill(data.username)
    await password.fill(data.password)
    //wait signbutton.click()
    */
    
   /*
    
    const [dialog] = await Promise.all([
    page.waitForEvent('dialog'),
    signbutton.click()
    ])

    console.log(dialog.message());

    expect(dialog.message()).toContain('Sign up successful');
    await dialog.accept();
    await page.pause();
  */


})

test("Sign Up-Enter data click close",async({page})=>{


    const signUpcls=new Signup(page);
    await signUpcls.clickSignup()
    await signUpcls.enterCredentials(data.username,data.password)
    await signUpcls.clickClose();

    /*const signup=page.locator('xpath=//a[@data-target="#signInModal"]')
    const username=page.locator('#sign-username')
    const password=page.locator('#sign-password')
    const closebutton=page.getByRole('button',{name:'Close'})
 
    await signup.click()
    await username.fill(data.username)
    await password.fill(data.password)
    await closebutton.nth(1).click()
    await page.pause(0)*/

    
})