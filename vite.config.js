import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA(
      {
        includeAssets: ['favicon.svg','favicon.ico','robots.txt','apple-touch-icon.png'],
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
        }
      }
    )
  ],
  base: "./"
})
