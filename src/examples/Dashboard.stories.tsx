import type { Meta, StoryObj } from "@storybook/react";
import { Button, Card, Text, Stack, Badge, Grid } from "../primitives";

const meta: Meta = {
  title: "Examples/Dashboard",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

const StatCard = ({ title, value, change, variant = "default" }: {
  title: string;
  value: string;
  change?: string;
  variant?: "default" | "success" | "warning" | "error";
}) => (
  <Card padding={6}>
    <Stack gap={3}>
      <Text size="sm" color="muted">
        {title}
      </Text>
      <Text size="4xl" weight="bold">
        {value}
      </Text>
      {change && (
        <Badge variant={variant === "success" ? "success" : variant === "error" ? "error" : "default"}>
          {change}
        </Badge>
      )}
    </Stack>
  </Card>
);

const ActivityCard = ({ title, description, time }: {
  title: string;
  description: string;
  time: string;
}) => (
  <Card padding={4}>
    <Stack gap={2}>
      <Stack direction="row" gap={3} justify="space-between" align="start">
        <Stack gap={1}>
          <Text weight="semibold">{title}</Text>
          <Text size="sm" color="secondary">
            {description}
          </Text>
        </Stack>
        <Text size="xs" color="muted">
          {time}
        </Text>
      </Stack>
    </Stack>
  </Card>
);

export const Dashboard: Story = {
  render: () => (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-background-secondary)" }}>
      {/* Header */}
      <div style={{ 
        padding: "2rem 3rem",
        borderBottom: "1px solid var(--color-border-default)",
        backgroundColor: "var(--color-background-primary)"
      }}>
        <Stack direction="row" gap={4} justify="space-between" align="center">
          <Text size="xl" weight="bold">Dashboard</Text>
          <Stack direction="row" gap={3}>
            <Button variant="secondary">Settings</Button>
            <Button variant="primary">New Project</Button>
          </Stack>
        </Stack>
      </div>

      {/* Main Content */}
      <div style={{ padding: "3rem", maxWidth: "1400px", margin: "0 auto" }}>
        <Stack gap={8}>
          {/* Stats Grid */}
          <Grid cols={4} gap={4}>
            <StatCard
              title="Total Users"
              value="12,345"
              change="+12.5%"
              variant="success"
            />
            <StatCard
              title="Active Projects"
              value="89"
              change="+5"
              variant="success"
            />
            <StatCard
              title="Revenue"
              value="$45.2K"
              change="-2.1%"
              variant="error"
            />
            <StatCard
              title="Pending Tasks"
              value="23"
            />
          </Grid>

          {/* Two Column Layout */}
          <Grid cols={2} gap={6}>
            {/* Projects Section */}
            <Card padding={6}>
              <Stack gap={6}>
                <Stack direction="row" gap={3} justify="space-between" align="center">
                  <Text as="h2" size="2xl" weight="semibold">
                    Recent Projects
                  </Text>
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </Stack>
                <Stack gap={4}>
                  <ActivityCard
                    title="Website Redesign"
                    description="Updating the main landing page with new components"
                    time="2h ago"
                  />
                  <ActivityCard
                    title="Mobile App"
                    description="Implementing user authentication flow"
                    time="5h ago"
                  />
                  <ActivityCard
                    title="API Documentation"
                    description="Writing documentation for v2.0 release"
                    time="1d ago"
                  />
                </Stack>
              </Stack>
            </Card>

            {/* Activity Section */}
            <Card padding={6}>
              <Stack gap={6}>
                <Text as="h2" size="2xl" weight="semibold">
                  Recent Activity
                </Text>
                <Stack gap={4}>
                  <ActivityCard
                    title="New user registered"
                    description="john@example.com joined the platform"
                    time="30m ago"
                  />
                  <ActivityCard
                    title="Project completed"
                    description="Website Redesign project marked as done"
                    time="2h ago"
                  />
                  <ActivityCard
                    title="Payment received"
                    description="$1,200 payment processed successfully"
                    time="4h ago"
                  />
                  <ActivityCard
                    title="Team update"
                    description="3 new team members added to Mobile App project"
                    time="1d ago"
                  />
                </Stack>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </div>
    </div>
  ),
};

