import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("renders with children", () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("renders as different HTML elements", () => {
    const { rerender } = render(<Card as="article">Article</Card>);
    expect(screen.getByText("Article").tagName).toBe("ARTICLE");

    rerender(<Card as="section">Section</Card>);
    expect(screen.getByText("Section").tagName).toBe("SECTION");
  });

  it("applies custom padding", () => {
    render(<Card padding={4}>Card</Card>);
    const card = screen.getByText("Card");
    expect(card).toHaveStyle({ padding: "1rem" });
  });

  it("applies shadow prop", () => {
    render(<Card shadow="lg">Card</Card>);
    const card = screen.getByText("Card");
    expect(card).toHaveStyle({
      boxShadow: expect.stringContaining("rgba"),
    });
  });
});

