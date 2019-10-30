import Vue from "vue";
import P4 from "./P4.vue";
import newRouterWithBase from "@/core/router.js";
import store from "@/core/store";
import AsyncComputed from "vue-async-computed";

Vue.use(AsyncComputed);
Vue.config.productionTip = false;

const router = newRouterWithBase("/p4/");

new Vue({
  router,
  store,
  render: h => h(P4)
}).$mount(document.body);
