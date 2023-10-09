module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  setupFiles: [
    '<rootDir>/__mocks__/react-native-config.ts',
    '<rootDir>/__mocks__/react-native-webview.ts',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-navigation|@react-navigation/.*)',
  ],
};
