import {Given} from '@cucumber/cucumber'
import Addcart from '../pages/Addcart.page.mjs' 


Given('I navigate to Amazon.in', async function() {
  await this.retryStep(async () => {
  let addCart=new Addcart(page);
   await addCart.navigate();    
    });
  });

  Given('search product {string} and select',async function (productName) { 
    await this.retryStep(async () => {   
    let addCart=new Addcart(page);
    await addCart.selectProduct(productName);
    });
  });

  Given('add product to cart',async function () {
    await this.retryStep(async () => {
    let addCart=new Addcart(page);
    await addCart.addToCart();
    });
  });

  Given('verify product {string} is added properly in cart',async function (productName) {
    await this.retryStep(async () => {
    let addCart=new Addcart(page);
    await addCart.cartValidtion(productName);
    });
  });