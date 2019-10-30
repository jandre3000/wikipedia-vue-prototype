<template>
  <vector-layout>
    <template v-slot:header>
      <sticky-header-one></sticky-header-one>
    </template>

    <template v-slot:pageTitle>
      <div
        class="page-title-with-languages"
        v-bind:class="{ 'no-header': isMainPage }"
      >
        <h1 id="firstHeading" class="firstHeading" v-if="!isMainPage">
          {{ title }}
        </h1>
        <jquery-uls v-if="languages.length > 0"></jquery-uls>
      </div>
    </template>

    <template v-slot:sidebar>
      <div id="mw-panel" v-show="sidebarCollapsed">
        <mw-portals></mw-portals>
      </div>
    </template>
  </vector-layout>
</template>

<style scoped lang="less">
#mw-panel {
  margin-top: 80px;
}
// modifying <p1-logo>
#vn-logo {
  left: 54px;
}

.page-title-with-languages {
  display: flex;
  border-bottom: 1px solid;
  align-items: center;
}

.page-title-with-languages.no-header {
  border-bottom: 0;
}

.page-title-with-languages:hover {
}

.page-title-with-languages h1 {
  border-bottom: 0;
  flex-grow: 1;
}
</style>

<script>
import "../globalSkinComponents.js";

export default {
  data() {
    return {
      componentKey: 0
    };
  },
  computed: {
    languages() {
      return this.$store.state.article.languageLinks;
    },
    isMainPage() {
      return this.$store.state.article.title === "Main Page";
    },
    title() {
      return this.$store.state.article.title;
    },
    sidebarCollapsed() {
      return !this.$store.state.user.sidebarCollapsed;
    }
  },
  watch: {
    languages() {
      this.forceRerender();
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
    },
    forceRerender() {
      this.componentKey += 1;
    }
  }
};
</script>
