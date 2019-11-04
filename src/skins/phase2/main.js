import Vue from "vue";
import Phase2 from "./Phase2.vue";
import newRouterWithBase from "@/core/router.js";
import store from "@/core/store";
import AsyncComputed from "vue-async-computed";

Vue.use(AsyncComputed);
Vue.config.productionTip = false;

const router = newRouterWithBase("/phase2/");

new Vue({
  router,
  store,
  render: h => h(Phase2)
}).$mount("#app");
