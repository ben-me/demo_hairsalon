// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  typescript: {
    typeCheck: true,
  },
  modules: [
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxt/eslint",
    "nuxt-vitalizer",
  ],
  telemetry: false,
  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  vitalizer: {
    disableStylesheets: "entry",
  },
  vite: { plugins: [tailwindcss()] },
  app: {
    head: {
      title: "Demo Hair Friseursalon",
      htmlAttrs: {
        lang: "de",
      },
    },
  },
});

