import { render, screen } from "@testing-library/react";
import FormatCard from "./FormatCard";

describe("FormatCard", () => {
  test("renders the title, description, and pagination", () => {
    render(
      <FormatCard
        title="Індивідуальні тренування"
        description="Персональний план під ваші цілі"
        pagination="01/05"
      />,
    );

    expect(
      screen.getByText("Індивідуальні тренування"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Персональний план під ваші цілі"),
    ).toBeInTheDocument();
    expect(screen.getByText("01/05")).toBeInTheDocument();
  });

  test("does not render an image when no photo is provided", () => {
    render(
      <FormatCard title="Формат" description="Опис" pagination="02/05" />,
    );

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  test("renders an image when a photo is provided", () => {
    render(
      <FormatCard
        title="Формат"
        description="Опис"
        pagination="03/05"
        photo="./photo.jpg"
      />,
    );

    expect(screen.getByRole("img")).toHaveAttribute("src", "./photo.jpg");
  });
});
