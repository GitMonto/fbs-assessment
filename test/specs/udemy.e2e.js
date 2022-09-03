import UdemyPage from "../pageobjects/udemy";

describe("Assessment", function () {
  it("opens google and accepts cookies", async function () {
    // 1. Go to google site
    await UdemyPage.open();
    // reject cookies
    const cookieBtn = $("div=Accept all");
    await cookieBtn.click();
    // assertion for 1
    await expect(browser).toHaveTitleContaining("Google");
  });

  it("searches for test automation learning and displays correct results", async function () {
    // 2
    const searchMessage = "Test Automation Learning";
    await UdemyPage.gSearch.setValue(searchMessage);
    await UdemyPage.gSearch.keys("Enter");

    // assertion 2
    await expect(browser).toHaveUrlContaining("Test+Automation+Learning");
  });

  it("selects the correct Udemy course", async function () {
    // 3
    const udemyCourse = $("*=Udemy");
    await udemyCourse.click();

    // assertion 3
    await expect(udemyCourse).toHaveTextContaining("Udemy");
  });
});
