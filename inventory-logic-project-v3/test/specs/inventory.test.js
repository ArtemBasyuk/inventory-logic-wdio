const { expect } = require('chai');
const LoginPage = require('../pages/login.page');
const InventoryPage = require('../pages/inventory.page');
const { isAscending } = require('../utils/sortingHelper');
const data = require('../data/dataProvider');
const creds = require('../data/credentials');

describe('Inventory Logic', () => {

    it('UC-1 Sorting Validation', async () => {
        await LoginPage.open();
        await LoginPage.login(creds.standard);

        await InventoryPage.sortBy(data.sortOption);
        const prices = await InventoryPage.getAllPrices();

        expect(isAscending(prices)).to.be.true;
    });

    it('UC-2 Cart State Logic', async () => {
        await LoginPage.open();
        await LoginPage.login(creds.standard);

        await InventoryPage.addItemByName(data.items[0]);
        await InventoryPage.addItemByName(data.items[1]);

        let count = await InventoryPage.getCartItemsCount();
        expect(count).to.equal(2);

        await InventoryPage.removeItemByName(data.items[0]);

        count = await InventoryPage.getCartItemsCount();
        expect(count).to.equal(1);
    });

});