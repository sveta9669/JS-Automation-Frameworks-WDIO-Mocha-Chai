import { $ } from '@wdio/globals'
import Page from './page.js';

class ProductPage extends Page {
    get productName() { return $('[data-test="product-name"]'); }
    get productPrice() { return $('[data-test="unit-price"]'); }
    get productDescription() { return $('[data-test="product-description"]'); }
    get productImage() { return $('.figure-img'); }
    get btnAddToCart() { return $('[data-test="add-to-cart"]'); }
    get btnAddToFavorites() { return $('[data-test="add-to-favorites"]'); }
    get cartLink() { return $('[data-test="nav-cart"]'); }

    async clickProductByName(name) {
        const product = $(`//h5[contains(text(), '${name}')]`);
        await product.click();
    }

    async addToFavorites() {
        await this.btnAddToFavorites.click();
    }

    async addToCart() {
        await this.btnAddToCart.click();
    }

    async goToCart() {
        await this.cartLink.click();
    }
}

export default new ProductPage();