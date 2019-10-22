import Vue from "vue";
import Phase1 from "./Phase1.vue";
import newRouterWithBase from "@/core/router.js";
import store from "@/core/store";

Vue.config.productionTip = false;

const router = newRouterWithBase("/phase1/");

new Vue({
  router,
  store,
  render: h => h(Phase1)
}).$mount("#app");
