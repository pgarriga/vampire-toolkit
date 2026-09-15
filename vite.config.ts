import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

const base = process.env.GITHUB_ACTIONS ? '/vampire-toolkit/' : './'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      base,
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff,woff2}'],
        runtimeCaching: [
          {
            // Cache Google Fonts stylesheets
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            // Cache Google Fonts web font files
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      manifest: {
        name: 'Vampire V5 Toolkit',
        short_name: 'Vampire V5 Toolkit',
        description: 'Vampire: The Masquerade 5th Edition discipline reference',
        theme_color: '#8b0000',
        background_color: '#0d0b14',
        display: 'standalone',
        start_url: base,
        scope: base,
        icons: [
          {
            src: 'pwa-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: 'pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  base,
  build: {
    rollupOptions: {
      output: {
        /**
         * Split the static game content away from the app code. The disciplines,
         * clans, traced sigils and translation overlays are ~80% of the bundle and
         * almost never change, while the app code changes every release. Keeping them
         * in separate chunks means a release only invalidates the small one, so the
         * service worker re-downloads a few KB instead of the whole bundle.
         */
        manualChunks(id: string) {
          // Rolldown (Vite 8) only accepts the function form, not the object map.
          if (/[\\/]src[\\/](data|clans|translations-[\w-]+)\.ts$/.test(id)) return 'game-content'
          if (/[\\/]src[\\/](icons|clan-icons)\.ts$/.test(id)) return 'game-icons'
          return undefined
        },
      },
    },
    // The content chunks are deliberately large and cached separately; the warning
    // would fire on them every build without telling us anything new.
    chunkSizeWarningLimit: 700,
  },
  server: {
    port: 5173,
  },
})
