import { test, expect } from '@playwright/test';
import {productList} from '../testData/product.json'
import {productselect} from '../testData/product.json'


test('Checkout',async ({ page }) => {
test.slow()
await page.goto("https://www.demoblaze.com/cart.html")
 //page.waitForTimeout(50000)
   await page.getByRole('button', { name: 'Place Order' }).click();
await page.screenshot({path: './screenshot/placeorder.png',fullPage:true})

//await page.getByRole('textbox', { name: 'name' }).click();
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
// //////
 
//   await page.getByRole('link', { name: 'Laptops' }).click();
//   await page.waitForTimeout(3000)
//   await page.getByRole('link', { name: 'Sony vaio i5' }).click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole('link', { name: 'Add to cart' }).click();
//   await page.screenshot({path: './screenshot/execrcise1/Sonyvaio.png',fullPage:true})
  
//  // await page.getByRole('link', { name: 'Cart', exact: true }).click();
//  // page.waitForTimeout(50000)
 
//   await page.screenshot({path: './screenshot/execrcise1/cart1.png',fullPage:true})
//   await page.getByRole('link', { name: 'Home (current)' }).click();
//   await page.getByRole('link', { name: 'Monitors' }).click();
//   await page.waitForTimeout(3000)
//   await page.getByRole('link', { name: 'ASUS Full HD' }).click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole('link', { name: 'Add to cart' }).click();
//    //page.waitForTimeout(5000)
//    await page.screenshot({path: './screenshot/execrcise1/Asus.png',fullPage:true})
//   await page.getByRole('link', { name: 'Home (current)' }).click();
//   await page.getByRole('link', { name: 'Phones' }).click();
//   await page.waitForTimeout(3000)
//   await page.getByRole('link', { name: 'Nexus 6' }).click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole('link', { name: 'Add to cart' }).click();
//   // page.waitForLoadState()
 
//    await page.screenshot({path: './screenshot/execrcise1/Nexus.png',fullPage:true})
//   //await page.getByRole('link', { name: 'Cart', exact: true }).click();
//  // page.waitForTimeout(50000)
//   await page.goto("https://www.demoblaze.com/cart.html")
//    await page.screenshot({path: './screenshot/execrcise1/cart.png',fullPage:true})
//   await page.getByRole('link', { name: 'Delete' }).nth(1).click();
//   //page.waitForTimeout(5000)
//   await page.getByRole('button', { name: 'Place Order' }).click();
// await page.screenshot({path: './screenshot/execrcise1/placeorder.png',fullPage:true})

// //await page.getByRole('textbox', { name: 'name' }).click();
// await page.locator('#name').click();
// await page.locator('#name').fill('Bala');
//  // await page.getByRole('textbox', { name: 'name' }).fill('Bala');
//   await page.getByRole('textbox', { name: 'country:' }).click();
//   await page.getByRole('textbox', { name: 'country:' }).fill('India');
//   await page.getByRole('textbox', { name: 'city:' }).click();
//   await page.getByRole('textbox', { name: 'city:' }).fill('Chennai');
 
//   //await page.getByRole('textbox', { name: 'Credit card:' }).click();
//   await page.getByRole('textbox', { name: 'Credit card:' }).click();
//   await page.getByRole('textbox', { name: 'Credit card:' }).fill('1234567890');
//   await page.getByRole('textbox', { name: 'Month:' }).click();
//   await page.getByRole('textbox', { name: 'Month:' }).fill('oct');
//   await page.getByRole('dialog', { name: 'Place order' }).click();
//   await page.getByRole('textbox', { name: 'year:' }).click();
//   await page.getByRole('textbox', { name: 'year:' }).fill('2030');
//   await page.getByRole('button', { name: 'Purchase' }).click();
//   await page.screenshot({path: './screenshot/execrcise1/completepurchase.png',fullPage:true})
//  })