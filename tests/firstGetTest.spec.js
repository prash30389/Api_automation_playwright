const { test, expect } = require('@playwright/test')
const { request } = require('node:http')

test('testing api get request', async ({ request }) => {
    const response = await request.get("https://dummy.restapiexample.com/api/v1/employees")

    console.log(response.status())
    console.log(response.statusText())

    const responseData = await response.json()
    console.log(responseData)
    const age = await responseData.data[7].employee_age;
    console.log('age at 7th index is ' + age)

    expect(response.status()).toBe(200)
    expect(response.statusText()).toBe('OK')

    expect(await responseData.status).toBe('success')
    expect(await responseData.data[15].employee_name).toContain('Michael')
})
