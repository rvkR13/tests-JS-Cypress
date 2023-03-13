describe("Example test suite", () => {
beforeEach(() => {
  cy.viewport(1920, 1080);
  cy.visit("https://github.com/");
});
it(`Проверка наличия на странице текста "SoftAssertions"`, () => {
  cy.get('[aria-label="Search GitHub"').type("selenide").type("{enter}");
  cy.get(".menu-item").contains("Wikis").click();
  cy.get("[title=SoftAssertions]").should("be.visible").click();
  cy.contains("SoftAssertions").should("be.visible");
  cy.url().should(
    "include",
    "https://github.com/YuriKopshev/selenide/wiki/SoftAssertions"
  );
});
})