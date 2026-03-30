const LoginPage = require('../pages/login.page');
const InventoryPage = require('../pages/inventory.page');
const { isSortedAsc } = require('../utils/sortingHelper');
const data = require('../data/dataProvider');

describe('Inventory Logic', () => {

    it('UC-1 Sorting Validation', async () => {
        await browser.url('https://www.saucedemo.com/');
        await LoginPage.login('standard_user', 'secret_sauce');

        await InventoryPage.sortByPriceLowHigh();
        const prices = await InventoryPage.getPrices();

        if (!isSortedAsc(prices)) {
            throw new Error('Prices are NOT sorted correctly!');
        }
    });

    it('UC-2 Cart State Logic', async () => {
        await browser.url('https://www.saucedemo.com/');
        await LoginPage.login('standard_user', 'secret_sauce');

        await InventoryPage.addItem(data.items[0]);
        await InventoryPage.addItem(data.items[1]);

        let count = await InventoryPage.getCartCount();
        if (count !== 2) throw new Error('Cart count should be 2');

        await InventoryPage.removeItem(data.items[0]);

        count = await InventoryPage.getCartCount();
        if (count !== 1) throw new Error('Cart count should be 1');
    });

});
