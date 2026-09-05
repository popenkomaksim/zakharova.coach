import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header", () => {
  test("renders the coach name as the logo", () => {
    render(<Header />, { wrapper: MemoryRouter });

    expect(screen.getByText("Polina Zakharova")).toBeInTheDocument();
  });

  test("renders navigation links to the main sections", () => {
    render(<Header />, { wrapper: MemoryRouter });

    expect(screen.getByText("Формати співпраці").closest("a")).toHaveAttribute(
      "href",
      "/formats",
    );
    expect(screen.getByText("Види планів").closest("a")).toHaveAttribute(
      "href",
      "/prices",
    );
    expect(
      screen.getByText("Додаткові послуги").closest("a"),
    ).toHaveAttribute("href", "/additional-services");
  });
});
