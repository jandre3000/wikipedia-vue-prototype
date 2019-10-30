/**
 * For some reason, this file is broken!
 */

import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import MwCore from "@/core/MwCore.vue";
import newRouterWithBase from "@/core/router";
import store from "@/core/store";
import AsyncComputed from "vue-async-computed";

Vue.component("MwCore", MwCore.default || MwCore);

const requireComponent = require.context("../", true, /.vue$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");

  Vue.component(componentName, componentConfig.default || componentConfig);
});

export default function({ baseRoute = "/", baseComponent = MwCore }) {
  Vue.config.productionTip = false;
  Vue.use(VueRouter);
  Vue.use(AsyncComputed);
  Vue.use(Vuex);

  const router = newRouterWithBase(baseRoute);

  return new Vue({
    router,
    store,
    render: h => h(baseComponent)
  }).$mount("#app");
}
