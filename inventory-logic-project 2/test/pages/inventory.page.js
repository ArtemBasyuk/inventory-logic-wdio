const logger = require('../utils/logger');

class InventoryPage {
    get sortDropdown() { return $('//select'); }
    get prices() { return $$('//div[@class="inventory_item_price"]'); }
    get cartBadge() { return $('//span[@class="shopping_cart_badge"]'); }

    async sortByPriceLowHigh() {
        logger.info('Sorting items by price low to high');
        await this.sortDropdown.selectByVisibleText('Price (low to high)');
    }

    async getPrices() {
        logger.info('Getting prices');
        const priceTexts = await this.prices.map(async el => {
            const text = await el.getText();
            return parseFloat(text.replace('$', ''));
        });
        return Promise.all(priceTexts);
    }

    async addItem(itemName) {
        logger.info(`Adding item: ${itemName}`);
        const btn = await $(`//div[text()='${itemName}']/ancestor::div[@class='inventory_item']//button`);
        await btn.click();
    }

    async removeItem(itemName) {
        logger.info(`Removing item: ${itemName}`);
        const btn = await $(`//div[text()='${itemName}']/ancestor::div[@class='inventory_item']//button[text()='Remove']`);
        await btn.click();
    }

    async getCartCount() {
        return parseInt(await this.cartBadge.getText());
    }
}

module.exports = new InventoryPage();
