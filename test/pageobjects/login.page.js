import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {

    get inputEmail() {
        return $('#email');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('input[type="submit"]');
    }

    async login(username, password) {
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('auth/login');
    }
}

export default new LoginPage();
