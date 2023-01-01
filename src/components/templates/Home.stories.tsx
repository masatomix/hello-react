import React from 'react';
import { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import Home from './Home';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'My Apps/Home',
  component: Home,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Home>;

export const Default: ComponentStoryObj<typeof Home> = {
  args: {
    pageTitle:'Default'
  },
};

export const Disabled: ComponentStoryObj<typeof Home> = {
  args: {
    pageTitle:'Default'
  },
};
