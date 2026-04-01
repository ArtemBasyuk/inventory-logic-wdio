class InventoryPage {
    get sortDropdown() { return $('//select'); }
    get prices() { return $$('//div[@class="inventory_item_price"]'); }
    get cartBadge() { return $('//span[@class="shopping_cart_badge"]'); }

    async sortBy(optionText) {
        await this.sortDropdown.selectByVisibleText(optionText);
    }

    async getAllPrices() {
        const elements = await this.prices;
        const values = [];

        for (let el of elements) {
            const text = await el.getText();
            values.push(parseFloat(text.replace('$', '')));
        }

        return values;
    }

    async addItemByName(itemName) {
        const button = await $(`//div[text()='${itemName}']/ancestor::div[@class='inventory_item']//button`);
        await button.click();
    }

    async removeItemByName(itemName) {
        const button = await $(`//div[text()='${itemName}']/ancestor::div[@class='inventory_item']//button[text()='Remove']`);
        await button.click();
    }

    async getCartItemsCount() {
        return parseInt(await this.cartBadge.getText());
    }
}

module.exports = new InventoryPage();