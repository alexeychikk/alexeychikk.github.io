import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { analyzer } from 'vite-bundle-analyzer';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    tsconfigPaths(),
    react(),
    svgr(),
    command === 'build' && analyzer({ analyzerMode: 'static' }),
  ],
  base: '',
  build: { outDir: 'docs' },
}));
