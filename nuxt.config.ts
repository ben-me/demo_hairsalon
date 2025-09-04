// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  typescript: {
    typeCheck: true,
  },
  modules: ["@nuxt/image", "@nuxt/test-utils", "@nuxt/ui", "@nuxt/eslint"],
  css: ["~/assets/css/main.css"],
  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
});
