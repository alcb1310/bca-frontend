import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  env: {
    VITE_API_URL: "http://localhost:42069",
  },
});
