import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(record_video_dir="/home/jules/verification/videos")
        page = await context.new_page()

        try:
            print("Navigating to http://localhost:5173/")
            await page.goto("http://localhost:5173/")
            await page.wait_for_load_state("networkidle")

            # Take screenshot of home
            await page.screenshot(path="/home/jules/verification/screenshots/home.png")
            print("Home screenshot saved.")

            # Check theme toggle
            toggle = page.locator(".toggle-tema")
            await toggle.click()
            await page.wait_for_timeout(500)
            await page.screenshot(path="/home/jules/verification/screenshots/theme_claro.png")
            print("Theme toggle verified.")

            # Navigate to Work
            # Use exact: True for "Proyectos" in nav to avoid home section
            await page.locator("nav").get_by_role("link", name="Proyectos", exact=True).click()
            await page.wait_for_load_state("networkidle")
            await page.screenshot(path="/home/jules/verification/screenshots/work.png")
            print("Navigation to Work verified.")

        except Exception as e:
            print(f"Error during verification: {e}")
        finally:
            await context.close()
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
