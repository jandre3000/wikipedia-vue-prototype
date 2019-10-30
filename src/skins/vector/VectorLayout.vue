<template>
  <body
    @click="onClickContent"
    v-bind:class="{ 'vn-sidebar-collapsed': sidebarCollapsed }"
    class="mediawiki ltr sitedir-ltr mw-hide-empty-elt ns-0 ns-subject rootpage-Main_Page skin-vector action-view webfonts-changed"
  >
    <div id="mw-page-base" class="noprint"></div>
    <div id="mw-head-base" class="noprint"></div>
    <div id="content" class="mw-body" role="main">
      <a id="top"></a>
      <div id="siteNotice" class="mw-body-content">
        <div id="centralNotice"></div>
        <!-- CentralNotice -->
      </div>
      <slot name="pageTitle">
        <h1 id="firstHeading" class="firstHeading" v-if="!isMainPage">
          {{ title }}
        </h1>
      </slot>
      <div id="bodyContent" class="mw-body-content">
        <mw-core>Content goes here!!</mw-core>
      </div>
    </div>
    <div id="mw-navigation">
      <h2>Navigation menu</h2>

      <slot name="header">
        <div id="mw-head">
          <personal-navigation></personal-navigation>
        </div>
      </slot>

      <div class="vn-page-navigation">
        <div class="vn-page-navigation-margin">
          <right-navigation></right-navigation>
          <left-navigation></left-navigation>
        </div>
      </div>

      <slot name="sidebar">
        <div id="mw-panel">
          <mw-logo></mw-logo>
          <mw-portals></mw-portals>
        </div>
      </slot>
    </div>
    <mw-footer></mw-footer>
  </body>
</template>

<style lang="less">
@import "./assets/css_1.css";
@import "./assets/css_2.css";
@import "./assets/css_3.css";
@import "./assets/css_4.css";

body {
  height: auto;
}

.vn-page-navigation {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
}

#mw-head {
  z-index: 1;
}

/* DANGER: this is using a body class to move the layout for the collapsed sidebar.
 * Is there a better way to do this?
 */
body.vn-sidebar-collapsed {
  background-color: white;

  #mw-page-base {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
  }

  .mw-body {
    margin-left: auto;
    margin-right: auto;
    // DANGER: what width should we use, what do specialPages like recent changes
    // look like with it?
    max-width: 960px; //random
    border-left: none;
  }

  #left-navigation {
    margin-left: 0;
  }
  .vn-page-navigation-margin {
    max-width: 960px; // random because 1em padding on body
    margin-left: auto;
    margin-right: auto;
  }
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
    },
    sidebarCollapsed() {
      return this.$store.state.user.sidebarCollapsed;
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
