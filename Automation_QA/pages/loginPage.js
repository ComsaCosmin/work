import { Page } from "@playwright/test";

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = '#user-name';
        this.passwordField = '#password';
        this.LoginButton = '#login-button';
        this.errorMessage = '[data-test="error"]';
        this.pageTitle = '.login_logo';
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.LoginButton);
    }

    async getErrorMessage() {
        return await this.page.locator(this.errorMessage).textContent()
    }

    async getPageTitle() {
        return await this.page.locator('.login_logo').textContent()
    }

    async getUsernamePlaceholder() {
        return await this.page.locator(this.usernameField).getAttribute('placeholder')
    }

    async getPasswordPlaceholder() {
        return await this.page.locator(this.passwordField).getAttribute('placeholder')
    }

    async getButtonText() {
        return await this.page.locator(this.LoginButton).getAttribute('value')
    }
}

module.exports = { LoginPage };