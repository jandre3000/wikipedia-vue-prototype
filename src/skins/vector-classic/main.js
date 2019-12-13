import Vue from "vue";
import VectorLayout from "../layouts/VectorLayout.vue";
import createRouter from "@/core/router.js";
import store from "@/core/store";

Vue.config.productionTip = false;

const router = createRouter("classic");

new Vue({
  router,
  store,
  render: h => h(VectorLayout)
}).$mount(document.body);
