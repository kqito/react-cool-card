const path = require("path");

module.exports = {
  addons: [
    "@storybook/react",
    "@storybook/addon-knobs/register",
    {
      name: "@storybook/preset-typescript",
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, "../tsconfig.json")
        },
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
        },
        forkTsCheckerWebpackPluginOptions: {
          colors: false
        },
        include: [path.resolve(__dirname, "../src")]
      }
    }
  ],
  presets: [
    {
      name: "@storybook/addon-docs/preset",
      options: {
        configureJSX: true
      }
    }
  ],
  stories: ["../src//**/*.stories.tsx", "../src//**/*.stories.jsx"],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.stories\.[tj]sx?$/,
      use: [
        {
          loader: require.resolve("@storybook/source-loader"),
          options: { injectParameters: true }
        }
      ],
      include: [path.resolve(__dirname, "../src")],
      enforce: "pre"
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  }
};
