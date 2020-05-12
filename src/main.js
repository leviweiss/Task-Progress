import Vue from 'vue'
import App from './App.vue'
import Store from './store'

Vue.config.productionTip = false

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export const bus = new Vue();

new Vue({
    render: h => h(App),
    store: Store
}).$mount('#app')
