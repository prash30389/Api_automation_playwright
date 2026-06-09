const { test, expect } = require('@playwright/test');

test.describe.serial('put and Get together', () => {
    let name = 'Manzoor';
    let salary = '25000';
    let age = '39';
    let id = 21;

    test('performing get Operation', async ({ request }) => {
        const response = await request.get(`https://dummy.restapiexample.com/api/v1/employee/${id}`);

        // Fix: Check if response is OK and is actually JSON
        if (response.ok() && response.headers()['content-type']?.includes('application/json')) {
            const responseJson = await response.json();
            console.log('GET Response:', responseJson);
        } else {
            const text = await response.text();
            console.log(`GET Failed with status ${response.status()}. Received HTML instead of JSON.`);
        }
    });

    test('performing put operation by id', async ({ request }) => {
        const response = await request.put(`https://dummy.restapiexample.com/api/v1/employee/${id}`, {
            data: {
                "name": name,
                "salary": salary,
                "age": age
            }
        });

        if (response.ok() && response.headers()['content-type']?.includes('application/json')) {
            const responseJson = await response.json();
            console.log('PUT Response:', responseJson);
        } else {
            console.log(`PUT Failed with status ${response.status()}. The server returned HTML.`);
        }
    });
});
