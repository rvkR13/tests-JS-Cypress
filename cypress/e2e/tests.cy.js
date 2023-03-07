describe("Example test suite", () => {
  it(`Проверка наличия на странице текста "SoftAssertions"`, () => {
    cy.viewport(1920,1080)
    cy.visit("https://github.com/");
    cy.get('[aria-label="Search GitHub"]').type("selenide").type("{enter}");
    cy.get(".menu-item").contains("Wikis").click();
    cy.get("title=SoftAssertions").should("be.visible").click();
    cy.contains("SoftAssertions").should("be.visible");
    cy.url().should('include','https://github.com/YuriKopshev/selenide/wiki/SoftAssertions');     
});

it(`Проверка хедера habr.com на наличие заголовков "Хабр"`, () => {
  cy.viewport(1920,1080)
  cy.visit("https://habr.com/ru/all/");
  cy.get(".tm-header__logo-wrap").contains("Хабр").should("be.visible");
});   

it(`Проверка хедера habr.com на наличие заголовков ""Как стать автором"`, () => {
  cy.viewport(1920,1080)
  cy.visit("https://habr.com/ru/all/");
  cy.get(".tm-header__container").contains("Как стать автором").should("be.visible");
});

it(`Проверка хедера habr.com на наличие заголовков "Неделя фронтенда"`, () => {
  cy.viewport(1920,1080)
  cy.visit("https://habr.com/ru/all/");
  cy.get(".tm-header__container").contains("Неделя фронтенда").should("be.visible");
});

it(`В меню хедера должен быть отображен заголовок "Все потоки","Разработка","Администрирование","Дизайн","Менеджмент","Маркетинг","Научпоп"`, () => {
  cy.viewport(1920,1080)
  cy.visit("https://habr.com/ru/all/");
  cy.get(".tm-base-layout__header").should("be.visible")
  cy.get(".tm-base-layout__header").contains("Все потоки").should("be.visible");
  cy.get(".tm-base-layout__header").contains("Разработка").should("be.visible");
  cy.get(".tm-base-layout__header").contains("Администрирование").should("be.visible");
  cy.get(".tm-base-layout__header").contains("Дизайн").should("be.visible");
  cy.get(".tm-base-layout__header").contains("Менеджмент").should("be.visible");
  cy.get(".tm-base-layout__header").contains("Маркетинг").should("be.visible");
  cy.get(".tm-base-layout__header").contains("Научпоп").should("be.visible");
});    

it(`При нажатии на заголовок "Разработка" должен быть переход на страницу "Разработка"`, () => {
  cy.viewport(1920,1080)
  cy.visit("https://habr.com/ru/all/");
  cy.get('[href="/ru/flows/develop/"]').should("be.visible").click();
  cy.url().should('include','https://habr.com/ru/flows/develop/');
}); 

it(`клик по иконки выпадающего списка и выбор значения "Фриланс"`, () => {
  cy.viewport(1920,1080)
  cy.visit("https://habr.com/ru/all/");
  cy.get(".tm-header__icon_dropdown").click();
  cy.get(".tm-our-projects__items").should("be.visible");
  cy.get('[href="https://freelance.habr.com?utm_source=habr&utm_medium=habr_top_panel"]').should("be.visible").click();
}); 

  it('редирект на страницу "https://freelance.habr.com/"',()=>{
    cy.viewport(1920,1080)
    cy.visit('https://habr.com/ru/all/');
    cy.get(".tm-header__icon_dropdown").click();
    cy.get('[href="https://freelance.habr.com?utm_source=habr&utm_medium=habr_top_panel"]').should("be.visible").click()
    .first().then(($a)=>{
        const newUrl =  ('https://freelance.habr.com/'); 
        cy.visit(newUrl);
        cy.get('[aria-label="Хабр Фриланс"]').should("be.visible");
      })
    })
})

