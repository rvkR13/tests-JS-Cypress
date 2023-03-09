export class MainPage {
  logo = ".tm-header__logo-wrap";
  headerСontainer = ".tm-header__container";
  baseLayoutHeader = ".tm-base-layout__header";
  /*
   **метод проверки заголовка на главной странице
   */
  logoIsVisible = () => cy.get(this.logo).contains("Хабр").should("be.visible");
  /*
   **метод проверки текста в шапке на главной странице
   */
  textPresentHeaders(text) {
    cy.get(this.headerСontainer).contains(text).should("be.visible");
  }
  /*
   **метод проверки текста в меню на главной странице
   */
  textPresentHeadMenu(text) {
    cy.get(this.baseLayoutHeader).contains(text).should("be.visible");
  }
  /*
   **метод поиска элемента по href и нажатие по нему
   */
  searchHrefAndClick(href) {
    cy.getHref(href).should("be.visible").click();
  }
  /*
   **метод проверки что URL соответствует ожидаемому
   */
  checkUrl(urls) {
    cy.url().should("include", urls);
  }

  /*
   **метод поиска элементy и нажатие по нему
   */
  searchAndClick(elements) {
    cy.get(elements).click();
  }

  /*
   **метод проверки видимости элемента
   */
  elementPresents(element, text) {
    cy.get(element).should("be.visible");
  }
}
