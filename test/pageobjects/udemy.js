class UdemyPage {
  get gSearch() {
    return $("input[name='q']");
  }

  open() {
    browser.url("https://www.google.com");
  }
}

export default new UdemyPage();
