import postcssMixins from "./assets/styles/mixins/postcss-mixins";
import svgLoader from "vite-svg-loader";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      "postcss-mixins": {
        mixins: postcssMixins,
      },
      "postcss-nested": {},
    },
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
  typescript: {
    shim: false,
  },
  css: [
    "~/assets/styles/global.pcss",
    "~/assets/styles/containers.pcss",
    "~/assets/styles/variables.pcss",
    "~/assets/styles/texts.pcss",
    "~/assets/styles/font-face.pcss",
    "~/assets/styles/reset.pcss",
    "~/assets/styles/buttons.pcss",
  ],
  vite: {
    plugins: [
      svgLoader({
        defaultImport: "url",
        svgoConfig:{
          plugins: [{
            name: "preset-default",
            params: {
              overrides:{
                removeViewBox: false,
              }
            }
          }
          ]
        }
      }),
    ],
  },
});
