module.exports = {
  presets: [
    // ['@vue/cli-plugin-babel/preset', { loose: true }],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
