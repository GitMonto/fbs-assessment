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
    // 4
    const udemyURL = "https://www.udemy.com/topic/automation-testing/";
    await expect(browser).toHaveUrl(udemyURL);
  });
  it("searches for 'BDD with Cucumber'", async function () {
    // 5
    const searchMessage = "BDD with Cucumber";
    const uSearch = $("input[name='q']");
    await uSearch.click();
    await uSearch.keys(searchMessage);
    await uSearch.keys("Enter");
    // assertion 5
    await expect(browser).toHaveUrlContaining("BDD+with+Cucumber");
  });
  // Automation step 5 only works when number 6 is commented out
  // Due to the reCaptcha 6 will fail but should be accurate
  it("selects highest rated result", async function () {
    // 6
    await UdemyPage.udemySort.click();
    const filter = "Highest Rated";
    await UdemyPage.udemySort.selectByVisibleTest(filter);

    const highestRated = $("#u263-popper-trigger--316");
    await highestRated.click();
    // assertion 6
    const title = await browser.getTitle();
    await expect(title).toBe(
      "Learn to Create BDD Framework using Cucumber and Java"
    );
  });
});
