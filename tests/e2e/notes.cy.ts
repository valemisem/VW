describe("Form Validation Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("creates a new note", () => {
    cy.get('[data-cy="create-note-btn"]').click();
    cy.get('[data-cy="note-title-input"]')
      .should("be.visible")
      .first()
      .type("Test note 16/07");
    cy.get('[data-cy="note-content-input"]')
      .should("be.visible")
      .type("Line 1{enter}Line 2");

    cy.intercept("POST", "**/notes").as("createNote");

    cy.get('[data-cy="note-save-btn"]').should("not.be.disabled").click();

    cy.wait(["@createNote"]);
  });
});
