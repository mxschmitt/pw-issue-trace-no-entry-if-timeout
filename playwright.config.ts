// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'WebKit',
      use: { browserName: 'webkit', trace: 'retain-on-failure' },
    },
  ],
};
export default config;