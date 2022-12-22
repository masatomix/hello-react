import type { Parameters } from '@storybook/react';

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import React from 'react';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
};

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];