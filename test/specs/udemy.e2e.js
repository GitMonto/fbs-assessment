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

  it("searches for test automation learning in google and displays correct results", async function () {
    // 2
    const searchMessage = "Test Automation Learning";
    await UdemyPage.gSearch.setValue(searchMessage);
    await UdemyPage.gSearch.keys("Enter");

    // assertion 2
    await expect(browser).toHaveUrlContaining("Test+Automation+Learning");
  });
});
