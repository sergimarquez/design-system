import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, Card, Text, Stack, Input, Badge } from "../primitives";

const meta: Meta = {
  title: "Examples/Form",
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj;

export const ContactForm: Story = {
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
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.message) newErrors.message = "Message is required";
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
        }, 3000);
      }
    };

    return (
      <Card padding={8} style={{ maxWidth: "500px", width: "100%" }}>
        <Stack gap={6}>
          <Stack gap={2}>
            <Text as="h2" size="3xl" weight="bold">
              Contact Us
            </Text>
            <Text color="secondary">
              Fill out the form below and we'll get back to you as soon as possible.
            </Text>
          </Stack>

          {submitted && (
            <Badge variant="success">Thank you! Your message has been sent.</Badge>
          )}

          <form onSubmit={handleSubmit}>
            <Stack gap={5}>
              <Input
                label="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={errors.name}
                placeholder="John Doe"
              />

              <Input
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={errors.email}
                placeholder="john@example.com"
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  htmlFor="message"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "var(--color-foreground-primary)",
                    fontFamily: "var(--font-family-sans)",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message here..."
                  style={{
                    padding: "0.75rem",
                    fontSize: "1rem",
                    fontFamily: "var(--font-family-sans)",
                    color: "var(--color-foreground-primary)",
                    backgroundColor: "var(--color-background-primary)",
                    border: `2px solid ${errors.message ? "var(--color-status-error)" : "var(--color-border-default)"}`,
                    borderRadius: "0.375rem",
                    outline: "none",
                    transition: "border-color 0.2s ease",
                    minHeight: "120px",
                    resize: "vertical",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-interactive-default)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = errors.message
                      ? "var(--color-status-error)"
                      : "var(--color-border-default)";
                  }}
                />
                {errors.message && (
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-status-error)",
                      fontFamily: "var(--font-family-sans)",
                    }}
                  >
                    {errors.message}
                  </span>
                )}
              </div>

              <Button type="submit" variant="primary" size="lg" style={{ width: "100%" }}>
                Send Message
              </Button>
            </Stack>
          </form>
        </Stack>
      </Card>
    );
  },
};

export const LoginForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
      const newErrors: Record<string, string> = {};
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      validate();
    };

    return (
      <Card padding={8} style={{ maxWidth: "400px", width: "100%" }}>
        <Stack gap={6}>
          <Stack gap={2}>
            <Text as="h2" size="3xl" weight="bold">
              Sign In
            </Text>
            <Text color="secondary">
              Enter your credentials to access your account.
            </Text>
          </Stack>

          <form onSubmit={handleSubmit}>
            <Stack gap={5}>
              <Input
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={errors.email}
                placeholder="you@example.com"
              />

              <Input
                label="Password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                error={errors.password}
                placeholder="••••••••"
              />

              <Button type="submit" variant="primary" size="lg" style={{ width: "100%" }}>
                Sign In
              </Button>

              <Text size="sm" color="muted" style={{ textAlign: "center" }}>
                <a href="#forgot" style={{ color: "var(--color-interactive-default)" }}>
                  Forgot password?
                </a>
              </Text>
            </Stack>
          </form>
        </Stack>
      </Card>
    );
  },
};

