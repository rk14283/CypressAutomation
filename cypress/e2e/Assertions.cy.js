describe("Assertion demo", () => {
  it("implicit assertion", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    //should  and
    //this assertion would work if captured url is the same as eq url
    cy.url().should("include", "orangehrmlive");
    // cy.url().should(
    //   "eq",
    //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    // );
    // cy.url().should("contain", "orangehrm");

    //here we capture url one time and using should multiple times
    // cy.url()
    //   .should("include", "orangehrmlive")
    //   .should(
    //     "eq",
    //     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    //   )
    //   .should("contain", "orangehrm");

    //now we do not need to repeat should, we can say and
    //these are positive assertions
    cy.url()
      .should("include", "orangehrmlive")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("contain", "orangehrm")
      //using not to add negative asssertion
      .and("not.contain", "greenhrm");
    //capturing the title, orange captures part of title but assetion should pass
    cy.title()
      .should("include", "Orange")
      .and("eq", "OrangeHRM")
      .and("contain", "HRM");

    //logo element
    //was not able to get directly from Cypress
    //be.visible checks if element is visible or not
    // cy.get(".orangehrm-login-branding > img").should("be.visible");
    // //exist checks if element exists or not
    // cy.get(".orangehrm-login-branding > img").should("exist");

    //even shorter way to write
    cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist");

    //capture all links, and how many are available, does it match expectations

    //xpath does not work

    cy.get("input[placeholder='Username']").type("Admin"); //this statement provides value into input box
    cy.get("input[placeholder='Username']").should("have.value", "Admin"); //value checker
  });
  it("implicit assertion", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    //should  and
    //this assertion would work if captured url is the same as eq url
    cy.url().should("include", "orangehrmlive");
    // cy.url().should(
    //   "eq",
    //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    // );
    // cy.url().should("contain", "orangehrm");

    //here we capture url one time and using should multiple times
    // cy.url()
    //   .should("include", "orangehrmlive")
    //   .should(
    //     "eq",
    //     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    //   )
    //   .should("contain", "orangehrm");

    //now we do not need to repeat should, we can say and
    //these are positive assertions
    cy.url()
      .should("include", "orangehrmlive")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("contain", "orangehrm")
      //using not to add negative asssertion
      .and("not.contain", "greenhrm");
    //capturing the title, orange captures part of title but assetion should pass
    cy.title()
      .should("include", "Orange")
      .and("eq", "OrangeHRM")
      .and("contain", "HRM");

    //logo element
    //was not able to get directly from Cypress
    //be.visible checks if element is visible or not
    // cy.get(".orangehrm-login-branding > img").should("be.visible");
    // //exist checks if element exists or not
    // cy.get(".orangehrm-login-branding > img").should("exist");

    //even shorter way to write
    cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist");

    //capture all links, and how many are available, does it match expectations

    //xpath does not work

    cy.get("input[placeholder='Username']").type("Admin"); //this statement provides value into input box
    cy.get("input[placeholder='Username']").should("have.value", "Admin"); //value checker
  });
  it("explicit assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();

    let expName = "Paul Collings";
    //variable captured by get is placed in x, x is a parameter
    cy.get(".oxd-userdropdown-name").then((x) => {
      let acName = x.text();

      //assertion to expect actual to real name
      //explicit assertion in BDD approach
      expect(acName).to.equal(expName);
      expect(acName).to.not.equal(expName);
      //TDD style
      assert.equal(actName, expName);
      //second assertion fails
      assert.notEqual(actName, expName);
    });
  });
});
