module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    'src/**/*.vue',
    '!src/main.js',      
    '!src/App.vue',       
    '!src/components/index.js',  
    '!**/node_modules/**',
    '!**/dist/**',
    '!src/components/**/index.js',  
  ],  
  coverageReporters: ["json", "text", "lcov", "clover"]
};
