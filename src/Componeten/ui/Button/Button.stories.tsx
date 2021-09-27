import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';


import { Button } from './Button';
import Props from './Button.props';

export default {
  title: 'Components/ui/Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Klik hier!',
  onClick: () => alert('Click!'),
  color: 'blue',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Klik hier!',
  onClick: () => alert('Click!'),
  color: 'blue',
};

export const Green = Template.bind({});
Green.args = {
  children: 'Klik hier!',
  onClick: () => alert('Click!'),
  color: 'blue',
};

export const Pink = Template.bind({});
Pink.args = {
  children: 'hello',
  onClick: () => alert('Click!'),
  color: 'blue',
};
