
import {expect} from "@playwright/test"

class Addcart{     

    constructor(page) {
        this.page = page;    
      }

    async navigate(){
        try{
        await page.goto("https://www.amazon.in/", { waitUntil: 'domcontentloaded' });
        }catch(err){
            console.log("There is an issue in loading URL");
        }        
    }
    
    async selectProduct(productName){        
        await page.getByPlaceholder('Search Amazon.in').fill(productName);   
        await page.locator('#nav-search-submit-button').click();         
         
        }

    async addToCart(){
        await page.locator("//button[@id='a-autoid-1-announce']").click();
        try{        
        await page.waitForSelector("//button[@id='a-autoid-1-announce']",{state:'visible'});
        }catch(err){
        console.log("addcart button is not dispalyed");
        }
    }

    async cartValidtion(productName){
        await page.locator('#nav-cart-count',{ timeout: 60000 }).click();
        const actualItem =await page.locator("//span[@class='a-truncate-cut']"); 
        await expect(actualItem).toContainText(productName);   
    }
}
export default Addcart;