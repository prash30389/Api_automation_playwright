const { test, expect } = require('@playwright/test');

test('performing post operation', async ({ request }) => {
    const response = await request.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
        data: {
            "userEmail": "mehadimanzoor5@gmail.com",
            "userPassword": "Mehek@123"
        }
    });

    console.log('Status Code:', response.status());

    // 1. Call .json() only ONCE and store it in a variable
    const responseJson = await response.json();

    // 2. Now use that variable for logging and assertions
    console.log('Response Body:', responseJson);
    console.log('User ID:', responseJson.userId);

    expect(responseJson.message).toContain('Login Successfully');
});
