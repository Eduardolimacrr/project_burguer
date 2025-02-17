// jest.config.js
module.exports = {
    moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    transform: {
      '^.+\\.vue$': '@vue/vue3-jest',
      '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
  };