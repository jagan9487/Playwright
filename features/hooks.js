import { setWorldConstructor, BeforeAll, AfterAll, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "playwright";

setDefaultTimeout(80000); //Default timeout
// Launch the browser
BeforeAll(async function () {
    global.browser = await chromium.launch({headless: false,slowMo: 1000,args:["--start-maximized"]});
    global.context = await browser.newContext({viewport:null});
    global.page = await context.newPage();
});
 
 
// Quit the browser
AfterAll(async function () {
    await global.browser.close();
});


// Define a custom World constructor to add the retry mechanism
class CustomWorld {
  constructor() {
    this.page = null;
  }

  async retryStep(stepFunction, maxRetries = 2) {
    let attempt = 0;
    let lastError;

    while (attempt <= maxRetries) {
      attempt++;
      try {
        await stepFunction();
        return;
      } catch (error) {
        lastError = error;
        console.log(`Step failed on attempt ${attempt}. Retrying...`);
      }

      if (attempt > maxRetries) {
        console.error('Max retries reached. Failing step.');
        throw lastError;
      }
    }
  }
}
setWorldConstructor(CustomWorld);
