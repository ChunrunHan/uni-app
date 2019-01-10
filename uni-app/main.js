import Vue from 'vue'
import App from './App'
import demo from './components/demo.vue'
import store from './store'
Vue.prototype.$store = store

// Vue.component('page-demo',demo)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
