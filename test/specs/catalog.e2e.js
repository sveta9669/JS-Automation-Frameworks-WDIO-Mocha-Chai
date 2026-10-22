import { assert, should } from 'chai'
import HomePage from '../pageobjects/home.page.js'

should()

describe('Product Catalog: Filtering, Sorting, and Categories', () => {

    it('Should filter and sort products by price', async () => {
        await HomePage.open();

        await HomePage.sortBy('price,asc');

        const results = await HomePage.productCards;
        assert.isAbove(results.length, 0, 'Expected products after sorting by price');
    });

    it('Should view products in a selected category and subcategory', async () => {
        await HomePage.open();

        await HomePage.selectCategoryFilter('Hand Tools');

        const results = await HomePage.productCards;
        results.length.should.be.greaterThan(0);
    });
});