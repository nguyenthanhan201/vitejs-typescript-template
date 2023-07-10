/* eslint-disable @typescript-eslint/no-unused-vars */
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.URl_TEST_BROWSER": JSON.stringify(env.URl_TEST_BROWSER),
      "process.env.YOUR_BOOLEAN_VARIABLE": env.YOUR_BOOLEAN_VARIABLE,
      // If you want to exposes all env variables, which is not recommended
      // "process.env": env,
    },
    plugins: [react()],
  };
});