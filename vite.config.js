import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        reviews: './reviews.html',
        salary: './salary.html',
      },
    },
  },
});
