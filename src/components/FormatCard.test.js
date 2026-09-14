import { render, screen } from "@testing-library/react";
import FormatCard from "./FormatCard";

describe("FormatCard", () => {
  test("renders the title and description", () => {
    render(
      <FormatCard
        title="Індивідуальні тренування"
        description="Персональний план під ваші цілі"
      />,
    );

    expect(
      screen.getByText("Індивідуальні тренування"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Персональний план під ваші цілі"),
    ).toBeInTheDocument();
  });

  test("does not render an image when no photo is provided", () => {
    render(<FormatCard title="Формат" description="Опис" />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  test("renders an image when a photo is provided", () => {
    render(
      <FormatCard
        title="Формат"
        description="Опис"
        photo="./photo.jpg"
      />,
    );

    expect(screen.getByRole("img")).toHaveAttribute("src", "./photo.jpg");
  });
});
