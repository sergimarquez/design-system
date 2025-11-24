import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text", () => {
  it("renders with children", () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("renders as different HTML elements", () => {
    const { rerender } = render(<Text as="h1">Heading</Text>);
    expect(screen.getByText("Heading").tagName).toBe("H1");

    rerender(<Text as="span">Span</Text>);
    expect(screen.getByText("Span").tagName).toBe("SPAN");
  });

  it("applies size prop", () => {
    render(<Text size="lg">Large text</Text>);
    const element = screen.getByText("Large text");
    expect(element).toHaveStyle({ fontSize: "1.125rem" });
  });

  it("applies weight prop", () => {
    render(<Text weight="bold">Bold text</Text>);
    const element = screen.getByText("Bold text");
    expect(element).toHaveStyle({ fontWeight: "700" });
  });

  it("applies color prop", () => {
    render(<Text color="muted">Muted text</Text>);
    const element = screen.getByText("Muted text");
    expect(element).toHaveStyle({ color: "var(--color-foreground-muted)" });
  });
});
