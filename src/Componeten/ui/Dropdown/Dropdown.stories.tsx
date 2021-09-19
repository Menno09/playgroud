import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';


import { DropDown, DropDownProps } from './Dropdown';

export default {
    title: 'Components/DropDown',
    component: DropDown,
    argTypes: {},
} as Meta;

const Template: Story<DropDownProps> = (args) => <DropDown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Klik hier!',
};