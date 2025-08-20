import { expect } from '@playwright/test';

class Addcart {

    constructor(page) {
        this.page = page;
    }

    async navigate() {
        try {
            await page.goto("https://www.amazon.in/", { waitUntil: 'domcontentloaded' });
        } catch (err) {
            console.log("There is an issue in loading URL");
        }
    }

    async selectProduct(productName) {
        // Search for the product
        await page.getByPlaceholder('Search Amazon.in', { waitUntil: 'domcontentloaded' }).fill(productName);
        await page.locator('#nav-search-submit-button', { waitUntil: 'domcontentloaded' }).click();
        // Wait for search results and select the first matching product
        await this.page.locator("//h2[@aria-label='Sponsored Ad - Apple iPhone 15 (128 GB) - Blue']//span[contains(text(),'Apple iPhone 15 (128 GB) - Blue')]").first().click();
        await page.waitForSelector("//div[@class='a-section a-spacing-none a-padding-none']//input[@id='add-to-cart-button']", { timeout: 15000 });
    }

    async addToCart() {
        try {
            await page.waitForSelector("//div[@class='a-section a-spacing-none a-padding-none']//input[@id='add-to-cart-button']", { state: 'visible', timeout: 10000 });
            await page.click("//div[@class='a-section a-spacing-none a-padding-none']//input[@id='add-to-cart-button']");
        } catch (err) {
            console.log("addcart button is not displayed");
        }
    }

    async cartValidtion(productName) {
        await page.locator('#nav-cart-count', { timeout: 60000 }).click();
        const actualItem = await page.locator("//span[@class='a-truncate-cut']");
        await expect(actualItem).toContainText(productName);
    }
}
export default Addcart;