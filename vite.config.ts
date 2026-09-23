import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        // manualChunks only makes sense for the client bundle — react/
        // react-dom are external during the SSR build (vite-react-ssg's
        // server pass), so applying this there throws
        // EXTERNAL_MODULES_CANNOT_BE_INCLUDED_IN_MANUAL_CHUNKS.
        manualChunks: isSsrBuild
          ? undefined
          : {
              vendor: ['react', 'react-dom'],
              icons: ['lucide-react'],
            },
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
