import {Page,Locator} from '@playwright/test'
 import {productList} from '../../testData/product.json'
import {productselect} from '../../testData/product.json'
import url from '../../testData/product.json'
//import {page} from '../../lib/helpers/browserSetup'
export default class addCartPage{
    readonly page:Page
    readonly prodCategory1:Locator
    readonly product1:Locator
    readonly addCart:Locator
    readonly home:Locator
   
     constructor(page:Page){
        this.page = page
       this.prodCategory1 =page.getByRole('link', { name: 'Laptops' })
       this.product1 = page.getByRole('link', { name: 'Sony vaio i5' })
        this.addCart = page.getByRole('link', { name: 'Add to cart' })
        this.home = page.getByRole('link', { name: 'Home' })
        
       
    }
     //addProductItem
    
     async addProductItem (productName:string,productItem:string) {
       //  await this.page.goto(url.URL);
       console.log("Product Details",productName, productName);
       console.log(this.page.getByRole('link', { name: productName }))
await this.page.getByRole('link', { name: productName }).click();
  await this.page.waitForTimeout(3000)
  await this.page.getByRole('link', { name: productItem }).click();
  this.page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await this.page.getByRole('link', { name: 'Add to cart' }).click();
  await this.page.screenshot({path: './screenshot/execrcise1/'+productName+productItem+'snap.png',fullPage:true})
 //await page.getByRole('link', { name: 'Cart', exact: true }).click();
 // page.waitForTimeout(50000)
  //await page.goto("https://www.demoblaze.com/cart.html")

     }
    async addItem (productName:string,productItem:string,index:number) {
  await this.page.goto(url.URL);
  
// this.page.waitForTimeout(10000)

  await this.page.getByRole('link', { name: productName }).click();

  await this.page
    .getByRole('link', { name: productItem }).first().click()

   
          this.page.once('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.dismiss();
        });
       await  this.addCart.click();
       await this.page.screenshot({
            path: `./screenshot/product_${index + 1}.png`,
            fullPage: true
        });
      this.home.click();
    }
 async addItemProduct () {

    for (const [index, product] of productList.entries()) {

     const productit = productselect[index];
     const productName = product.productname;
    const productItem = productit.productitem;

await this.page.goto('https://www.demoblaze.com/index.html');
        console.log('Search for product:', productName);
        console.log('Search for item:', productItem);
        console.log('Index:', index);

        await this.page.getByRole('link', { name: productName }).click();
        await this.page.getByRole('link', { name: productItem }).first().click();

        this.page.once('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.dismiss();
        });
//page.waitForTimeout(5000)
    //  page.getByRole('link', { name: 'Add to cart' }).click(),{timeout:20000}
       await this.page.getByRole('link', { name: 'Add to cart' }).click();
       await this.page.screenshot({
            path: `./screenshot/product_${index + 1}.png`,
            fullPage: true
        });
        this.home.click();
      }
  }
}
  
      
    
