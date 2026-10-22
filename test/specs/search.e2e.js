import { expect } from '@wdio/globals'
import { expect as expectChai } from 'chai';
import HomePage from '../pageobjects/home.page.js'
import ProductPage from '../pageobjects/product.page.js'

describe('Search adn Product Details Tests', () => {
    it('should search for a product', async () => {
        await HomePage.open();
        await HomePage.searchProduct('Combination Pliers');
        const results = await HomePage.productCards;

        expectChai(results.length).to.be.greaterThan(0);
    });

    it('Should show product details when clicking on a product', async () => {
        await HomePage.open();
        await HomePage.searchProduct('Combination Pliers');
        await ProductPage.clickProductByName('Combination Pliers');
        await expect(ProductPage.productName).toHaveText('Combination Pliers');
        await expect(ProductPage.productPrice).toBeDisplayed();
        await expect(ProductPage.productDescription).toBeDisplayed();
        await expect(ProductPage.productImage).toBeDisplayed();
        await expect(ProductPage.btnAddToCart).toBeDisplayed();
    });
});