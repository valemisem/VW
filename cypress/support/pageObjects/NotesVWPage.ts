const notes_selectors = require("../selectors/notes_vw_selectors.json");

class NotesVWPage {
  responseTime() {
    cy.intercept("GET", "**/notes").as("getNotes");

    const start = performance.now();
    cy.visit("/notes");

    cy.wait("@getNotes").then(() => {
      const end = performance.now();
      const totalTime = Math.round(end - start);

      cy.log(`API responded in ${totalTime} ms`);
      expect(totalTime).to.be.lessThan(1000);
    });
  }

  createNote(title: string) {
    cy.get(notes_selectors.create_note).click();

    cy.get(notes_selectors.note_title_input)
      .should("be.visible")
      .first()
      .type(title, { parseSpecialCharSequences: false });

    cy.fixture("notes").then((texts) => {
      cy.get(notes_selectors.note_content_input)
        .should("be.visible")
        .type(texts.simpleNote);
    });

    cy.intercept("POST", "**/notes").as("createNote");

    cy.get(notes_selectors.note_save_btn).should("not.be.disabled").click();

    cy.wait("@createNote");
  }

  readandupdateNote(title: string) {
    cy.get(notes_selectors.notes_link).click();
    cy.get(notes_selectors.search_input)
      .type(title, { parseSpecialCharSequences: false })
      .type("{enter}");

    cy.contains(title).should("exist");
    cy.fixture("notes").then((texts) => {
      cy.contains(texts.simpleNote).should("exist");
    });

    cy.get(notes_selectors.edit_button).first().click();

    cy.get(notes_selectors.note_content_input)
      .should("be.visible")
      .clear()
      .type("this is the updated note content");

    cy.intercept("PATCH", "**/notes/*").as("updateNote");

    cy.get(notes_selectors.note_save_btn).should("not.be.disabled").click();

    cy.wait("@updateNote").its("response.statusCode").should("eq", 200);
  }

  deleteNote(title: string) {
    cy.get(notes_selectors.notes_link).click();
    cy.get(notes_selectors.search_input)
      .type(title, { parseSpecialCharSequences: false })
      .type("{enter}");
    cy.contains(title).should("exist");
    cy.contains("this is the updated note content").should("exist");

    cy.get(notes_selectors.delete_button).first().click();

    cy.intercept("DELETE", "**/notes/*").as("deleteNote");
    cy.get(".Container-sc-pabhx0-0").click();

    cy.wait("@deleteNote").its("response.statusCode").should("eq", 200);
  }

  confirmDeletion(title: string) {
    cy.get(notes_selectors.notes_link).click();
    cy.get(notes_selectors.search_input)
      .type(title, { parseSpecialCharSequences: false })
      .type("{enter}");
    cy.contains(title).should("not.exist");
  }
}

export default new NotesVWPage();
