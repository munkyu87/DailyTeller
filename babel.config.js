module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: process.env.ENV_FILE || '.env.local',
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '~': './src',
          '@api': './src/api',
          '@assets': '/src/assets',
          '@components': './src/components',
          '@config': './src/config/',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@stores': './src/stores',
          '@styles': './src/styles',
          '@type': './src/types'
        },
      },
    ],
  ],
};