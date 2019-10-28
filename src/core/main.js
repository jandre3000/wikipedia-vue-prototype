import Vue from "vue";
import MwCore from "@/core/MwCore.vue";
import newRouterWithBase from "@/core/router";
import store from "@/core/store";

Vue.config.productionTip = false;

const router = newRouterWithBase("/");

new Vue({
  router,
  store,
  render: h => h(MwCore)
}).$mount("#app");
