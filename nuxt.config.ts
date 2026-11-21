// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  // `pages` is an FSD layer here, so file-based routes live in `app/routes`.
  dir: { pages: 'routes' },
  // Colocated tests must not become routes or bundled modules.
  ignore: ['**/*.test.ts'],
  // FSD slices import their components explicitly.
  components: { dirs: [] },
  css: ['~/styles/global.css'],
  app: {
    // baseURL: '/InteractivePricingComponent/',
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Frontend Mentor | Interactive pricing component',
      meta: [
        {
          name: 'description',
          content:
            'Simple, traffic-based pricing: pick your monthly pageviews and billing period to see the price.',
        },
        { name: 'theme-color', content: '#f1f5fe' },
      ],
    },
  },
  typescript: {
    strict: true,
    tsConfig: { include: ['../tests/**/*.ts'] },
    nodeTsConfig: { include: ['../vitest.config.ts', '../eslint.config.mjs'] },
  },
})
