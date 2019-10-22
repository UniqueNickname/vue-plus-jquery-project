import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
import Smartmenu from 'smartmenus'
import JqueryValidation from 'jquery-validation'
global.jQuery = jQuery
global.$ = jQuery
global.Smartmenu = Smartmenu
global.JqueryValidation = JqueryValidation
Vue.config.productionTip = false
export const eventEmitter = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
