import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Find a Doc JAPAN",
    titleTemplate: "Community-driven database to share clinic information",
    htmlAttrs: {
      lang: "en",
      amp: true
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "A community database to share clinic information in Japan."
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Nunito&display=swap"
      }
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.js",
        async: true,
        defer: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyAjIhMU4Co5LvhhEoqiGqbF5R6zmsQfIZY",
          authDomain: "findadoc-bc230.firebaseapp.com",
          databaseURL: "https://findadoc-bc230-default-rtdb.firebaseio.com",
          projectId: "findadoc-bc230",
          storageBucket: "findadoc-bc230.appspot.com",
          messagingSenderId: "871643437476",
          appId: "1:871643437476:web:d7271d01ee125e9f7bc931",
          measurementId: "G-SN6SHYMJKY"
        },
        services: {
          auth: false,
          firestore: true,
          analytics: true
        }
      }
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      light: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
