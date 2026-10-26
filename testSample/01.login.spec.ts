import test, {test as setup ,expect} from'@playwright/test'
import login from '../lib/pages/login'


let LoginPage:login

test('Valid login', async({page}) => {
    test.slow()
    LoginPage =new login(page)

   await LoginPage.Login()
    
    
})

