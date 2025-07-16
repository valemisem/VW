import { longNameGeneration } from "../../cypress/support/utils/randomName";
import NotesVWPage from "../../cypress/support/pageObjects/NotesVWPage";

describe("Complete CRUD cycle with normal positive scenario", () => {
  const noteTitle = longNameGeneration();

  beforeEach(() => {
    cy.visit("/");
  });

  it("Measures response time for accessing notes page", () => {
    NotesVWPage.responseTime();
  });

  it("Creates a new note", () => {
    NotesVWPage.createNote(noteTitle);
  });

  it("Reads and updates", () => {
    NotesVWPage.readandupdateNote(noteTitle);
  });

  it("Deletes the new note", () => {
    NotesVWPage.deleteNote(noteTitle);
  });

  it("confirm deletion", () => {
    NotesVWPage.confirmDeletion(noteTitle);
  });
});

describe("Complete CRUD cycle with edge cases", () => {
  let noteTitle: string;

  beforeEach(() => {
    cy.fixture("notes").then((data) => {
      noteTitle = data.edgeCaseTitle;
    });
    cy.visit("/");
  });

  it("Measures response time for accessing notes page", () => {
    NotesVWPage.responseTime();
  });

  it("Creates a new note", () => {
    NotesVWPage.createNote(noteTitle);
  });

  it("Reads and updates", () => {
    NotesVWPage.readandupdateNote(noteTitle);
  });

  it("Deletes the new note", () => {
    NotesVWPage.deleteNote(noteTitle);
  });

  it("confirm deletion", () => {
    NotesVWPage.confirmDeletion(noteTitle);
  });
});
