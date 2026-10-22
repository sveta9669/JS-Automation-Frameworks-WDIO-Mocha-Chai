import { browser, expect } from '@wdio/globals'
import RegisterPage from '../pageobjects/register.page.js'

describe('My Register application', () => {
    it('should register with valid credentials', async () => {
        await RegisterPage.open()
        await RegisterPage.register('Test', 'Testyan', '1998-01-01', 'Armenia', 'RM107SA', '5', 'test', 'Yerevan', 'Yerevan', '07412500203', 'customer22@practicesoftwaretesting.com', 'testPass1234#')

        await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/auth/login')
    })
}

)