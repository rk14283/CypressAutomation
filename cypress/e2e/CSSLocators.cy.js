describe("CSSLocators", () => {
  it("csslocators", () => {
    cy.visit("http://automationpractice.com/index.php");

    cy.get("input#search_query_top").type("T-Shirts"); //id  tag is optional

    //get element
    cy.get("[name='submit_search']").click();
    cy.get(".lighter").contains("T-Shirts"); //Assertion
  });
});
