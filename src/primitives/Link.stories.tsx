import type { Meta, StoryObj } from "@storybook/react";
import Link from "./Link";

const meta: Meta<typeof Link> = {
  title: "Primitives/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    external: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Internal: Story = {
  args: {
    href: "#",
    children: "Internal link",
  },
};

export const External: Story = {
  args: {
    href: "https://example.com",
    external: true,
    children: "External link",
  },
};

export const Inline: Story = {
  args: {
    href: "#",
    children: "This is inline text with a link embedded in it.",
  },
  render: (args) => (
    <>
      This is inline text with a <Link {...args}>link</Link> embedded in it.
    </>
  ),
};

