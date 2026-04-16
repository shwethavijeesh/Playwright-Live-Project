class PurchaseProduct{

constructor(page){
this.page = page;
this.phoneslct=this.page.getByRole("link",{name:"Phones"})
this.productphn=this.page.getByRole("link",{name:"Nokia lumia 1520"})
this.addcartphn=this.page.locator('xpath=//a[@class="btn btn-success btn-lg"]')

this.monitorslct=this.page.getByRole("link",{name:"Monitors"})
this.productmntr=this.page.getByRole("link",{name:"Apple monitor 24"})
this.addcartmntr=this.page.locator('xpath=//a[@class="btn btn-success btn-lg"]')
}

async choosePhone(){
 await this.phoneslct.click()
 await this.page.pause()
}

async selectProductPhn(){
 await this.productphn.click()
 await this.page.pause()
}


async addCartPopupPhn(){
 //await this.loginbutton.click()
    const [dialog] = await Promise.all([
    this.page.waitForEvent('dialog'),
    this.addcartphn.click()
    ])
     const message1 = dialog.message();
     await dialog.accept(); 
    console.log(dialog.message());
    return message1;
    await this.page.pause()
}



async chooseMonitor(){
 await this.monitorslct.click()
 await this.page.pause()
}

async selectProductMontr(){
 await this.productmntr.click()
 await this.page.pause()
}


async addCartPopupMontr(){
 //await this.loginbutton.click()
    const [dialog] = await Promise.all([
    this.page.waitForEvent('dialog'),
    this.addcartmntr.click()
    ])
     const message2 = dialog.message();
     await dialog.accept(); 
    console.log(dialog.message());
   
    return message2;
    await this.page.pause()
}

}

module.exports=PurchaseProduct;