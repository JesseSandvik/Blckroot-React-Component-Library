import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
    component: Button,
    title: "Marbella/Button",
    argTypes: {},
}

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => (
    <Button data-testId="InputField-id" {...args} />
  );
  Primary.args = {
    disabled: false,
    text: "Primary",
  };

export const Secondary: Story = (args) => (
    <Button data-testId="InputField-id" {...args} />
  );
  Secondary.args = {
    disabled: false,
    text: "Secondary",
  };
