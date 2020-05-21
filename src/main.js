import Vue from 'vue'
import App from './App.vue'
import Store from './store'
// import VueMq from 'vue-mq'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

export const bus = new Vue()

// Vue.use(VueMq, {
//   breakpoints: {
//     mobile: 480,
//     tablet: 768,
//     laptop: 1024,
//     desktops: 1200,
//     tv: Infinity
//   }
// })

new Vue({
  render (createElement) {
    return createElement(App)
  },
  store: Store
}).$mount('#app')
