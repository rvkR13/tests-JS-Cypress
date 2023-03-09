import { MainPage } from "../pageobjects/MainPage";

describe("Example test suite", () => {
  const mainPage = new MainPage();

  const header = ".tm-header__container";
  const baseLayoutHeader = ".tm-base-layout__header";
  const iconDropDown = ".tm-header__icon_dropdown";
  const item = ".tm-our-projects__items";

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://habr.com/ru/all/");
  });

  it(`Проверка хедера habr.com на наличие заголовков "Хабр"`, () => {
    mainPage.visibleLogo();
  });

  it(`Проверка хедера habr.com на наличие заголовков ""Как стать автором"`, () => {
    cy.get(header).contains("Как стать автором").should("be.visible");
  });

  it(`Проверка хедера habr.com на наличие заголовков "Неделя фронтенда"`, () => {
    cy.get(header).contains("Неделя фронтенда").should("be.visible");
  });

  it(`В меню хедера должен быть отображен заголовок "Все потоки","Разработка","Администрирование","Дизайн","Менеджмент","Маркетинг","Научпоп"`, () => {
    cy.get(baseLayoutHeader).should("be.visible");
    cy.get(baseLayoutHeader).contains("Все потоки").should("be.visible");
    cy.get(baseLayoutHeader).contains("Разработка").should("be.visible");
    cy.get(baseLayoutHeader).contains("Администрирование").should("be.visible");
    cy.get(baseLayoutHeader).contains("Дизайн").should("be.visible");
    cy.get(baseLayoutHeader).contains("Менеджмент").should("be.visible");
    cy.get(baseLayoutHeader).contains("Маркетинг").should("be.visible");
    cy.get(baseLayoutHeader).contains("Научпоп").should("be.visible");
  });

  it(`При нажатии на заголовок "Разработка" должен быть переход на страницу "Разработка"`, () => {
    cy.getHref('"/ru/flows/develop/"').should("be.visible").click();
    cy.url().should("include", "https://habr.com/ru/flows/develop/");
  });

  it(`клик по иконки выпадающего списка и выбор значения "Фриланс"`, () => {
    cy.get(iconDropDown).click();
    cy.get(item).should("be.visible");
    cy.getHref(
      '"https://freelance.habr.com?utm_source=habr&utm_medium=habr_top_panel"'
    )
      .should("be.visible")
      .click();
  });

  it('редирект на страницу "https://freelance.habr.com/"', () => {
    cy.get(iconDropDown).click();
    cy.getHref(
      '"https://freelance.habr.com?utm_source=habr&utm_medium=habr_top_panel"'
    )
      .should("be.visible")
      .click()
      .first()
      .then(($a) => {
        const newUrl = "https://freelance.habr.com/";
        cy.visit(newUrl);
        cy.getAriaLabel(`"Хабр Фриланс"`).should("be.visible");
      });
  });
});