const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        chrome: "58",
        ie: "11"
      },
      useBuiltIns: "usage",
      corejs: 3
    }
  ],
  "@babel/preset-react",
  "@babel/preset-typescript"
];

const plugins = ["babel-plugin-styled-components"];

module.exports = { presets, plugins };
