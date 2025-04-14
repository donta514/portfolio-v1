import { defineConfig } from 'astro/config';
import "dotenv/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/variables";`,
        },
      },
    },
  },
});
