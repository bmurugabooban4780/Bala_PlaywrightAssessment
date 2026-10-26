import {Page,Locator} from '@playwright/test'
import url from '../../testData/product.json'

export default class deleteCartItem{
    readonly page:Page
    readonly deleteItem:Locator
     readonly linkCart:Locator
    
   
   
     constructor(page:Page){
        this.page = page
       this.deleteItem =page.getByRole('link', { name: 'Delete' })
       this.linkCart =page.getByRole('link', { name: 'Cart' })
     }
 async DeleteProdItem () {
  //  this.page.waitForTimeout(2000)
       await this.page.goto(url.Cart_URL)
         //this.linkCart.click();
       await this.page.screenshot({
    path: `./screenshot/CartAfteradding.png`,
            fullPage: true
     })
 this.deleteItem.click();
 await this.page.screenshot({
    path: `./screenshot/CartAfterDelete.png`,
            fullPage: true
     })
 
 }
}
