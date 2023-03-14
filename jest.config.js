const config = {
  projects: ['<rootDir>'],
  testEnvironment: 'node',
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'js'],
  testRegex: '^.+Spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ],
  },
};

module.exports = config;
