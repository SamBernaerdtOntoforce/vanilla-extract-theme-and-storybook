import { Meta, StoryObj } from "@storybook/react";
import Combined from "./Combined.tsx";

const meta: Meta<typeof Combined> = {
  component: Combined,
};
type Story = StoryObj<typeof Combined>;

export default meta;

export const Default: Story = {};
