import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    //exclude pages folder,assets folder, app.tsx and main.tsx and config files in root
    exclude: [
      "**/node_modules/**",
      "src/pages/**",
      "src/assets",
      "src/App.tsx",
      "src/main.tsx",
      "vitest.config.ts",
      "vite.config.ts",
      "tailwind.config.js",
      "postcss.config.js",
      ".eslintrc.cjs",
    ],
    coverage: {
      exclude: [
        "**/node_modules/**",
        "src/pages/**",
        "src/assets",
        "src/App.tsx",
        "src/main.tsx",
        "vitest.config.ts",
        "vite.config.ts",
        "tailwind.config.js",
        "postcss.config.js",
        ".eslintrc.cjs",
      ],
    },
  },
});
