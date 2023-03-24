import { defineConfig, loadEnv } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      _APP_ENV: env.APP_ENV,
    },
    esbuild: {
      jsxInject: `import React from 'react'`,
    },
    plugins: [vue()],
    server: {
      host: "0.0.0.0",
      port: 3000,
    },
  };
});
