import { Locator, Page } from "@playwright/test";

export class LoginPage{
    page: Page;
    Username_textbox: Locator;
    Password_textbox: Locator;
    Login_button: Locator;

    constructor(page: Page){
        this.page = page;
        this.Username_textbox = page.getByRole('textbox', { name: 'Username' });
        this.Password_textbox = page.getByRole('textbox', { name: 'Password' });
        this.Login_button = page.getByRole('button', { name: 'Login' });


    }

    async GotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async Login(Username: string, Password:string){
        await this.Username_textbox.fill(Username);
        await this.Password_textbox.fill(Password);
        await this.Login_button.click();
    }
}