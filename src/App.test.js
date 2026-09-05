import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders coach name", () => {
  render(<App />, { wrapper: MemoryRouter });
  const nameElement = screen.getByText(/Polina Zakharova/i);
  expect(nameElement).toBeInTheDocument();
});
