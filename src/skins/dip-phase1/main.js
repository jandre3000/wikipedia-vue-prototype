import Vue from "vue";
import Dip1 from "./Dip1.vue";
import createRouter from "@/core/router.js";
import store from "@/core/store";
import AsyncComputed from "vue-async-computed";

Vue.use(AsyncComputed);
Vue.config.productionTip = false;

const router = createRouter();

new Vue({
  router,
  store,
  render: h => h(Dip1)
}).$mount(document.body);
