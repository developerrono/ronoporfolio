import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Assuming 'lovable-tagger' is a local/custom plugin
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // *** START: FIX FOR R3F HOOK ERROR ***
  optimizeDeps: {
    // Exclude R3F and Three.js from Vite's dependency pre-bundling.
    // This prevents the "duplicate context" error by ensuring they are loaded once.
    exclude: ['three', '@react-three/fiber', '@react-three/drei'],
  },
  // *** END: FIX FOR R3F HOOK ERROR ***
}));
