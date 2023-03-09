import { MainPage } from "../pageobjects/MainPage";

describe("Example test suite", () => {
  const mainPage = new MainPage();
  const baseLayoutHeader = ".tm-base-layout__header";
  const iconDropDown = ".tm-header__icon_dropdown";
  const item = ".tm-our-projects__items";
  const newUrl = "https://freelance.habr.com/";

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://habr.com/ru/all/");
  });

  it(`Проверка хедера habr.com на наличие заголовков "Хабр"`, () => {
    mainPage.visibleLogo();
  });

  it(`Проверка хедера habr.com на наличие заголовков "Как стать автором"`, () => {
    mainPage.textPresentHeaders("Как стать автором");
  });
  it(`Проверка хедера habr.com на наличие заголовков "Неделя фронтенда"`, () => {
    mainPage.textPresentHeaders("Неделя фронтенда");
  });

  it(`В меню хедера должен быть отображен заголовок "Все потоки","Разработка","Администрирование","Дизайн","Менеджмент","Маркетинг","Научпоп"`, () => {
    mainPage.textPresentHeadMenu("Все потоки");
    mainPage.textPresentHeadMenu("Разработка");
    mainPage.textPresentHeadMenu("Администрирование");
    mainPage.textPresentHeadMenu("Дизайн");
    mainPage.textPresentHeadMenu("Менеджмент");
    mainPage.textPresentHeadMenu("Маркетинг");
    mainPage.textPresentHeadMenu("Научпоп");
  });

  it(`При нажатии на заголовок "Разработка" должен быть переход на страницу "Разработка"`, () => {
    mainPage.searchHrefAndClick('"/ru/flows/develop/"');
    mainPage.checkUrl("https://habr.com/ru/flows/develop/")
  
  });

  it(`клик по иконки выпадающего списка и выбор значения "Фриланс"`, () => {
    mainPage.searchAndClick(iconDropDown);
    mainPage.elementPresents(item);
    mainPage.searchHrefAndClick('"https://freelance.habr.com?utm_source=habr&utm_medium=habr_top_panel"')
    cy.get(item).should("be.visible");
   
  });

  it('редирект на страницу "https://freelance.habr.com/"', () => {
    mainPage.searchAndClick(iconDropDown);
    mainPage.searchHrefAndClick('"https://freelance.habr.com?utm_source=habr&utm_medium=habr_top_panel"')
        cy.visit(newUrl);
        cy.getAriaLabel(`"Хабр Фриланс"`).should("be.visible");
      });
  });

