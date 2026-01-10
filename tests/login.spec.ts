import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage.spec';

test('test', async ({ page }) => {
    
    const Login = new LoginPage(page);

    await Login.GotoLoginPage();
    await Login.Login('tomsmith', 'SuperSecretPassword!');

   
});