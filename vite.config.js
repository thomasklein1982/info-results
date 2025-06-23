import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA(
      {
        registerType: 'prompt',
        injectRegister: true,

        pwaAssets: {
          disabled: false,
          config: true,
        },
        manifest: {
          name: 'Informatik-2022',
          short_name: "Info-2022",
          description: "Eine Sammlung der Apps, die die Schüler:innen der Marienschule im Schuljahr 2021/22 programmiert haben.",
          theme_color: "#ffffff",
          icons: [
            {
              src: 'icon.png',
              sizes: '128x128',
              type: "image/png"
            },
            {
              src: 'icon512.png',
              sizes: '512x512',
              type: "image/png"
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2,eot,ttf,woff,wasm}'],
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          maximumFileSizeToCacheInBytes: 3000000,
        },
      }
    )
  ],
  base: "./"
})
