class Loginscenarios{

constructor(page){
this.page = page;

this.loginn=this.page.locator('xpath=//a[@data-target="#logInModal"]')
this.usernamel=this.page.locator('#loginusername')
this.passwordl=this.page.locator('#loginpassword')
//this.loginbutton=this.page.locator('xpath=//button[@class="btn btn-primary"]')//remove this locator a
// nd try new one,dynamically chnage this value
this.loginbutton=this.page.getByRole('button',{name:'Log in'})
this.welcomeUser = this.page.locator('#nameofuser');
}

async clickLogin(){
 await this.loginn.click()
}

async enterCredentials(username,password){
await this.usernamel.fill(username);
await this.passwordl.fill(password);
}


async validloginButton(){
 await this.loginbutton.click()
 await this.page.waitForLoadState()
 await this.page.screenshot({ path: 'screenshot/loginsuccess.png' });
 await this.page.pause()
}

async invalidloginButton(){
 //await this.loginbutton.click()
    const [dialog] = await Promise.all([
    this.page.waitForEvent('dialog'),
    this.loginbutton.click()
    ])
     await dialog.accept(); 
    console.log(dialog.message());
    await this.page.waitForLoadState()
    await this.page.screenshot({ path: 'screenshot/loginfail.png' });
    await this.page.pause()
}

}


module.exports=Loginscenarios;