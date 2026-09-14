import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import i18n from "./i18n";
import App from "./App";

test("renders coach name", () => {
  i18n.changeLanguage("uk");
  render(<App />, { wrapper: MemoryRouter });
  const nameElement = screen.getByText(/Polina Zakharova/i);
  expect(nameElement).toBeInTheDocument();
});
