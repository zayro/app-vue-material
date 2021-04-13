import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import { Network } from "vue-vis-network";


import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


import "jquery";
import "bootstrap/dist/css/bootstrap.css";


/*
import axios from "axios";
import swal from "sweetalert";
*/

Vue.component('network', Network);
Vue.use(VueMaterial)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
