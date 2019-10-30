import Vue from "vue";
import P2 from "./P2.vue";
import newRouterWithBase from "@/core/router.js";
import store from "@/core/store";
import AsyncComputed from "vue-async-computed";

Vue.use(AsyncComputed);
Vue.config.productionTip = false;

const router = newRouterWithBase("/p2/");

new Vue({
  router,
  store,
  render: h => h(P2)
}).$mount("#app");
