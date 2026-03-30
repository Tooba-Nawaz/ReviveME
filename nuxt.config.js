// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  nitro: {
    preset: "static",
  },
  // image: {
  //   provider: "static",
  // },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/image", "@nuxt/icon"],
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
      API_BASE_URL:
        "https://revorocrmsgr-ceeuddeqfdevbfas.centralindia-01.azurewebsites.net",
    },
  },
});
