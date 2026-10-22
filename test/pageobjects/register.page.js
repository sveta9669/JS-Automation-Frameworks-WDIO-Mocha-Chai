import Page from './page.js';
import { $ } from '@wdio/globals';

class RegisterPage extends Page {
    get inputFirstName() { return $('[data-test="first-name"]'); }
    get inputLastName() { return $('[data-test="last-name"]'); }
    get inputDOB() { return $('[data-test="dob"]'); }
    get selectCountry() { return $('[data-test="country"]'); }
    get inputPostalcode() { return $('[data-test="postal_code"]'); }
    get inputHouseNumber() { return $('[data-test="house_number"]'); }
    get inputStreet() { return $('[data-test="street"]'); }
    get inputCity() { return $('[data-test="city"]'); }
    get inputState() { return $('[data-test="state"]'); }
    get inputPhone() { return $('[data-test="phone"]'); }
    get inputEmail() { return $('[data-test="email"]'); }
    get inputPassword() { return $('[data-test="password"]'); }
    get btnSubmit() { return $('[data-test="register-submit"]'); }

    async register(firstName, lastName, dob, country, postalcode, housNumber, street, city, state, phone, email, password) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputDOB.setValue(dob);
        await this.selectCountry.selectByVisibleText(country);
        await this.inputPostalcode.setValue(postalcode);
        await this.inputHouseNumber.setValue(housNumber);
        await this.inputStreet.setValue(street);
        await this.inputCity.setValue(city);
        await this.inputState.setValue(state);
        await this.inputPhone.setValue(phone);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    open() {
        return super.open('auth/register');
    }
}

export default new RegisterPage();