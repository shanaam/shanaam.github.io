import { test, expect } from "@playwright/test";

const routes = [
  { path: "/", heading: "Shanaa Modchalingam" },
  { path: "/work", heading: "Articles" },
  { path: "/academics", heading: "Education & Credentials" },
  { path: "/contact", heading: "Contact" },
  { path: "/work/visuomotor-experiment-framework", heading: "Visuomotor Experiment Framework" },
  { path: "/work/reach-trajectory-visualization", heading: "Visualization of Reach Trajectories" },
  { path: "/work/open-data", heading: "Open Data" },
  { path: "/work/this-website", heading: "This Website" },
];

for (const { path, heading } of routes) {
  test(`${path} — loads without error and shows "${heading}"`, async ({
    page,
  }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });

    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("body")).toContainText(heading);
    expect(consoleErrors).toHaveLength(0);
  });
}
