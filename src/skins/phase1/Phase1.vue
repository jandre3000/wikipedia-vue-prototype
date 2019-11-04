<template>
  <vector-layout>
    <template v-slot:header>
      <div id="mw-head">
        <p1-logo></p1-logo>
        <personal-navigation></personal-navigation>
        <right-navigation></right-navigation>
        <left-navigation></left-navigation>
      </div>
    </template>

    <template v-slot:sidebar>
      <div id="mw-panel">
        <mw-logo></mw-logo>
        <mw-portal-navigation />
        <mw-portal-interaction />
        <mw-portal-tools />
        <mw-portal-other />
        <mw-portal-print />
        <mw-portal-languages />
      </div>
    </template>
  </vector-layout>
</template>

<style scoped lang="less">
#mw-panel {
  margin-top: 80px;
}
</style>

<script>
import "../globalSkinComponents.js";

export default {
  computed: {
    isMainPage() {
      return this.$store.state.article.title === "Main Page";
    },
    title() {
      return this.$store.state.article.title;
    }
  },
  methods: {
    onClickContent(event) {
      const nodeName = event.target.nodeName,
        href = event.target.getAttribute("href"),
        currentRouteLanguage = this.$router.currentRoute.meta.language;
      if (nodeName == "A" && /\/wiki\//.test(href)) {
        event.stopPropagation();
        event.preventDefault();
        this.$router.push(`/${currentRouteLanguage}${href}`);
      }
    }
  }
};
</script>
