import { test, expect } from '@playwright/test';
import {productList} from '../testData/product.json'
import {productselect} from '../testData/product.json'

test.describe('Test suite AddItem_CheckOut_Purchase',() => {
    test.beforeEach( async ({page})=> {

//Login Validation
await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('BalaMurugabooban');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Playwright');
  await page.getByRole('button', { name: 'Log in' }).click();

  const Usrname =  page.locator('#nameofuser')
        await expect(Usrname).toContainText('Welcome BalaMurugabooban')
console.log('User Logged In:',await Usrname.textContent())
    })

test('Add cart',async ({ page }) => {
test.slow()
//test.setTimeout(10000)
for (const [index, product] of productList.entries()) {

     const productit = productselect[index];
     const productName = product.productname;
    const productItem = productit.productitem;

await page.goto('https://www.demoblaze.com/index.html');
        console.log('Search for product:', productName);
        console.log('Search for item:', productItem);
        console.log('Index:', index);

        await page.getByRole('link', { name: productName }).click();
        await page.getByRole('link', { name: productItem }).first().click();

        page.once('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.dismiss();
        });
//page.waitForTimeout(5000)
    //  page.getByRole('link', { name: 'Add to cart' }).click(),{timeout:20000}
       await page.getByRole('link', { name: 'Add to cart' }).click();
       await page.screenshot({
            path: `./screenshot/product_${index + 1}.png`,
            fullPage: true
        });
      }
 //     await page.goto("https://www.demoblaze.com/cart.html")
    })

test('Delete cart',async ({ page }) => {
test.slow()
 //page.waitForTimeout(50000)
  await page.goto("https://www.demoblaze.com/cart.html")
   await page.screenshot({path: './screenshot/execrcise1/cart.png',fullPage:true})
  await page.getByRole('link', { name: 'Delete' }).nth(1).click();
  //page.waitForTimeout(5000)
})

test('Place Order',async ({ page }) => {
test.slow()
await page.goto("https://www.demoblaze.com/cart.html")
//page.waitForTimeout(50000)
   await page.getByRole('button', { name: 'Place Order' }).click();
await page.screenshot({path: './screenshot/placeorder.png',fullPage:true})
await page.locator('#name').click();
await page.locator('#name').fill('Bala');
 // await page.getByRole('textbox', { name: 'name' }).fill('Bala');
  await page.getByRole('textbox', { name: 'country:' }).click();
  await page.getByRole('textbox', { name: 'country:' }).fill('India');
  await page.getByRole('textbox', { name: 'city:' }).click();
  await page.getByRole('textbox', { name: 'city:' }).fill('Chennai');
 
  //await page.getByRole('textbox', { name: 'Credit card:' }).click();
  await page.getByRole('textbox', { name: 'Credit card:' }).click();
  await page.getByRole('textbox', { name: 'Credit card:' }).fill('1234567890');
  await page.getByRole('textbox', { name: 'Month:' }).click();
  await page.getByRole('textbox', { name: 'Month:' }).fill('oct');
  await page.getByRole('dialog', { name: 'Place order' }).click();
  await page.getByRole('textbox', { name: 'year:' }).click();
  await page.getByRole('textbox', { name: 'year:' }).fill('2030');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await page.screenshot({path: './screenshot/completepurchase.png',fullPage:true})
  
  
})

})