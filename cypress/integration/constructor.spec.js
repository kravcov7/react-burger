describe("service is available", function () {
  before(function () {
    cy.visit("http://localhost:3000");
  });

  function remove(index) {
    cy.get(`[data-cy='ingredient']`).eq(index).trigger("dragstart");
    cy.get('[data-cy="drop-container"]').trigger("drop");
  }

  it("Перемещение булки", function () {
    remove(0);
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
    remove(1);
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
    remove(2);
    remove(3);
    remove(4);
    remove(5);
    cy.get('[data-cy="fillings"]')
      .children()
      .should(($children) => {
        expect($children).to.have.length(4);
      });
  });
});
