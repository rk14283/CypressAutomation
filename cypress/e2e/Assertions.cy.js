describe("Assertion demo", () => {
  it("implicit assertion", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    //should  and
    //this assertion would work if captured url is the same as eq url
    cy.url().should("include", "orangehrmlive");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.url().should("contain", "orangehrm");
  });
});
