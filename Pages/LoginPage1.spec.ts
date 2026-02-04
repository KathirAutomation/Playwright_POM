import { Locator, Page } from "@playwright/test";


export class LoginPage1{
    page:Page
    PW_textbox:Locator
    UN_textbox:Locator
    BT_button:Locator


    constructor(page:Page){
        this.page = page
       this.UN_textbox = page.locator('#username')
       this.PW_textbox = page.locator('#password')
       this.BT_button = page.locator('#submit')
    }

    async LogN(UN:string, PW:string){
       await  this.UN_textbox.fill(UN)
        await this.PW_textbox.fill(PW)
        await this.BT_button.click()

    }
}