import puppeteer from "puppeteer";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return new Response(
      JSON.stringify({ error: "URL is required (use ?url=https://example.com)" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page.setViewport({ width: 1280, height: 720 });
    // Puppeteer gives a Buffer
    const screenshotBuffer = (await page.screenshot({ type: "png" })) as Buffer;

    // ✅ Convert Buffer -> Uint8Array -> ArrayBuffer
    const arrayBuffer = new Uint8Array(screenshotBuffer).buffer;

    await browser.close();

    return new Response(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to capture screenshot" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
