import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders coach name", () => {
  render(<App />);
  const nameElement = screen.getByText(/Polina Zakharova/i);
  expect(nameElement).toBeInTheDocument();
});
