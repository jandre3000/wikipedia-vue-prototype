import Vue from "vue";
import P1 from "./P1.vue";
import newRouterWithBase from "@/core/router.js";
import store from "@/core/store";

Vue.config.productionTip = false;

const router = newRouterWithBase("/p1/");

new Vue({
  router,
  store,
  render: h => h(P1)
}).$mount("#app");
