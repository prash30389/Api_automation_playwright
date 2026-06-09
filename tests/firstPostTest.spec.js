const { test, expect } = require('@playwright/test');

test.describe.serial('Post and Get together', () => {
    let name = 'Manzoor';
    let salary = '25000';
    let age = '39';
    let id;

    test('performing Post Operation', async ({ request }) => {
        const response = await request.post("https://dummy.restapiexample.com/api/v1/create", {
            data: { "name": name, "salary": salary, "age": age }
        });

        // Check if the response is actually OK (200)
        expect(response.ok()).toBeTruthy();

        const responseJson = await response.json();

        // Safety: Ensure data object exists before accessing .id
        if (responseJson && responseJson.data) {
            id = responseJson.data.id;
            console.log('Created ID: ' + id);
        } else {
            throw new Error("POST failed: API returned no data.");
        }
    });

    test('performing get operation by id', async ({ request }) => {
        // Use backticks for template literals
        const response = await request.get(`https://dummy.restapiexample.com/api/v1/employee/${id}`);

        // If the API is rate-limiting you (Error 429), this check prevents the crash
        if (!response.ok()) {
            console.log(`API Error: ${response.status()} - ${response.statusText()}`);
            return;
        }

        const responseJson = await response.json();

        // Safety: Prevent reading employee_name if data is undefined
        if (responseJson && responseJson.data) {
            console.log('employee name is ' + responseJson.data.employee_name);
        } else {
            console.log('Record not found or API returned empty data for ID: ' + id);
        }
    });
});