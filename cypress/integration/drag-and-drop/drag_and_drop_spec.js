const space = 32;
const keydown = 40;
describe("Drag and drop", () => {
  it("reoder [item-1, item-2, item-3] to [item-2, item-3, item-1] ", () => {
    cy.visit("/");

    cy.get(".item")
      .eq(0)
      .as("item1")
      .should("have.text", "item 1");

    cy.get(".item")
      .eq(1)
      .as("item2")
      .should("have.text", "item 2");
   
   cy.get(".item")
      .eq(2)
      .as("item3")
      .should("have.text", "item 3");

    cy.get("@item1")
      .focus()
      .trigger("keydown", { keyCode: space })
      .trigger("keydown", { keyCode: keydown, force: true })
      .wait(0.5 * 1000)
      .trigger("keydown", { keyCode: space, force: true })
      .focus()
      .trigger("keydown", { keyCode: space })
      .trigger("keydown", { keyCode: keydown, force: true })
      .wait(0.5 * 1000)
      .trigger("keydown", { keyCode: space, force: true });

    cy.get(".item")
      .eq(0)
      .should("have.text", "item 2");

    cy.get(".item")
      .eq(1)
      .should("have.text", "item 3");
    
    cy.get(".item")
      .eq(2)
      .should("have.text", "item 1");
  });
});