import { Then, setDefaultTimeout } from '@cucumber/cucumber'

setDefaultTimeout(120 * 1000);

Then('I tap the back button', async () => {
    await element(by.id('header-back')).atIndex(0).tap();
});