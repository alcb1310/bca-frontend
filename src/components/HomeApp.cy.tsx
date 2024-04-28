import App from "./Home";

describe("<App />", () => {
    beforeEach(() => {
      cy.intercept("GET", "http://localhost:42069/foo", {
          statusCode: 200,
          body: {
              message: "Hello world!",
          },
      }).as("foo");
      cy.mount( <App />);
    })

  it("renders", () => {
      cy.wait("@foo").then(() => {
          cy.get('[data-testid="title"]').should("have.text", "Hello world!");
          cy.get('[data-testid="message"]').should("have.text", "Hello world!");
      })
  });
});
