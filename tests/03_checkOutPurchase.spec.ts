import { test, expect } from '@playwright/test'
import checkout from '../lib/pages/checkOutPurchase'
import login from '../lib/pages/login'

 let CheckoutPur: checkout
 let LoginPage:login

test('Checkout',async ({ page }) => {
test.slow()
test.setTimeout(20000)
LoginPage =new login(page)
CheckoutPur = new checkout(page)
await LoginPage.Login()
CheckoutPur.CheckoutPurchase()

})