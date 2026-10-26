import { test, expect } from '@playwright/test';
import delItem from '../lib/pages/deleteItem';
import login from '../lib/pages/login'

let DeleteItem: delItem
 let LoginPage:login
test('DeleteProduct',async ({ page }) => {
test.slow()
test.setTimeout(5000)
DeleteItem =new delItem(page)
LoginPage =new login(page)
await LoginPage.Login()
DeleteItem.DeleteProdItem()


})
