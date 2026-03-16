import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  webServer: {
    command: "npx serve out -p 3001 --no-clipboard",
    port: 3001,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://localhost:3001",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
