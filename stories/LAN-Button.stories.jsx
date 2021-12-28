import React from 'react';
import  Button  from '../components/Button'


export default {
    title: 'LAN-Button',
    component: Button,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };

  const Template = (args) => <Button {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {
    label: 'Button',
  };

export const Large = Template.bind({});
    Large.args = {
    size: 'large',
    label: 'Button',
    };