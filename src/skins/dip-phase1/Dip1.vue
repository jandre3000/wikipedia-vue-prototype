<template>
  <vector-layout class="vector-neue">
    <template v-slot:pageTitle>
      <div class="page-title-with-languages">
        <h1 id="firstHeading" class="firstHeading">
          {{ title }}
        </h1>
        <jquery-uls v-if="languages.length > 0" :key="ulsKey"></jquery-uls>
      </div>
    </template>

    <template v-slot:header>
      <sticky-header-one></sticky-header-one>
    </template>

    <template v-slot:right-left-navigation>
      <div class="vn-page-navigation">
        <div class="vn-page-navigation-margin">
          <right-navigation></right-navigation>
          <left-navigation></left-navigation>
        </div>
      </div>
    </template>

    <template v-slot:sidebar>
      <div id="mw-panel" v-show="sidebarCollapsed">
        <mw-portal-navigation class="first-portal" />
        <mw-portal-interaction />
        <mw-portal-tools />
        <mw-portal-other />
        <mw-portal-print />
      </div>
    </template>
  </vector-layout>
</template>

<style lang="less">
html[dir="ltr"] .vector-neue,
html[dir="rtl"] .vector-neue {
  #vn-logo {
    left: 55px;
  }

  #mw-panel {
    margin-top: 80px;
  }

  #p-personal {
    top: 14px;
  }

  &.page-Main_Page .page-title-with-languages {
    display: none;
  }

  .page-title-with-languages {
    display: flex;
    border-bottom: 1px solid #a2a9b1;
    align-items: center;
    margin-bottom: 0.25em;
  }

  .page-title-with-languages.no-header {
    border-bottom: 0;
  }

  .page-title-with-languages h1 {
    border-bottom: 0;
    flex-grow: 1;
    margin-bottom: 0;
  }

  #mw-page-base {
    height: 103px;
  }

  #left-navigation,
  #right-navigation {
    margin-top: 63px;
  }

  body.page-Main_Page .page-title-with-languages {
    display: none;
  }

  #p-navigation-label {
    display: none;
  }

  #p-navigation .body {
    background-image: none !important;
  }

  #mw-panel .first-portal .body {
    background-image: none;
  }
}
</style>

<script>
import "../globalSkinComponents.js";

export default {
  data() {
    return {
      ulsKey: 0
    };
  },
  computed: {
    isMainPage() {
      return this.$store.state.article.title === "Main Page";
    },
    title() {
      return this.$store.state.article.title;
    },
    languages() {
      return this.$store.state.article.languageLinks;
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
    forceRerender() {
      this.ulsKey += 1;
    }
  }
};
</script>
