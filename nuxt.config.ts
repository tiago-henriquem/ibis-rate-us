// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  spaLoadingTemplate: false,
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  components: [
    {
      path: "~/components"
    }
  ],
  app: {
    head: {
      title: "Avalie o Ibis",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
        }
      ],
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {
          charset: "utf-8"
        }
      ]
    }
  }
})
