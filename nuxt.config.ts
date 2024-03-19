// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: ['@pinia/nuxt', '@element-plus/nuxt'],
  build: {
    extend(config, { isClient }) {
      // Thêm cấu hình cho dynamic import
      config.module.rules.push({
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-syntax-dynamic-import'],
          },
        },
      })
    },
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    plugins: ['@/server/db/index.ts'],
  },
  runtimeConfig: {
    MONGO_URI: process.env.VITE_MONGO_URI,
    MONGO_USER: process.env.VITE_MONGO_USER,
    MONGO_PASS: process.env.VITE_MONGO_PASS,
    MONGO_AUTH_SOURCE: process.env.VITE_MONGO_AUTH_SOURCE,
    MONGO_DB: process.env.VITE_MONGO_DB,
  },
})
