import Vue from "vue";
import App from "./App.vue";
import createRouter from "@/core/router.js";
import store from "@/core/store";

Vue.config.productionTip = false;

const router = createRouter("classic");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount(document.body);
