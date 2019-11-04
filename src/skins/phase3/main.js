import Vue from "vue";
import Phase3 from "./Phase3.vue";
import newRouterWithBase from "@/core/router.js";
import store from "@/core/store";
import AsyncComputed from "vue-async-computed";

Vue.use(AsyncComputed);
Vue.config.productionTip = false;

const router = newRouterWithBase("/phase3/");

new Vue({
  router,
  store,
  render: h => h(Phase3)
}).$mount("#app");
