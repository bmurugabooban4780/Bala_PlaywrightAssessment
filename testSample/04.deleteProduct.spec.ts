import { test, expect } from '@playwright/test';
import delItem from '../lib/pages/deleteItem';

let DeleteItem: delItem
test('DeleteProduct',async ({ page }) => {
test.slow()
DeleteItem =new delItem(page)
DeleteItem.DeleteProdItem()


})
