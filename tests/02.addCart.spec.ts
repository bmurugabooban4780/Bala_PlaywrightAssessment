import { test, expect } from '@playwright/test';
import {productList} from '../testData/product.json'
import {productselect} from '../testData/product.json'
import url from '../testData/product.json'
import login from '../lib/pages/login'
import addCartpage from '../lib/pages/addCart'
import {page} from '../lib/helpers/browserSetup'

 let AddItem: addCartpage
 let LoginPage:login

test('Add product',async ({ page }) => {
test.slow()
test.setTimeout(400000)
LoginPage =new login(page)
AddItem =new addCartpage(page)
await LoginPage.Login()
for (const [index, product] of productList.entries()) {

     const productit = productselect[index];
     const productName = product.productname;
    const productItem = productit.productitem;
    let indexvalue =index
        console.log('Search for product:', productName);
        console.log('Search for item:', productItem);
        console.log('Index:', index);
        
       AddItem.addItem(productName,productItem,indexvalue)
       // AddItem.addItem("Laptops","Sony vaio i5",1)
     
}
})

