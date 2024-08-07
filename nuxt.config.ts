import pkg from './package.json'

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  ssr: true,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      APP_VERSION: pkg.version,
      APP_NAME: pkg.name,
      // eslint-disable-next-line node/prefer-global/process
      APP_MODE: process.env?.NODE_ENV,
    },
  },
  modules: [
    'nuxt-primevue',
    '@formkit/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxt/test-utils/module',
    '@nuxt/image',
  ],
  formkit: {
    autoImport: true,
  },
  content: {
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue'],
    },
    // Options
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'de', file: 'de.json', name: 'German' },
    ],
    vueI18n: './vue-i18n.options.ts',
  },
  primevue: {
    components: {
      exclude: ['Chart'],
    },
    options: {
      ripple: true,
    },
  },
  css: [
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    '@sfxcode/formkit-primevue/dist/sass/formkit-primevue.scss',
  ],
  build: {
    transpile: [
      'nuxt',
      'primevue',
      'formkit-primevue',
      'axios',
      'form-data',
      'follow-redirects',
    ],
  },
  sourcemap: {
    client: false,
    server: false,
  },
})
