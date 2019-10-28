import Vue from "vue";
import P3 from "./P3.vue";
import newRouterWithBase from "@/core/router.js";
import store from "@/core/store";

Vue.config.productionTip = false;

const router = newRouterWithBase("/p3/");

new Vue({
  router,
  store,
  render: h => h(P3)
}).$mount("#app");
