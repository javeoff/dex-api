import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  transform: { '^.+\\.ts?$': 'ts-jest' },
  testEnvironment: 'node',
  testRegex: [
    '/tests/.*\\.(test|spec)\\.(ts)$',
    '/src/(dex|lib)/.*\\.(test|spec)\\.(ts)$',
  ],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testTimeout: 30 * 1000,
};

export default config;
