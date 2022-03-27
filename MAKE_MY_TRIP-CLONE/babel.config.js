module.exports = {
  presets: ["@native-base/next-adapter/babel"],
  plugins: [
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
  ],
};
