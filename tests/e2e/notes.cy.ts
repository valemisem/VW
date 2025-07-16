import { longNameGeneration } from "../../cypress/support/utils/randomName";

describe("Complete CRUD cycle", () => {
  const noteTitle = longNameGeneration();

  beforeEach(() => {
    cy.visit("/");
  });

  it("measures response time for accessing notes page", () => {
    cy.intercept("GET", "**/notes").as("getNotes");

    const start = performance.now();
    cy.visit("/notes");

    cy.wait("@getNotes").then(() => {
      const end = performance.now();
      const totalTime = Math.round(end - start);

      cy.log(`API responded in ${totalTime} ms`);
      expect(totalTime).to.be.lessThan(1000);
    });
  });

  it("creates a new note", () => {
    cy.get('[data-cy="create-note-btn"]').click();

    cy.get('[data-cy="note-title-input"]')
      .should("be.visible")
      .first()
      .type(noteTitle);

    cy.get('[data-cy="note-content-input"]')
      .should("be.visible")
      .type("Line 1");

    cy.intercept("POST", "**/notes").as("createNote");

    cy.get('[data-cy="note-save-btn"]').should("not.be.disabled").click();

    cy.wait("@createNote");
  });

  it("reads the new note and update", () => {
    cy.get('a[href="/notes"]').click();
    cy.get('[data-cy="search-input"]').type(`${noteTitle}{enter}`);

    cy.contains(noteTitle).should("exist");
    cy.contains("Line 1").should("exist");

    cy.get('button[aria-label="edit button"]').first().click();

    cy.get('[data-cy="note-content-input"]')
      .should("be.visible")
      .clear()
      .type("This is the updated note content.");

    cy.intercept("PATCH", "**/notes/*").as("updateNote");

    cy.get('[data-cy="note-save-btn"]').should("not.be.disabled").click();

    cy.wait("@updateNote").its("response.statusCode").should("eq", 200);
  });

  it("delete the new note", () => {
    cy.get('a[href="/notes"]').click();
    cy.get('[data-cy="search-input"]').type(`${noteTitle}{enter}`);

    cy.contains(noteTitle).should("exist");
    cy.contains("This is the updated note content.").should("exist");

    cy.get('button[aria-label="delete button"]').first().click();

    cy.intercept("DELETE", "**/notes/*").as("deleteNote");
    cy.get(".Container-sc-pabhx0-0").click();

    cy.wait("@deleteNote").its("response.statusCode").should("eq", 200);
  });

  it("confirm deletion", () => {
    cy.get('a[href="/notes"]').click();
    cy.get('[data-cy="search-input"]').type(`${noteTitle}{enter}`);
    cy.contains(noteTitle).should("not.exist");
  });
});
