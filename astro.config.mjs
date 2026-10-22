import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://niwaya-syo.com',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
