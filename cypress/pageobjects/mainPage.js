export class MainPage {
  visibleLogo = () => cy.get('.tm-header__logo-wrap').contains("Хабр").should("be.visible");
}
