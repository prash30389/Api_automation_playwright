const { test } = require('./fixture');

test('basic test', async () => {
    console.log('This is a basic test');
})

test('hello world test', async ({ helloWorld }) => {
    console.log('This is a hello world test');
})
