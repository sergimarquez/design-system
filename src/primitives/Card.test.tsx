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
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    });
  });
});

