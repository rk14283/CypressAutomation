describe("My First Test", () => {
  it("test1-verify title-positive ", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    //This will very if ther title is orange HRM
    cy.title().should("eq", "OrangeHRM");
  });

  it("verify title-Negative tests", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    //This will very if ther title is orange HRM
    cy.title().should("eq", "OrangeHRM123");
  });
});
