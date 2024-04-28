import App from "./Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Wrapper from "./Wrapper";

describe("<App />", () => {
  beforeEach(() => {
    const queryClient = new QueryClient();
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Wrapper>
        <App />
      </Wrapper>,
    );
  });

  it("renders", () => {
    cy.get('[data-testid="title"]').should("have.text", "Hello world!");
  });
});
