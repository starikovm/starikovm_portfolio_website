import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollTo from "vue-scrollto";
import VueMeta from 'vue-meta';
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(VueScrollTo);
Vue.use(VueMeta);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
