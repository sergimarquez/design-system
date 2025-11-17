import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import Text from "./Text";
import Stack from "./Stack";

const meta: Meta<typeof Modal> = {
  title: "Primitives/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title">
        <Stack gap={4}>
          <Text>This is the modal content. You can put anything here.</Text>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Stack>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => <ModalDemo />,
};

export const WithoutTitle: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Stack gap={4}>
            <Text>Modal without a title</Text>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </Stack>
        </Modal>
      </>
    );
  },
};

export const WithContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Example Modal"
        >
          <Stack gap={4}>
            <Text>
              This modal demonstrates a more complex layout with multiple
              elements.
            </Text>
            <Text size="sm" color="muted">
              You can use any components inside the modal content area.
            </Text>
            <Stack direction="row" gap={2} justify="end">
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>Confirm</Button>
            </Stack>
          </Stack>
        </Modal>
      </>
    );
  },
};

