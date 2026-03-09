// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  nitro: {
    // preset: "static",
    output: {
      dir: "dist",
    },
  },
  // image: {
  //   provider: "static",
  // },
  css: ["~/assets/css/main.css"],
  vite: {
    css: {
      devSourcemap: true,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/icon"],
  imports: {
    dirs: [
      "core/constants",
      "core/utils",
      "core/services",
      "components/ui/*.vue",
      "components/shared/*.vue",
      "components/**/*.vue",
    ],
  },
  runtimeConfig: {
    public: {
      blobBaseUrl: "https://resolutemarkets.blob.core.windows.net/revive-me",
    },
  },
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  },
});
