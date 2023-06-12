describe("CSSLocators", () => {
  it("csslocators", () => {
    cy.visit("http://automationpractice.com/index.php");

    // cy.get("input#search_query_top").type("T-Shirts"); //id  tag is optional

    //  cy.get(".search_query").type("T-Shirts"); //class tag is optional
    // cy.get("[name='submit_search']").type("T-Shirts"); //attribute tag is optional
    cy.get("input.search_query[name='submit_search']").type("T-Shirts"); //tag class attribute is optional
    //get element
    cy.get("[name='submit_search']").click();
    cy.get(".lighter").contains("abc"); //Assertion
  });
});
