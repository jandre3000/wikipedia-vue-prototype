import Vue from "vue";
import P1 from "./P1.vue";
import newRouterWithBase from "@/core/router.js";
import store from "@/core/store";
import AsyncComputed from "vue-async-computed";

Vue.use(AsyncComputed);
Vue.config.productionTip = false;

const router = newRouterWithBase("/p1/");

new Vue({
  router,
  store,
  render: h => h(P1)
}).$mount("#app");
