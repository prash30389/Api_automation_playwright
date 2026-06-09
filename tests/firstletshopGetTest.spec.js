const { test, expect } = require('@playwright/test')
const { request } = require('node:http');
const { escape } = require('node:querystring');

test('Testing first API Call', async ({ request }) => {
    const response = await request.get("https://rahulshettyacademy.com/api/ecom/user/get-cart-count/6972ddd1c941646b7ab101f6", {
        headers: {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTcyZGRkMWM5NDE2NDZiN2FiMTAxZjYiLCJ1c2VyRW1haWwiOiJtZWhhZGltYW56b29yNUBnbWFpbC5jb20iLCJ1c2VyTW9iaWxlIjo5NzQxOTAxMjQxLCJ1c2VyUm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzc1NDY1NDMzLCJleHAiOjE4MDcwMjMwMzN9.op-mZ1g64UjBFb_2UgEQUCP_OSkcCToTayxwvTyv2TE"
        }
    });

    console.log(await response.status());
    console.log(await response.statusText())

    const responseData = await response.json();
    console.log(responseData);
})
