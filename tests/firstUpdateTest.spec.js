const { test, expect } = require('@playwright/test');

test('performing update operation', async ({ request }) => {
    const response = await request.put('https://dummy.restapiexample.com/api/v1/update/2723', {
        data: {
            "name": "Mehek",
            "salary": "25000",
            "age": "12"
        }
    });

    // 1. Get the JSON body
    const responseJson = await response.json();

    // 2. Log the status (access status directly from the response object)
    console.log('Status Code:', response.status());

    // 3. Log the JSON data
    console.log('Response Body:', responseJson);

    // Optional: Add an assertion to ensure the update was successful
    expect(response.ok()).toBeTruthy();
});