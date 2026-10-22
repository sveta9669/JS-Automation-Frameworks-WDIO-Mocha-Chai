import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import ProductPage from '../pageobjects/product.page.js'

describe('Favorite Products Suite', () => {
    it('Should add a product to favorites when logged in', async () => {
        await LoginPage.open();
        await LoginPage.login('customer@practicesoftwaretesting.com', 'welcome01');

        await HomePage.open();
        await HomePage.searchProduct('Combination Pliers');
        await ProductPage.clickProductByName('Combination Pliers');

        await ProductPage.addToFavorites();

        const successAlert = $('#toast-container');
        await expect(successAlert).toBeDisplayed();
    });
});