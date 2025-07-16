import { longNameGeneration } from "../../cypress/support/utils/randomName";
import NotesVWPage from "../../cypress/support/pageObjects/NotesVWPage";

describe("Notes CRUD Operations - Standard Workflow", () => {
  const noteTitle = longNameGeneration();

  beforeEach(() => {
    cy.visit("/");
  });

  it("Should measure API response time when loading notes page", () => {
    NotesVWPage.responseTime();
  });

  it("Should successfully create a new note with valid data", () => {
    NotesVWPage.createNote(noteTitle);
  });

  it("Should display created note and allow content updates", () => {
    NotesVWPage.readandupdateNote(noteTitle);
  });

  it("Should successfully delete the note", () => {
    NotesVWPage.deleteNote(noteTitle);
  });

  it("Should confirm note deletion and verify removal from list", () => {
    NotesVWPage.confirmDeletion(noteTitle);
  });
});

describe("Notes CRUD Operations - Edge Cases", () => {
  let noteTitle: string;

  beforeEach(() => {
    cy.fixture("notes").then((data) => {
      noteTitle = data.edgeCaseTitle;
    });
    cy.visit("/");
  });

  it("Should handle note creation with special characters and symbols", () => {
    NotesVWPage.createNote(noteTitle);
  });

  it("Should correctly display and update notes containing edge case characters", () => {
    NotesVWPage.readandupdateNote(noteTitle);
  });

  it("Should successfully delete the note", () => {
    NotesVWPage.deleteNote(noteTitle);
  });

  it("Should confirm note deletion and verify removal from list", () => {
    NotesVWPage.confirmDeletion(noteTitle);
  });
});

describe("Accessibility - Keyboard Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should support keyboard navigation throughout the application", () => {
    NotesVWPage.accessibility();
  });

  it("Should maintain logical tab order in create form", () => {
    NotesVWPage.tabOrder();
  });
});
