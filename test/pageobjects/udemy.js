class UdemyPage {
  get gSearch() {
    return $("input");
  }

  get gCookieBtn() {
    return $("div=Accept all");
  }

  get udemyCourse() {
    return $("*=Udemy");
  }

  get udemySearch() {
    return $("input[name='q']");
  }

  get udemySort() {
    return $("select");
  }

  open() {
    browser.url("https://www.google.com");
  }
}

export default new UdemyPage();
