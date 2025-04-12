import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { vitePlugin as remix } from "@remix-run/dev";
// ↓ add this
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    remix(),
    netlifyPlugin()
  ],
})
