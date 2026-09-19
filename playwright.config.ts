import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  use: { baseURL: "http://127.0.0.1:3100", channel: "chrome" },
  webServer: {
    command: "python3 -m http.server 3100 --bind 127.0.0.1 --directory out",
    url: "http://127.0.0.1:3100",
    reuseExistingServer: false,
    timeout: 120000,
  },
});
