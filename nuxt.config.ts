// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/nuxtjs_coding_challenge/",
  },

  css: [
    "~/assets/css/tailwind.css", // Path to your global CSS file
  ],

  ssr: false,
  spaLoadingTemplate: false,
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vee-validate/nuxt",
    "@vueuse/nuxt",
    "nuxt-icon",
    "nuxt-headlessui",
    "@nuxt/content",
    "@pinia/nuxt",
    "nuxt-lodash",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-rating",
  ],

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },

  headlessui: {
    prefix: "Headless",
  },

  content: {
    documentDriven: true,
    markdown: {
      mdc: true,
    },
  },

  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },

  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },

  compatibilityDate: "2024-11-10",
});
