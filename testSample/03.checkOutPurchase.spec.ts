import { test, expect } from '@playwright/test'
import checkout from '../lib/pages/checkOutPurchase'

 let CheckoutPur: checkout

test('Checkout',async ({ page }) => {
test.slow()
CheckoutPur = new checkout(page)
CheckoutPur.CheckoutPurchase()

})