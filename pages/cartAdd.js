class AddCart{

constructor(page){
this.page = page;
this.product=this.page.getByRole("link",{name:"Samsung galaxy s6"})
this.addcartt=this.page.locator('xpath=//a[@class="btn btn-success btn-lg"]')
}

async selectProduct(){
 await this.product.click()
 await this.page.pause()
}



async addCartPopup(){
 //await this.loginbutton.click()
    const [dialog] = await Promise.all([
    this.page.waitForEvent('dialog'),
    this.addcartt.click()
    ])
    const message = dialog.message();
     await dialog.accept(); 
    console.log(dialog.message());
     return message;
    await this.page.pause()
}

}

module.exports=AddCart;