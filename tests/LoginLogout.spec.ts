import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { SecureAreaPage } from '../Pages/SecureAreaPage';
import { SIT } from '../env/sit.env';

test('Login and logout flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(SIT.username, SIT.password);

  const secureAreaPage = new SecureAreaPage(page);
  const secureText = await secureAreaPage.getSecureAreaText();
  expect(secureText).toContain('Secure Area');

  await secureAreaPage.logout();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
});
