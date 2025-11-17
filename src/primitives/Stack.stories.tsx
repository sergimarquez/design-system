import type { Meta, StoryObj } from "@storybook/react";
import Stack from "./Stack";
import Button from "./Button";
import Text from "./Text";

const meta: Meta<typeof Stack> = {
  title: "Primitives/Stack",
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "column"],
    },
    gap: {
      control: "number",
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "space-between", "space-around"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Vertical: Story = {
  args: {
    direction: "column",
    gap: 4,
    children: (
      <>
        <Button>First Button</Button>
        <Button variant="secondary">Second Button</Button>
        <Button variant="ghost">Third Button</Button>
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    direction: "row",
    gap: 4,
    children: (
      <>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </>
    ),
  },
};

export const Centered: Story = {
  args: {
    direction: "column",
    gap: 4,
    align: "center",
    justify: "center",
    children: (
      <>
        <Text>Centered content</Text>
        <Button>Centered button</Button>
      </>
    ),
  },
};

