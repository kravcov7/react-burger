describe("service is available", function () {
  before(function () {
    cy.visit("http://localhost:3000");
  });

  function remove(id) {
    cy.get(`[data-cy=${id}]`).trigger("dragstart");
    cy.get('[data-cy="drop-container"]').trigger("drop");
  }

  it("Перемещение булки", function () {
    remove("60cb6564fce49c00269d4018");
    cy.get('[data-cy="bun1"]')
      .children()
      .should(($children) => {
        expect($children).to.have.length(1);
      });
    cy.get('[data-cy="bun2"]')
      .children()
      .should(($children) => {
        expect($children).to.have.length(1);
      });
  });
  it("Замещение булки", function () {
    remove("60cb6564fce49c00269d4017");
    cy.get('[data-cy="bun1"]')
      .children()
      .should(($children) => {
        expect($children).to.have.length(1);
      });
    cy.get('[data-cy="bun2"]')
      .children()
      .should(($children) => {
        expect($children).to.have.length(1);
      });
  });
  it("Перемещение начинки", function () {
    remove("60cb6564fce49c00269d4020");
    remove("60cb6564fce49c00269d401f");
    remove("60cb6564fce49c00269d401a");
    remove("60cb6564fce49c00269d401a");
    cy.get('[data-cy="fillings"]')
      .children()
      .should(($children) => {
        expect($children).to.have.length(4);
      });
  });
});
