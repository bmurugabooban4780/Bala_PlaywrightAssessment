import { test, expect } from '@playwright/test';
import {productList} from '../testData/product.json'
import {productselect} from '../testData/product.json'
import url from '../testData/product.json'
import login from '../lib/pages/login'
import addCartpage from '../lib/pages/addCart'
//import {page} from '../lib/helpers/browserSetup'

 let AddItem: addCartpage
 let LoginPage:login

test('Add product',async ({ page }) => {
test.slow()
test.setTimeout(400000)
LoginPage =new login(page)
AddItem =new addCartpage(page)
await LoginPage.Login()
await AddItem.addItemProduct()

 //await page.goto("https://www.demoblaze.com/cart.html")
})

