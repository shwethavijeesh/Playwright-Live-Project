class Signup{

constructor(page){
this.page = page;
/*this.signupButton = page.getByRole('link',{name:'Sign up'});
this.usernameField = page.getByLabel('Username:');
this.passwordField = page.getByLabel('Password:');
this.signup = page.getByRole('button',{name:'Sign up'});*/

this.signupButton=page.locator('xpath=//a[@data-target="#signInModal"]')
this.username=page.locator('#sign-username')
this.password=page.locator('#sign-password')
this.signbutton=page.getByRole('button',{name:'Sign up'})
this.closebutton=page.getByRole('button',{name:'Close'})
}

async clickSignup(){
 await this.signupButton.click()
}

async enterCredentials(username,password){
await this.username.fill(username);
await this.password.fill(password);
}

async signupDialog(){

const [dialog] = await Promise.all([
    this.page.waitForEvent('dialog'),
    this.signbutton.click()
    ])

    console.log(dialog.message());
    const msg=dialog.message();

    //expect(dialog.message()).toContain('Sign up successful');
    await dialog.accept();
    await this.page.pause();
    return msg;

}
async clickClose(){
 await this.closebutton.nth(1).click()
 await this.page.pause()
}
}
module.exports=Signup;