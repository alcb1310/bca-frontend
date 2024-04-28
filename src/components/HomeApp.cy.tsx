import App from "./Home";

describe("<App />", () => {
  beforeEach(() => {
    // see: https://on.cypress.io/mounting-react
    cy.mount( <App />);
  });

  it("renders", () => {
    cy.get('[data-testid="title"]').should("have.text", "Hello world!");
  });
});
