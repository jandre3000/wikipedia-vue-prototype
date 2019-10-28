import Vue from "vue";
import P2 from "./P2.vue";
import newRouterWithBase from "@/core/router.js";
import store from "@/core/store";

Vue.config.productionTip = false;

const router = newRouterWithBase("/p2/");

new Vue({
  router,
  store,
  render: h => h(P2)
}).$mount("#app");
