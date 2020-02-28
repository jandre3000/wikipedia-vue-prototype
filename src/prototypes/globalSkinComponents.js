/**
 * Register Vue components globally, copy & pasted from:
 * https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/components/_globals.js
 */

import Vue from "vue";
import MwCore from "@/core/MwCore.vue";

Vue.component("MwCore", MwCore.default || MwCore);

const requireComponent = require.context("./common", true, /.vue$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");

  Vue.component(componentName, componentConfig.default || componentConfig);
});
