import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "./Select";

describe("Select", () => {
  const options = [
    { value: "", label: "Select..." },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  it("renders select with options", () => {
    render(<Select options={options} />);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue("");
  });

  it("renders with label", () => {
    render(<Select label="Choose option" options={options} id="test-select" />);
    expect(screen.getByLabelText("Choose option")).toBeInTheDocument();
  });

  it("displays error message", () => {
    render(<Select options={options} error="Required field" />);
    expect(screen.getByText("Required field")).toBeInTheDocument();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Select options={options} disabled />);
    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  it("handles value changes", async () => {
    const user = userEvent.setup();
    render(<Select options={options} />);
    const select = screen.getByRole("combobox");

    await user.selectOptions(select, "option1");
    expect(select).toHaveValue("option1");
  });

  it("calls onChange handler", async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();
    render(<Select options={options} onChange={handleChange} />);

    await user.selectOptions(screen.getByRole("combobox"), "option2");
    expect(handleChange).toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(<Select options={options} className="custom-class" />);
    expect(screen.getByRole("combobox")).toHaveClass("custom-class");
  });

  it("forwards ref", () => {
    const ref = { current: null as HTMLSelectElement | null };
    render(<Select options={options} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });
});
