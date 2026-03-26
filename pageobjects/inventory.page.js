class InventoryPage {
    get sortDropdown() { return $('//select'); }
    get prices() { return $$('//div[@class="inventory_item_price"]'); }
    get cartBadge() { return $('//span[@class="shopping_cart_badge"]'); }

    addItemByName(name) {
        return $(`//div[text()="${name}"]/ancestor::div[@class="inventory_item"]//button`);
    }

    removeItemByName(name) {
        return $(`//div[text()="${name}"]/ancestor::div[@class="inventory_item"]//button[text()="Remove"]`);
    }

    async selectSort(option) {
        await this.sortDropdown.selectByVisibleText(option);
    }

    async getPrices() {
        const els = await this.prices;
        const arr = [];
        for (let el of els) {
            let t = await el.getText();
            arr.push(parseFloat(t.replace('$','')));
        }
        return arr;
    }
}
module.exports = new InventoryPage();