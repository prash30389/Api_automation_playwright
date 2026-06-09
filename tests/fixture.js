const { test: base } = require('@playwright/test');

export const test = base.extend({
    helloWorld: async ({ }, use) => {
        console.log('Hello World');
        await use();
        console.log('After Hello World');
    }
});
