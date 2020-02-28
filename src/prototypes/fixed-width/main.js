import Vue from "vue";
import App from "./App.vue";
import createRouter from "@/core/router.js";
import store from "@/core/store";
import AsyncComputed from "vue-async-computed";

Vue.use(AsyncComputed);
Vue.config.productionTip = false;

const router = createRouter("p3");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount(document.body);
