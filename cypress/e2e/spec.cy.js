describe("e2e test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/");
  });
  it("", () => {
    cy.contains("Task List");
  });
  it("add todo and stability after reload", () => {
    cy.get("[data-test='add-btn-UNDONE']").click().type("test text");
    cy.get("[data-test='textarea']").contains("test text").blur();
    cy.get("[data-test='todo-list-UNDONE']").get(".todo").contains("test text");
    cy.reload();
    cy.get("[data-test='todo-list-UNDONE']").get(".todo").contains("test text");
  });
  it("complete", () => {
    cy.get("[data-test='todo-component-1']")
      .get("[data-test='todo-checkbox-1']")
      .click();
    cy.get("[data-test='todo-component-1']")
      .get("[data-test='todo-checkbox-1']")
      .should("have.checked", true);
  });
  it("delete", () => {
    cy.get("[data-test='todo-component-1']")
      .get("[data-test='todo-remove-1']")
      .click({ force: true });
    cy.get("[data-test='todo-list-UNDONE']")
      .get(".todo")
      .contains("test text")
      .should("not.exist");
  });
});
