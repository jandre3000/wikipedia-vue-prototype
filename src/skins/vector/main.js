import Vue from "vue";
import Vector from "./Vector.vue";
import newRouterWithBase from "@/core/router.js";
import store from "@/core/store";

Vue.config.productionTip = false;

const router = newRouterWithBase("/vector/");

new Vue({
  router,
  store,
  render: h => h(Vector)
}).$mount(document.body);
