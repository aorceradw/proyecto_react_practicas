import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Base URL for the dev server
        url = "http://localhost:5173"

        print(f"Navigating to {url}...")
        await page.goto(url)
        await page.wait_for_selector("nav")

        # Verify Home page
        print("Checking Home page...")
        assert await page.title() != ""
        await page.screenshot(path="screenshot_home.png")

        # Verify navigation to Proyectos (Work)
        print("Navigating to Proyectos...")
        # Targeted selector as specified in memory
        proyectos_link = page.locator("nav").get_by_role("link", name="Proyectos", exact=True)
        await proyectos_link.click()
        await page.wait_for_url("**/trabajos")
        await page.wait_for_selector(".trabajos")
        print("Work page loaded.")
        await page.screenshot(path="screenshot_work.png")

        # Verify navigation to Sobre mí
        print("Navigating to Sobre mí...")
        sobre_mi_link = page.locator("nav").get_by_role("link", name="Sobre mí", exact=True)
        await sobre_mi_link.click()
        await page.wait_for_url("**/sobre-mi")
        await page.wait_for_selector(".sobre-mi")
        print("Sobre mí page loaded.")
        await page.screenshot(path="screenshot_sobre_mi.png")

        # Verify navigation to Contacto
        print("Navigating to Contacto...")
        contacto_link = page.locator("nav").get_by_role("link", name="Contacto", exact=True)
        await contacto_link.click()
        await page.wait_for_url("**/contacto")
        await page.wait_for_selector(".contacto")
        print("Contacto page loaded.")
        await page.screenshot(path="screenshot_contacto.png")

        await browser.close()
        print("Verification complete!")

if __name__ == "__main__":
    asyncio.run(run())
