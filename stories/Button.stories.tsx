import { Button } from "../src";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary = {
  args: {
    hierarchy: "primary",
    size: "medium",
    label: "Button",
  },
};

export const Secondary = {
  args: {
    hierarchy: "secondary",
    size: "medium",
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
    hierarchy: "primary",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
    hierarchy: "primary",
  },
};
