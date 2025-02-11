import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  base: "/week5-mini-project/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
