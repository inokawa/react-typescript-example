import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  label: "Button",
};
