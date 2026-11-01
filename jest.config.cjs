module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/test/polyfills.cjs'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript',
      ],
    }],
  },
  moduleNameMapper: {
    '^\\.\\./keys$': '<rootDir>/test/keys-mock.cjs',
    '\\.(css)$': '<rootDir>/test/style-mock.cjs',
    '\\.(svg|png|jpe?g|gif|webp|pdf)$': '<rootDir>/test/file-mock.cjs',
  },
};
