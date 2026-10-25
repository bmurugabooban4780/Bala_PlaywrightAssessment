import { test, expect } from '@playwright/test';
import {productList} from '../testData/product.json'
import {productselect} from '../testData/product.json'


test('Add product',async ({ page }) => {
test.slow()
test.setTimeout(400000)

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

      // await (page.getByRole('link', { name: 'Add to cart' }).click(),{timeout:20000})
       await page.getByRole('link', { name: 'Add to cart' }).click();
       await page.screenshot({
            path: `./screenshot/product_${index + 1}.png`,
            fullPage: true
        });
      }

  
})

