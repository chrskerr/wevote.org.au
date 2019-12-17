import Vue from 'vue';
import Vuex from 'vuex'
import App from './App.vue';
import router from './router';
import { createProvider } from './vue-apollo';
import Buefy from 'buefy';

Vue.use(Buefy, {
  defaultIconPack: 'fas',
});
Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    user: {
      identifier: window.localStorage.identifier,
      surname: window.localStorage.surname
    }
  },
  mutations: {
    updateUser (state, payload) {
      state.user = payload;
      if (payload) {
        window.localStorage.identifier = payload.identifier;
        window.localStorage.surname = payload.surname;
      } else {
        window.localStorage.removeItem('identifier');
        window.localStorage.removeItem('surname');
      }
    }
  }
})

new Vue({
  router,
  apolloProvider: createProvider(),
  store,
  render: h => h(App)
}).$mount('#app')
