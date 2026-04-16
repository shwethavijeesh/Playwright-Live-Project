class Logout{

constructor(page){
this.page = page;

this.logoutt=this.page.getByRole("link",{name:"Log out"})
}


async logout(){
await this.logoutt.click()
await this.page.pause()
}

}


module.exports=Logout;