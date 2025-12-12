import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
  title: "Primitives/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    error: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Choose an option",
    options: [
      { value: "", label: "Select..." },
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};

export const WithValue: Story = {
  args: {
    label: "Selected option",
    defaultValue: "option2",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};

export const WithError: Story = {
  args: {
    label: "Required field",
    error: "This field is required",
    options: [
      { value: "", label: "Select..." },
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled select",
    disabled: true,
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ],
  },
};

export const WithoutLabel: Story = {
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};
