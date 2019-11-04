import Vue from "vue";
import VectorNeue from "./VectorNeue.vue";
import newRouterWithBase from "@/core/router.js";
import store from "@/core/store";
import AsyncComputed from "vue-async-computed";

Vue.use(AsyncComputed);
Vue.config.productionTip = false;

const router = newRouterWithBase("/");

new Vue({
  router,
  store,
  render: h => h(VectorNeue)
}).$mount(document.body);
