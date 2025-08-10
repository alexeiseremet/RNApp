module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '#': './src',
        },
      },
    ],
    'react-native-worklets/plugin', // NOTE: this plugin MUST be last
  ],
};
