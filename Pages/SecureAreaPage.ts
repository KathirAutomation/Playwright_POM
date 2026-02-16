import { Page } from '@playwright/test';

//Creating classes for logout
export class SecureAreaPage {
  constructor(private page: Page) {}

  async getSecureAreaText() {
    return this.page.textContent('h2');
  }

  async logout() {
    await this.page.click('a.button');
  }
}
