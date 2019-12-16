import Vue from 'vue';
import Vuex from 'vuex'
import App from './App.vue';
import router from './router';
import { createProvider } from './vue-apollo';
import 'milligram';

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
