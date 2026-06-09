const { test } = require('@playwright/test');
const { allowedNodeEnvironmentFlags } = require('node:process');
const mockData = { data: [], message: 'No Orders' };

test.describe.serial('Performing Response intercepting', async () => {
    let page;
    let context;

    test.beforeAll('launching an applicaiton', async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    })

    test('login into an application', async ({ }) => {
        await page.locator('#userEmail').fill('mehadimanzoor5@gmail.com');
        await page.locator('#userPassword').fill('Mehek@123');
        await page.locator('#login').click();
    })

    test('intercepting response', async ({ }) => {
        await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6972ddd1c941646b7ab101f6',
            async route => {
                const response = await page.request.fetch(route.request());
                let body = JSON.stringify(mockData);
                route.fulfill({
                    response,
                    body,
                });
            }
        );

        await page.getByRole("button", { name: "ORDERS" }).click();
        await page.waitForResponse('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6972ddd1c941646b7ab101f6');
        console.log(await page.locator('.mt-4').textContent());
        await page.pause();
    })

    test.afterAll('closing an application', async () => {
        await context.close()
        await page.close()
    })
})
