import type { StorybookViteConfig } from '@storybook/builder-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookViteConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // '@chakra-ui/storybook-addon',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    // 'emotionAlias': false,
    'storyStoreV7': true
  },
  viteFinal: async (config) => {
    return {
      ...config,
      plugins: config.plugins
        ? [...config.plugins, tsconfigPaths()]
        : [tsconfigPaths()],
    };
  },
};

export default config;