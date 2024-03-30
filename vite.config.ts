import svg from '@poppanator/sveltekit-svg';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { analyzer } from 'vite-bundle-analyzer';
import { totalBundleSize } from 'vite-plugin-total-bundle-size';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    svelte(),
    svg({
      svgoOptions: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupIds: false,
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
    command === 'build' && analyzer({ analyzerMode: 'static' }),
    command === 'build' && totalBundleSize(),
  ],
  base: '',
  build: { outDir: 'docs' },
}));
