const { test, expect } = require('@playwright/test');

test('Testing first API Call', async ({ request }) => {
  // Fixed the spelling from 'restapieample' to 'restapiexample'
  const response = await request.get("https://dummy.restapiexample.com/api/v1/employees");

  console.log(response.status());
  console.log(response.statusText());

  const responseData = await response.json();
  console.log(responseData);

  const age = responseData.data[7].employee_age;
  console.log('age at 7th index is ' + age);
  
  expect(response.ok()).toBeTruthy();
});
