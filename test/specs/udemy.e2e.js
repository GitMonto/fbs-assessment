import UdemyPage from "../pageobjects/udemy";

describe("Assessment", function () {
  it("searches google for the udemy course", async function () {
    // 1. Go to google site
    await UdemyPage.open();
    // reject cookies
    const cookieBtn = $("div=Accept all");
    await cookieBtn.click();
    // assertion for 1
    await expect(browser).toHaveTitleContaining("Google");
  });
});
