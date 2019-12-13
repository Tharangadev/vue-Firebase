import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from "@/routes"
import store from '@/vuex'
import veevalidate from 'vee-validate'



Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(veevalidate)
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
