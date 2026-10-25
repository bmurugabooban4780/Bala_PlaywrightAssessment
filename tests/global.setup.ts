import {test as setup ,expect} from'@playwright/test'
import { ADMIN_STORAGE_STATE } from '../playwright.config';



setup('Valid login', async({page}) => {
     await page.goto('https://www.demoblaze.com/index.html');

  //Login Validation
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('BalaMurugabooban');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Playwright');
  await page.getByRole('button', { name: 'Log in' }).click();
 // page.waitForTimeout(10000)
  const Usrname =  page.locator('#nameofuser')
        await expect(Usrname).toContainText('Welcome BalaMurugabooban')
console.log('User Logged In:',await Usrname.textContent())
        await page.context().storageState({path:ADMIN_STORAGE_STATE})

})