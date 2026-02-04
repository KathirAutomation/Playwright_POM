import {test, expect, Page} from '@playwright/test'
import { LoginPage1 } from '../Pages/Loginpage1.spec'


test('Login Validation', async({page})=>{
    const  Login = new LoginPage1(page);
await page.goto("https://practicetestautomation.com/practice-test-login/")
await Login.LogN('student', 'Password123')

})