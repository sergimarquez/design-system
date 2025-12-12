import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Primitives/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: "Enable notifications",
  },
};

export const Checked: Story = {
  args: {
    label: "Enable notifications",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled switch",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled checked switch",
    checked: true,
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        label="Toggle me"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const MultipleSwitches: Story = {
  render: () => {
    const [email, setEmail] = useState(false);
    const [sms, setSms] = useState(true);
    const [push, setPush] = useState(false);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Switch
          label="Email notifications"
          checked={email}
          onChange={(e) => setEmail(e.target.checked)}
        />
        <Switch
          label="SMS notifications"
          checked={sms}
          onChange={(e) => setSms(e.target.checked)}
        />
        <Switch
          label="Push notifications"
          checked={push}
          onChange={(e) => setPush(e.target.checked)}
        />
      </div>
    );
  },
};
