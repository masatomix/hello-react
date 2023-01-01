import React from 'react';
import { css } from '@emotion/css';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import DeleteEndTaskButton from './DeleteEndTaskButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'My Apps/DeleteEndTaskButton',
  component: DeleteEndTaskButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DeleteEndTaskButton>;


export const Default: ComponentStoryObj<typeof DeleteEndTaskButton> = {
  args: {
    colorScheme: 'blue'
  },
};

export const Disabled: ComponentStoryObj<typeof DeleteEndTaskButton> = {
  args: {
    colorScheme: 'red',
    className: css`float: right;`
  },
};
