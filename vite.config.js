import { resolve } from 'path';
import { defineConfig } from 'vite';

import babel from 'vite-plugin-babel';

export default defineConfig({
  plugins: [
    babel(),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.js'),
      name: 'vite-libs',
      fileName: 'vite-libs',
    },
    rollupOptions: {
      external: [
        // 'vue',
        'quill',
      ],
      output: {
        globals: {
          // vue: 'Vue',
          quill: 'quill'
        },
      },
    },
    build: {
      commonjsOptions: {
        requireReturnsDefault: true,
      },
    },
  },
});
