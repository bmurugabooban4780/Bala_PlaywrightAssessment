import {Page,Locator} from '@playwright/test'
import url from '../../testData/product.json'
import custdet from '../../testData/product.json'

export default class chkoutpurchase{
    readonly page:Page
    readonly btnplaceOrder:Locator
    readonly txtname:Locator
     readonly txtcountry:Locator
      readonly txtcity:Locator
       readonly txtcreditcard:Locator
        readonly txtmonth:Locator
         readonly dialogplaceorder:Locator
 readonly txtyear:Locator
  readonly btnpurchaseorder:Locator
   
     constructor(page:Page){
        this.page = page
       this.btnplaceOrder =page.getByRole('button', { name: 'Place Order' })
       this.txtname = page.locator('#name')
       this.txtcountry = page.getByRole('textbox', { name: 'country:' })
       this.txtcity = page.getByRole('textbox', { name: 'city:' })
       this.txtcreditcard = page.getByRole('textbox', { name: 'Credit card:' })
       this.txtmonth = page.getByRole('textbox', { name: 'Month:' })
       this.dialogplaceorder = page.getByRole('dialog', { name: 'Place order' })
        this.txtyear = page.getByRole('textbox', { name: 'year:' })
        this.btnpurchaseorder = page.getByRole('button', { name: 'Purchase' })
     }
 async CheckoutPurchase () {
await this.page.goto(url.Cart_URL)
//this.page.waitForTimeout(5000)
 console.log("Place the Order")
   this.btnplaceOrder.click();
   await this.page.screenshot({path: './screenshot/placeorder.png',fullPage:true})
   console.log("Enter details for Purchase")
 this.txtname .click();
 this.txtname .fill(custdet.name);
 this.txtcountry.click();
 this.txtcountry.fill(custdet.country);
 this.txtcity.click();
 this.txtcity.fill(custdet.city);
this.txtcreditcard.click();
  this.txtcreditcard.fill(custdet.creditcard);
 this.txtmonth.click();
this.txtmonth.fill(custdet.month);
this.txtyear.click();
  this.txtyear.fill(custdet.year);
console.log("Click on Purchase button")
this.btnpurchaseorder.click();
  await this.page.screenshot({path: './screenshot/completepurchase.png',fullPage:true})
 }
}