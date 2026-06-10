import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.{ts,tsx}'],
    // cloudinary.ts captures the cloud name at module load — set it before
    // any test module imports it.
    env: {
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: 'testcloud',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
