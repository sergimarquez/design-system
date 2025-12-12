import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Textarea from "./Textarea";

describe("Textarea", () => {
  it("renders textarea", () => {
    render(<Textarea />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<Textarea label="Message" id="test-textarea" />);
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });

  it("displays error message", () => {
    render(<Textarea error="This field is required" />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Textarea disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("handles value changes", async () => {
    const user = userEvent.setup();
    render(<Textarea />);
    const textarea = screen.getByRole("textbox");

    await user.type(textarea, "Hello world");
    expect(textarea).toHaveValue("Hello world");
  });

  it("calls onChange handler", async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();
    render(<Textarea onChange={handleChange} />);

    await user.type(screen.getByRole("textbox"), "test");
    expect(handleChange).toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(<Textarea className="custom-class" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom-class");
  });

  it("forwards ref", () => {
    const ref = { current: null as HTMLTextAreaElement | null };
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });
});
