import type { Meta, StoryObj } from "@storybook/react";
import Grid from "./Grid";
import Card from "./Card";
import Text from "./Text";

const meta: Meta<typeof Grid> = {
  title: "Primitives/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    cols: {
      control: "select",
      options: [1, 2, 3, 4, 6, 12],
    },
    gap: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const CardItem = ({ num }: { num: number }) => (
  <Card>
    <Text weight="bold">Card {num}</Text>
    <Text size="sm" color="muted">
      Grid item content
    </Text>
  </Card>
);

export const ThreeColumns: Story = {
  args: {
    cols: 3,
    gap: 4,
    children: (
      <>
        <CardItem num={1} />
        <CardItem num={2} />
        <CardItem num={3} />
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    cols: 4,
    gap: 4,
    children: (
      <>
        <CardItem num={1} />
        <CardItem num={2} />
        <CardItem num={3} />
        <CardItem num={4} />
      </>
    ),
  },
};

export const TwoColumns: Story = {
  args: {
    cols: 2,
    gap: 6,
    children: (
      <>
        <CardItem num={1} />
        <CardItem num={2} />
      </>
    ),
  },
};

