import {Page,Locator, expect} from '@playwright/test'
 import {productList} from '../../testData/product.json'
import {productselect} from '../../testData/product.json'
import url from '../../testData/product.json'
//import {page} from '../../lib/helpers/browserSetup'
//import { ADMIN_STORAGE_STATE } from 'playwright.config'
export default class LoginPage{
    readonly page:Page
    readonly linkLogin:Locator
    readonly txtUsername:Locator
    readonly txtPassword:Locator
     readonly btnLogin:Locator
     readonly labeluser:Locator
  constructor(page:Page){
        this.page = page
       this.linkLogin = page.getByRole('link', { name: 'Log in' })
       this.txtUsername = page.locator('#loginusername')
        this.txtPassword = page.locator('#loginpassword')
       this.btnLogin = page.getByRole('button', { name: 'Log in' })
       this.labeluser = page.locator('#nameofuser')
   
    }
     
   async Login () {
      console.log("URL : ",url.URL)
      
await this.page.goto("https://www.demoblaze.com/index.html")
      
       this.linkLogin.click();
     await this.txtUsername.click();
        this.txtUsername.fill(url.Username);
      await this.txtPassword.click();
       this.txtPassword.fill(url.Password);
       
      await this.btnLogin.click();
    console.log('User Logged In:',(await this.labeluser.textContent()))

   //await expect(this.labeluser).toHaveText(`Welcome ${username}`)


  //await page.context().storageState({path:ADMIN_STORAGE_STATE})
   }
}
//   //Login Validation
//   await page.getByRole('link', { name: 'Log in' }).click();
//   await page.locator('#loginusername').click();
//   await page.locator('#loginusername').fill('BalaMurugabooban');
//   await page.locator('#loginpassword').click();
//   await page.locator('#loginpassword').fill('Playwright');
//   await page.getByRole('button', { name: 'Log in' }).click();
//  // page.waitForTimeout(10000)
//   const Usrname =  page.locator('#nameofuser')
//         await expect(Usrname).toContainText('Welcome BalaMurugabooban')
// console.log('User Logged In:',await Usrname.textContent())
//         await page.context().storageState({path:ADMIN_STORAGE_STATE})
//     )
// )