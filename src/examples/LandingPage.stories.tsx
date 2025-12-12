import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Button,
  Card,
  Text,
  Stack,
  Badge,
  Link,
  Input,
  Textarea,
} from "../primitives";

const meta: Meta = {
  title: "Examples/Landing Page",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const LandingPage: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
      const newErrors: Record<string, string> = {};
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
      if (!formData.message.trim()) {
        newErrors.message = "Message is required";
      } else if (formData.message.trim().length < 10) {
        newErrors.message = "Message must be at least 10 characters";
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validate()) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
        }, 3000);
      }
    };

    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--color-background-secondary)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "1.5rem 2rem",
            borderBottom: "1px solid var(--color-border-default)",
            backgroundColor: "var(--color-background-primary)",
          }}
        >
          <Stack
            direction="row"
            gap={4}
            justify="space-between"
            align="center"
            style={{ maxWidth: "1280px", margin: "0 auto" }}
          >
            <Text size="xl" weight="bold">
              Design System
            </Text>
            <Stack direction="row" gap={5}>
              <Link href="#features">Features</Link>
              <Link href="#components">Components</Link>
              <Link href="#docs">Documentation</Link>
            </Stack>
          </Stack>
        </div>

        {/* Hero Section */}
        <div
          style={{
            padding: "8rem 2rem 6rem",
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Stack gap={6}>
            <Badge
              variant="info"
              style={{ width: "fit-content", margin: "0 auto" }}
            >
              New Release v0.1.0
            </Badge>
            <Stack gap={5}>
              <Text
                as="h1"
                size="6xl"
                weight="bold"
                style={{ lineHeight: "1.1" }}
              >
                Build Beautiful Interfaces
              </Text>
              <Text
                size="xl"
                color="secondary"
                style={{
                  maxWidth: "640px",
                  margin: "0 auto",
                  lineHeight: "1.6",
                }}
              >
                A modern, accessible design system built with React, TypeScript,
                and design tokens. Create consistent, beautiful user experiences
                with ease.
              </Text>
            </Stack>
            <Stack
              direction="row"
              gap={3}
              justify="center"
              style={{ marginTop: "1rem" }}
            >
              <Button variant="primary" size="lg">
                Get Started
              </Button>
              <Button variant="secondary" size="lg">
                View Components
              </Button>
            </Stack>
          </Stack>
        </div>

        {/* Features Section */}
        <div
          style={{
            padding: "6rem 2rem",
            backgroundColor: "var(--color-background-primary)",
          }}
        >
          <Stack gap={10} style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <Text
              as="h2"
              size="4xl"
              weight="bold"
              style={{ textAlign: "center" }}
            >
              Key Features
            </Text>
            <Stack
              direction="row"
              gap={6}
              style={{ flexWrap: "wrap", justifyContent: "center" }}
            >
              <Card
                padding={6}
                shadow="md"
                style={{ flex: "1 1 320px", maxWidth: "360px" }}
              >
                <Text
                  as="h3"
                  size="xl"
                  weight="semibold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  Design Tokens
                </Text>
                <Text color="secondary" style={{ lineHeight: "1.6" }}>
                  Framework-agnostic tokens using CSS custom properties and
                  TypeScript constants for maximum flexibility.
                </Text>
              </Card>
              <Card
                padding={6}
                shadow="md"
                style={{ flex: "1 1 320px", maxWidth: "360px" }}
              >
                <Text
                  as="h3"
                  size="xl"
                  weight="semibold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  React Primitives
                </Text>
                <Text color="secondary" style={{ lineHeight: "1.6" }}>
                  Headless, accessible components that work with any styling
                  approach. Fully typed and customizable.
                </Text>
              </Card>
              <Card
                padding={6}
                shadow="md"
                style={{ flex: "1 1 320px", maxWidth: "360px" }}
              >
                <Text
                  as="h3"
                  size="xl"
                  weight="semibold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  TypeScript First
                </Text>
                <Text color="secondary" style={{ lineHeight: "1.6" }}>
                  Full type safety with strict mode for better developer
                  experience and fewer runtime errors.
                </Text>
              </Card>
            </Stack>
          </Stack>
        </div>

        {/* Contact Form Section */}
        <div
          style={{
            padding: "6rem 2rem",
            backgroundColor: "var(--color-background-secondary)",
          }}
        >
          <Stack gap={8} style={{ maxWidth: "600px", margin: "0 auto" }}>
            <Stack gap={2} style={{ textAlign: "center" }}>
              <Text as="h2" size="4xl" weight="bold">
                Get in Touch
              </Text>
              <Text color="secondary" size="base">
                Have a question or feedback? We&apos;d love to hear from you.
              </Text>
            </Stack>

            <Card padding={8} shadow="md">
              {submitted && (
                <Badge
                  variant="success"
                  style={{ width: "fit-content", marginBottom: "1.5rem" }}
                >
                  ✓ Thank you! Your message has been sent successfully.
                </Badge>
              )}

              <form onSubmit={handleSubmit}>
                <Stack gap={5}>
                  <Input
                    label="Name"
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    error={errors.name}
                    placeholder="John Doe"
                    disabled={submitted}
                  />

                  <Input
                    label="Email"
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    error={errors.email}
                    placeholder="john@example.com"
                    disabled={submitted}
                  />

                  <Textarea
                    label="Message"
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    error={errors.message}
                    placeholder="Tell us what you're thinking..."
                    rows={6}
                    disabled={submitted}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    style={{
                      width: "100%",
                      display: "block",
                    }}
                    disabled={submitted}
                  >
                    {submitted ? "Sending..." : "Send Message"}
                  </Button>
                </Stack>
              </form>
            </Card>
          </Stack>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "4rem 2rem",
            borderTop: "1px solid var(--color-border-default)",
            backgroundColor: "var(--color-background-primary)",
            marginTop: "2rem",
            borderBottom: "none",
          }}
        >
          <Stack
            gap={5}
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <Text color="secondary">
              © 2024 @sergi-marquez/design-system. Built with React and
              TypeScript.
            </Text>
            <Stack direction="row" gap={5} justify="center">
              <Link
                href="https://github.com/sergimarquez/design-system"
                external
              >
                GitHub
              </Link>
              <Link href="#docs">Documentation</Link>
            </Stack>
          </Stack>
        </div>
      </div>
    );
  },
};
