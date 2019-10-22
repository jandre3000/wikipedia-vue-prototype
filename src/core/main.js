import Vue from "vue";
import Core from "@/core/Core.vue";
import newRouterWithBase from "@/core/router";
import store from "@/core/store";

Vue.config.productionTip = false;

const router = newRouterWithBase("/");

new Vue({
  router,
  store,
  render: h => h(Core)
}).$mount("#app");
