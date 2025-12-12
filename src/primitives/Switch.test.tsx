import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Switch from "./Switch";

describe("Switch", () => {
  it("renders switch", () => {
    render(<Switch />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<Switch label="Enable notifications" />);
    expect(screen.getByLabelText("Enable notifications")).toBeInTheDocument();
  });

  it("is checked when checked prop is true", () => {
    render(<Switch checked onChange={() => {}} />);
    expect(screen.getByRole("switch")).toBeChecked();
  });

  it("is not checked when checked prop is false", () => {
    render(<Switch checked={false} onChange={() => {}} />);
    expect(screen.getByRole("switch")).not.toBeChecked();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Switch disabled />);
    expect(screen.getByRole("switch")).toBeDisabled();
  });

  it("handles toggle", async () => {
    const user = userEvent.setup();
    render(<Switch />);
    const switchElement = screen.getByRole("switch");

    expect(switchElement).not.toBeChecked();
    await user.click(switchElement);
    expect(switchElement).toBeChecked();
  });

  it("calls onChange handler", async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();
    render(<Switch onChange={handleChange} />);

    await user.click(screen.getByRole("switch"));
    expect(handleChange).toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(<Switch className="custom-class" />);
    expect(screen.getByRole("switch")).toHaveClass("custom-class");
  });

  it("forwards ref", () => {
    const ref = { current: null as HTMLInputElement | null };
    render(<Switch ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
