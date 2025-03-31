require('dotenv').config();
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

const config = require('../config.json')

test('Is on the right page', async ({ page }) =>{
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    expect(page.url()).toContain(config.expectedLoginUrl)
})

test('Page and Form information is visible', async ({ page }) =>{
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    expect(await loginPage.getPageTitle()).toContain(config.expectedPageTitle)
    expect(await loginPage.getUsernamePlaceholder()).toContain(config.expectedUsernameFieldPlacerholder)
    expect(await loginPage.getPasswordPlaceholder()).toContain(config.expectedPasswordFieldPlaceholder) 
    expect(await loginPage.getButtonText()).toContain(config.expectedLoginButtonText) 
})

test ('User can log in', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(process.env.NAME, process.env.PASSWORD);

    expect(page.url()).toContain('inventory')
})