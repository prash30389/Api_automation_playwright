# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\firstAPITest.spec.js >> Testing first API Call
- Location: tests\firstAPITest.spec.js:3:1

# Error details

```
Error: apiRequestContext.get: getaddrinfo ENOTFOUND restapieample.com
Call log:
  - → GET https://restapieample.com/
    - user-agent: Playwright/1.59.1 (x64; windows 10.0) node/24.14
    - accept: */*
    - accept-encoding: gzip,deflate,br

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Testing first API Call', async ({ request }) => {
  4  |   // Uses Playwright's built-in request fixture automatically
> 5  |   const response = await request.get("https://restapieample.com");
     |                                  ^ Error: apiRequestContext.get: getaddrinfo ENOTFOUND restapieample.com
  6  | 
  7  |   console.log(await response.status());
  8  |   console.log(await response.statusText());
  9  | 
  10 |   const responseData = await response.json();
  11 |   console.log(responseData);
  12 | 
  13 |   // Safely extracts data from the JSON array
  14 |   const age = responseData.data[7].employee_age;
  15 |   console.log('age at 7th index is ' + age);
  16 |   
  17 |   // Optional: Validates the API response status is successful
  18 |   expect(response.ok()).toBeTruthy();
  19 | });
  20 | 
```