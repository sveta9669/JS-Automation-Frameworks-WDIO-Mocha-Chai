import { $ } from '@wdio/globals'
import Page from './page.js'

class HomePage extends Page {
    get inputSearch() { return $('[data-test="search-query"]'); }
    get btnSearch() { return $('[data-test="search-submit"]'); }
    get sortDropdown() { return $('[data-test="sort"]'); }
    get productCards() { return $$('.container'); }

    categoryCheckbox(categoryName) {
        return $(`//label[contains(text(), '${categoryName}')]/input`);
    }
    async open() {
        return super.open('');
    }

    async searchProduct(productName) {
        await this.inputSearch.setValue(productName);
        await this.btnSearch.click();
    }

    async selectCategoryFilter(categoryName) {
        const checkbox = this.categoryCheckbox(categoryName);
        await checkbox.click();
    }

    async sortBy(sortOption) {
        await this.sortDropdown.selectByAttribute('value', sortOption);
    }
}

export default new HomePage();