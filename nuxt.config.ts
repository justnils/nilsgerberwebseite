// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["nuxt-phosphor-icons", "@nuxtjs/google-fonts", "nuxt-swiper", "@vueuse/nuxt", "@vercel/speed-insights/nuxt", "@vercel/analytics/nuxt"],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
          defer: true,
        },
      ],
    },
  },
  // ssr: false,
  routeRules: {
    // Serverseitiger 302-Redirect (kein JS nötig, kein dauerhaftes Browser-Caching wie bei 301)
    "/quiz": { redirect: { to: "https://ce2026-quiz.vercel.app", statusCode: 302 } },
    "/quiz/": { redirect: { to: "https://ce2026-quiz.vercel.app", statusCode: 302 } },
  },
  css: ["@/public/scss/styles.scss"],
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
    },
    display: "swap",
    preload: true,
  },
  swiper: {
    modules: ['navigation', 'pagination', 'autoplay', 'scrollbar']
  },
  runtimeConfig: {
    // Server-only (private) - Brevo API Key.
    // Bewusst leer: wird zur Laufzeit über NUXT_BREVO_API_KEY (Nuxt-Konvention)
    // oder BREVO_API_KEY (siehe server/api/contact.post.ts) gesetzt und landet
    // so nicht beim Build im Server-Bundle.
    brevoApiKey: "",
  },
});