import {Page,Locator} from '@playwright/test'
 import {productList} from '../../testData/product.json'
import {productselect} from '../../testData/product.json'
import url from '../../testData/product.json'
import {page} from '../../lib/helpers/browserSetup'
export default class addCartPage{
    readonly page:Page
    readonly prodCategory1:Locator
    readonly product1:Locator
    readonly addCart:Locator
   
     constructor(page:Page){
        this.page = page
       this.prodCategory1 =page.getByRole('link', { name: 'Laptops' })
       this.product1 = page.getByRole('link', { name: 'Sony vaio i5' })
        this.addCart = page.getByRole('link', { name: 'Add to cart' })
       
    }
     
    async addItem (productName:string,productItem:string,index:number) {
  await this.page.goto(url.URL);
  
// this.page.waitForTimeout(10000)
        await this.page.getByRole('link', { name: productName }).click();
        await this.page.getByRole('link', { name: productItem }).first().click();
          this.page.once('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.dismiss();
        });
       await  this.addCart.click();
       await this.page.screenshot({
            path: `./screenshot/product_${index + 1}.png`,
            fullPage: true
        });
      
    }
  }

  
      
    
