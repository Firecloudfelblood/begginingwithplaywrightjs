const{test, expect} = require('@playwright/test')

test('Login test', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("#username");
    const singin = page.locator("#signInBtn");

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    console.log(await page.title());

    await userName.fill('rahulshetty');
    await page.locator('[type="password"]').fill('learning');
    await singin.click();

    console.log(await page.locator("[style *= 'block']").textContent());

    await expect(page.locator("[style *= 'block']")).toContainText("Incorrect");

    await userName.fill("").fill("rahulshettyacademy");
    await singin.click();
});