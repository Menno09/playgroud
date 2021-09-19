const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader?modules=true',
          options: {
            modules: true,
            importLoaders: 1,
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    });

    config.resolve.modules.push(__dirname + '../src');

    config.resolve.alias = {
      ...config.resolve.alias,
      '@Assets': path.resolve(__dirname, '../src/assets'),
      '@Components': path.resolve(__dirname, '../src/components'),
      '@Constants': path.resolve(__dirname, '../src/constants'),
      '@Helpers': path.resolve(__dirname, '../src/helpers'),
      '@Hooks': path.resolve(__dirname, '../src/hooks'),
      '@Locales': path.resolve(__dirname, '../src/locales'),
      '@Models': path.resolve(__dirname, '../src/models'),
      '@Services': path.resolve(__dirname, '../src/services'),
      '@Stores': path.resolve(__dirname, '../src/stores'),
      '@Utils': path.resolve(__dirname, '../src/utils'),
      '@src': path.resolve(__dirname, '../src'),
    };

    return config;
  },
};
