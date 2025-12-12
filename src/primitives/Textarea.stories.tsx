import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Primitives/Textarea",
  component: Textarea,
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
    rows: {
      control: "number",
    },
    placeholder: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message...",
  },
};

export const WithValue: Story = {
  args: {
    label: "Description",
    defaultValue: "This is a pre-filled textarea with some content.",
  },
};

export const WithError: Story = {
  args: {
    label: "Comment",
    error: "This field is required",
    placeholder: "Enter your comment...",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled textarea",
    disabled: true,
    defaultValue: "This textarea is disabled",
  },
};

export const CustomRows: Story = {
  args: {
    label: "Long text",
    rows: 8,
    placeholder: "Enter a longer message...",
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: "No label textarea",
  },
};
