const { test, expect } = require('@playwright/test');

test('performing delete operation', async ({ request }) => {
    const response = await request.delete("https://dummy.restapiexample.com/api/v1/delete/2723");

    // 1. Verify the response is successful (Status 200-299)
    if (!response.ok()) {
        const errorBody = await response.text();
        console.error(`Request failed with status ${response.status()}: ${errorBody}`);
    }

    // 2. Ensure we actually have JSON before parsing
    const contentType = response.headers()['content-type'];
    expect(contentType).toContain('application/json');

    const responseJson = await response.json();

    // 3. Assertions
    expect(responseJson.status).toBe('success');
    expect(responseJson.message).toContain('Successfully! Record has been deleted');
});
