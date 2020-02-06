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

module.exports = { presets };
