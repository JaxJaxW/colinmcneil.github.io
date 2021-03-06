export default {
  plugins: [
    { src: '~plugins/mina-vue.js', ssr: false }
  ],
  modules: [
    'nuxt-webfontloader',
  ],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {title: 'Colin McNeil'}
    ]
  },
  webfontloader: {
    google: {
      families: ['Poiret+One', 'Inconsolata'] //Loads Lato font with weights 400 and 700
    }
  },
}
