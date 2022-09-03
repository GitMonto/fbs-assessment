class UdemyPage {
  get gSearch() {
    return $("input");
  }

  open() {
    browser.url("https://www.google.com");
  }
}

export default new UdemyPage();
