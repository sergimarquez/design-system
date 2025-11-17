import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import Text from "./Text";

const meta: Meta<typeof Card> = {
  title: "Primitives/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["div", "article", "section"],
    },
    padding: {
      control: "number",
    },
    shadow: {
      control: "select",
      options: ["sm", "base", "md", "lg", "xl", "2xl", "inner", "none"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <Text>Card content goes here</Text>,
  },
};

export const WithPadding: Story = {
  args: {
    padding: 8,
    children: <Text>Card with larger padding</Text>,
  },
};

export const LargeShadow: Story = {
  args: {
    shadow: "xl",
    children: <Text>Card with large shadow</Text>,
  },
};

export const Article: Story = {
  args: {
    as: "article",
    children: (
      <>
        <Text as="h2" size="xl" weight="bold">
          Article Title
        </Text>
        <Text>
          This is an article card with multiple text elements inside.
        </Text>
      </>
    ),
  },
};

