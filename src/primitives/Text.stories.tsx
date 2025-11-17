import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "Primitives/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["p", "span", "div", "strong", "em", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "muted"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "This is default text",
  },
};

export const Heading: Story = {
  args: {
    as: "h1",
    size: "3xl",
    weight: "bold",
    children: "This is a heading",
  },
};

export const Large: Story = {
  args: {
    size: "xl",
    children: "Large text",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small text",
  },
};

export const Muted: Story = {
  args: {
    color: "muted",
    children: "Muted text color",
  },
};

