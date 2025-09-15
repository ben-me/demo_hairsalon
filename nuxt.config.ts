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
    "@nuxt/fonts",
  ],
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
      "3xl": 1760,
      "4xl": 1920,
    },
    cloudflare: {
      baseURL: "https://codepilots.de",
    },
    provider: "ipxStatic",
  },
  fonts: {
    provider: "local",
  },
  telemetry: false,
  vitalizer: {
    disableStylesheets: "entry",
  },
  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  vite: { plugins: [tailwindcss()] },
  app: {
    head: {
      title: "Demo Hair Friseursalon",
      htmlAttrs: {
        lang: "de",
      },
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          sizes: "16x16",
          type: "image/png",
          href: "/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
    },
  },
});
