import React from 'react';
import  Button  from '../components/Button'


export default {
    title: 'Lansweeper/Button',
    component: Button,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
  };

  const Template = (args) => <Button {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {
    label: 'Button',
    type: 'primary'
  };

export const Large = Template.bind({});
    Large.args = {
    size: 'large',
    label: 'Button',
    };

  
    Primary.parameters = {
      enabled: true,
      a11y: {
        config: {
          rules: [{ id: 'color-contrast', enabled: true }],
        },
      },
    };