import type { StoryObj, Meta } from "@storybook/react";

import { Button } from "./Button";
import { ComponentProps } from "react";

export default {
  component: Button,
} as Meta<typeof Button>;

export const Default: StoryObj<ComponentProps<typeof Button>> = {
  args: {
    label: "Button",
  },
};

export const Large: StoryObj<ComponentProps<typeof Button>> = {
  args: {
    size: "lg",
    label: "Button",
  },
};

export const Small: StoryObj<ComponentProps<typeof Button>> = {
  args: {
    size: "sm",
    label: "Button",
  },
};
