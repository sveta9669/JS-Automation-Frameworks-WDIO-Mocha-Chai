import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import ProductPage from '../pageobjects/product.page.js'

describe('End-to-End Flow - Add to Cart', () => {
    it('Should log in, navigate to product, and add it to the cart successfully', async () => {
        await LoginPage.open();
        await LoginPage.login('customer@practicesoftwaretesting.com', 'welcome01');

        await HomePage.open();
        await HomePage.searchProduct('Combination Pliers');
        await ProductPage.clickProductByName('Combination Pliers');

        await ProductPage.addToCart();

        const successAlert = $('#toast-container');
        await expect(successAlert).toBeDisplayed();
    });
});