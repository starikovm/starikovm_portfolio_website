import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Consult from "./views/Consult.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/interview-consult",
      name: "CV and Interview consult",
      component: Consult
    }
  ]
});
