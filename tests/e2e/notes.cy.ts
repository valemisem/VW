import { longNameGeneration } from "../../cypress/support/utils/randomName";

describe("Complete CRUD cycle", () => {
  const signedDocDescription = longNameGeneration(); // generate ONCE before tests

  beforeEach(() => {
    cy.visit("/");
  });

  it("creates a new note", () => {
    cy.get('[data-cy="create-note-btn"]').click();

    cy.get('[data-cy="note-title-input"]')
      .should("be.visible")
      .first()
      .type(signedDocDescription);

    cy.get('[data-cy="note-content-input"]')
      .should("be.visible")
      .type("Line 1");

    cy.intercept("POST", "**/notes").as("createNote");

    cy.get('[data-cy="note-save-btn"]').should("not.be.disabled").click();

    cy.wait("@createNote");
  });

  it("reads the new note and update", () => {
    cy.get('a[href="/notes"]').click();
    cy.get('[data-cy="search-input"]').type(`${signedDocDescription}{enter}`);

    // Wait for the filtered result to appear
    cy.contains(signedDocDescription).should("exist");
    cy.contains("Line 1").should("exist");

    cy.get('button[aria-label="edit button"]').first().click();

    cy.get('[data-cy="note-content-input"]')
      .should("be.visible")
      .clear()
      .type("This is the updated note content.");

    // Intercept the PATCH request for saving the updated note
    cy.intercept("PATCH", "**/notes/*").as("updateNote");

    cy.get('[data-cy="note-save-btn"]').should("not.be.disabled").click();

    // Wait for PATCH to complete
    cy.wait("@updateNote").its("response.statusCode").should("eq", 200);
  });

  it("delete the new note", () => {
    cy.get('a[href="/notes"]').click();
    cy.get('[data-cy="search-input"]').type(`${signedDocDescription}{enter}`);

    // Wait for the filtered result to appear
    cy.contains(signedDocDescription).should("exist");
    cy.contains("This is the updated note content.").should("exist");

    cy.get('button[aria-label="delete button"]').first().click();

    cy.intercept("DELETE", "**/notes/*").as("deleteNote");
    cy.get(".Container-sc-pabhx0-0").click();

    cy.wait("@deleteNote").its("response.statusCode").should("eq", 200);
  });
});
