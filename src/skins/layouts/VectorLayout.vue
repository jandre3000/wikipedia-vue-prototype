<template>
  <body @click="onClickContent" v-bind:class="bodyClasses">
    <div id="mw-page-base" class="noprint"></div>

    <div id="content" class="mw-body" role="main">
      <a id="top"></a>
      <div id="siteNotice" class="mw-body-content">
        <div id="centralNotice"></div>
        <!-- CentralNotice -->
      </div>
      <slot name="pageTitle">
        <h1 id="firstHeading" class="firstHeading">
          {{ title }}
        </h1>
      </slot>
      <div id="bodyContent" class="mw-body-content">
        <slot name="indicators">
          <div class="mw-indicators mw-body-content">
            <div
              :class="'mw-indicator mw-indicator-' + name"
              v-html="value"
              v-bind:key="value"
              v-for="(value, name) in indicators"
            ></div>
          </div>
        </slot>
        <div id="siteSub" class="noprint">
          {{ $store.state.article.tagline }}
        </div>
        <div id="contentSub"></div>
        <mw-core>Content goes here!!</mw-core>
      </div>
    </div>

    <div id="mw-navigation">
      <h2>Navigation menu</h2>

      <slot name="header">
        <div id="mw-head">
          <personal-navigation></personal-navigation>
          <right-navigation></right-navigation>
          <left-navigation></left-navigation>
        </div>
      </slot>

      <slot name="sidebar">
        <div id="mw-panel">
          <mw-logo></mw-logo>
          <mw-portal-navigation />
          <mw-portal-interaction />
          <mw-portal-tools />
          <mw-portal-other />
          <mw-portal-print />
          <mw-portal-languages />
        </div>
      </slot>
    </div>

    <mw-footer></mw-footer>
  </body>
</template>

<style lang="less">
@import "../static/styles/css-ltr.less";
@import "../static/styles/css-rtl.less";

body {
  height: auto;
}

#coordinates {
  display: none;
}

html[dir="ltr"] .mw-body .mw-indicator {
  margin-left: 0.5em;
}

html[dir="rtl"] .mw-body .mw-indicator {
  margin-right: 0.5em;
}

// "disabling" cursor on non-functioning links
#mw-panel,
#mw-panel a,
#right-navigation a,
#left-navigation a,
#p-personal a {
  cursor: not-allowed;
}

#p-logo .mw-wiki-logo,
#pt-login a,
#pt-logout a {
  cursor: pointer;
}
</style>

<script>
import "../globalSkinComponents.js";

export default {
  computed: {
    bodyClasses() {
      let title = this.$store.state.site.titleParam;
      return [
        "mediawiki",
        this.$store.state.site.langDir,
        `sitedir-${this.$store.state.site.langDir}`,
        "mw-hide-empty-elt",
        "ns-0",
        "ns-subject",
        `page-${title}`,
        `rootpage-${title}`,
        "skin-vector",
        "action-view",
        this.$store.state.user.sidebarCollapsed ? "vn-sidebar-collapsed" : ""
      ];
    },
    title() {
      return this.$store.state.article.title;
    },
    indicators() {
      return this.$store.state.article.indicators;
    },
    sidebarCollapsed() {
      return this.$store.state.user.sidebarCollapsed;
    },
    langDir() {
      return this.$store.state.site.langDir;
    }
  },
  methods: {
    onClickContent(event) {
      const nodeName = event.target.nodeName,
        href = event.target.getAttribute("href"),
        currentRouteLanguage = this.$store.state.site.language;
      if (nodeName == "A" && /\/wiki\//.test(href)) {
        event.stopPropagation();
        event.preventDefault();
        this.$router.push(`/${currentRouteLanguage}${href}`);
      }
    }
  }
};
</script>
