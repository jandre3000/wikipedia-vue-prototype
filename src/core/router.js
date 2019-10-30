import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/core/store";
import MwArticle from "@/core/views/MwArticle.vue";
import wikicodes from "@/core/wiki/wikipedia-codes.json";

Vue.use(VueRouter);

const routes = [];

for (let i = 0; i < wikicodes.length; i++) {
  routes.push({
    path: `/${wikicodes[i]}/wiki/:title?`,
    component: MwArticle,
    meta: {
      language: wikicodes[i],
      fetchArticle: true
    },
    name: `${wikicodes[i]}wiki`,
    props: true
  });
}

routes.push({
  name: "root-redirect",
  path: "/",
  redirect: {
    name: "enwiki",
    params: {
      title: "Main_Page"
    }
  }
});

const newRouterWithBase = function(base) {
  const router = new VueRouter({
    mode: "history",
    base: base,
    routes
  });

  router.beforeEach((to, from, next) => {
    store.dispatch("user/setVectorMode", base);

    if (to.meta.fetchArticle) {
      store.dispatch("article/fetch", {
        title: to.params.title || "Main_Page",
        language: to.meta.language,
        api: "action"
      });
    }
    next();
  });

  return router;
};

export default newRouterWithBase;
