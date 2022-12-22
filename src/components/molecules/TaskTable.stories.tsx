import React from 'react';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import TaskTable from './TaskTable';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'My Apps/TaskTable',
  component: TaskTable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TaskTable>;


export const Default: ComponentStoryObj<typeof TaskTable> = {
  args: {
    todos: [
      { key: '111', isDone: false, name: 'タスク1' },
      { key: '112', isDone: true, name: 'タスク2' },
    ]
  },
};

export const Disabled: ComponentStoryObj<typeof TaskTable> = {
  args: {
    todos: []
  },
};
