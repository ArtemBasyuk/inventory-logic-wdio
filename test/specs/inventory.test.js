const LoginPage = require('../../pageobjects/login.page');
const InventoryPage = require('../../pageobjects/inventory.page');
const assert = require('assert');

describe('Inventory Tests', () => {

    const items = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];

    before(async () => {
        await browser.url('https://www.saucedemo.com/');
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('Sorting validation', async () => {
        await InventoryPage.selectSort('Price (low to high)');
        const prices = await InventoryPage.getPrices();
        const sorted = [...prices].sort((a,b)=>a-b);
        assert.deepStrictEqual(prices, sorted);
    });

    it('Cart logic', async () => {
        for (let item of items) {
            await InventoryPage.addItemByName(item).click();
        }
        let badge = await InventoryPage.cartBadge.getText();
        assert.strictEqual(badge,'2');

        await InventoryPage.removeItemByName(items[0]).click();
        badge = await InventoryPage.cartBadge.getText();
        assert.strictEqual(badge,'1');
    });
});