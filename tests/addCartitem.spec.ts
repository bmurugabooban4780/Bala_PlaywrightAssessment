import { test, expect } from '@playwright/test';
import {productList} from '../testData/product.json'
import {productselect} from '../testData/product.json'
import url from '../testData/product.json'
import login from '../lib/pages/login'
import addCartpage from '../lib/pages/addCart'

import testData from '../testData/product.json'

 let AddItem: addCartpage
 let LoginPage:login

test('Add product',async ({ page }) => {
test.slow()
test.setTimeout(400000)
LoginPage =new login(page)
AddItem =new addCartpage(page)
await LoginPage.Login()
const { productList, productselect } = testData;


// // Product 1
// const laptopCategory = productList[0].productname;
// const laptopItem = productselect[0].productitem;

// // Product 2
// const monitorCategory = productList[1].productname;
// const monitorItem = productselect[1].productitem;

// // Product 3
// const phoneCategory = productList[2].productname;
// const phoneItem = productselect[2].productitem;
// First Product
const productName1 = productList[0].productname;
const productItem1 = productselect[0].productitem;

// Second Product
const productName2 = productList[1].productname;
const productItem2 = productselect[1].productitem;

// Third Product
const productName3 = productList[2].productname;
const productItem3 = productselect[2].productitem;

console.log(productName1, productItem1);
console.log(productName2, productItem2);
console.log(productName3, productItem3);
        
       //AddItem.addItem(productName,productItem,indexvalue)
        AddItem.addProductItem(productName1,productItem1)
        AddItem.addProductItem(productName2,productItem2)
        AddItem.addProductItem(productName3,productItem3)
       // AddItem.addItem("Laptops","Sony vaio i5",1)
     

 //await page.goto("https://www.demoblaze.com/cart.html")
})

