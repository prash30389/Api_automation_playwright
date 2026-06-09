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

    test('intercepting request', async () => {
        await page.locator('.card-body b').first().waitFor();
        await page.getByRole("button", { name: 'ORDERS' }).click();
        await page.getByRole("button", { name: 'HOME' }).click();

        await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*',
            route => {
                route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*' });
            }
        )
        await page.locator("button:has-text('View')").first().click();
        await page.pause();
    })

    test.afterAll('closing an application', async () => {
        await context.close()
        await page.close()
    })
})
