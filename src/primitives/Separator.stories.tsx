import type { Meta, StoryObj } from "@storybook/react";
import Separator from "./Separator";
import Text from "./Text";
import Stack from "./Stack";

const meta: Meta<typeof Separator> = {
  title: "Primitives/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: "100%", padding: "1rem" }}>
      <Text>Content above</Text>
      <Separator orientation="horizontal" />
      <Text>Content below</Text>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Stack direction="row" gap={4} style={{ height: "100px", padding: "1rem" }}>
      <Text>Left content</Text>
      <Separator orientation="vertical" />
      <Text>Right content</Text>
    </Stack>
  ),
};

export const WithSpacing: Story = {
  render: () => (
    <div style={{ width: "100%", padding: "1rem" }}>
      <Text>First section</Text>
      <Separator orientation="horizontal" style={{ margin: "2rem 0" }} />
      <Text>Second section</Text>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div
      style={{
        padding: "1.5rem",
        border: "1px solid var(--color-border-default)",
        borderRadius: "0.5rem",
        width: "300px",
      }}
    >
      <Text weight="bold" size="lg">
        Card Title
      </Text>
      <Separator orientation="horizontal" style={{ margin: "1rem 0" }} />
      <Text>Card content goes here</Text>
    </div>
  ),
};
