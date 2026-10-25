// import {Page,Locator} from '@playwright/test'


// export default class checkoutPage{
//     readonly page:Page
//     readonly prodCategory1:Locator
//     readonly product1:Locator
//     readonly addCart:Locator
   
//      constructor(page:Page){
//         this.page = page
//         this.prodCategory1 =page.getByRole('link', { name: 'Laptops' })
//         this.product1 = page.getByRole('link', { name: 'Sony vaio i5' })
//         this.addCart = page.getByRole('link', { name: 'Add to cart' })
//     }
    
//     async addItem () {
//         await this.prodCategory1.click();
//   //await page.waitForTimeout(3000)
//         this.product1.click();

//   this.page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });

//   this.addCart.click();
//   await this.page.screenshot({path: './screenshot/execrcise1/Sonyvaio.png',fullPage:true})
  
      
//     }
// }