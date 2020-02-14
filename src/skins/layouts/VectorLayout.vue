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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  margin: 0;
  padding: 0;
}
body.white-bg {
  background-color: #ffffff;
}

div.search-container {
  margin: 0 0 0 7px;
  position: relative;
}
div.search-container input {
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #a2a9b1;
  border-radius: 2px;
  padding: 0.4em 1.818em 0.4em 0.4em;
  -webkit-box-shadow: inset 0 0 0 1px transparent;
  box-shadow: inset 0 0 0 1px transparent;
  font-size: 0.8125em;
  direction: ltr;
  -webkit-transition: border-color 250ms, box-shadow 250ms;
  -moz-transition: border-color 250ms, box-shadow 250ms;
  transition: border-color 250ms, box-shadow 250ms;
  -webkit-appearance: textfield;
  margin-top: 11px;
}

ul.floating-menu,
ol.floating-menu {
  list-style: none;
  margin: 0;
  width: max-content;
  position: absolute;
  background: white;
  z-index: 10;
  border: 1px solid #cccccc;
  display: none;
}
ul.floating-menu li,
ol.floating-menu li {
  padding: 6px 15px;
}
ul.floating-menu li:hover,
ol.floating-menu li:hover {
  cursor: pointer;
  background: #eeeeee;
}
ul.floating-menu.searchResults,
ol.floating-menu.searchResults {
  top: 37px;
  right: 0;
  max-width: 350px;
  min-width: 175px;
}

div.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div.header .header-left,
div.header .header-right {
  display: flex;
  align-items: center;
}

div.page-container {
  display: flex;
}
div.page-container div.sidebar {
  background-color: #f6f6f6;
  min-width: 175px;
  max-width: 175px;
}
div.page-container div.sidebar img {
  width: 100%;
}
div.page-container main {
  flex: 1;
}
div.page-container main div.top-headers-container {
  margin-bottom: -1px;
  background: #f6f6f6;
  background: linear-gradient(0deg, #f6f6f6 0%, white 100%);
}
div.page-container main div.header.user-header {
  margin: 10px 14px 0 14px;
}
div.page-container main div.header.article-header {
  padding-top: 15px;
  margin-bottom: -1px;
}
div.page-container
  main
  div.header.article-header
  div.header-right.read-edit-history {
  margin-right: 14px;
}
div.page-container
  main
  div.header.article-header
  div.header-right.read-edit-history
  div.more-container
  img.more:hover {
  opacity: 0.8;
}
div.page-container main div.article-container {
  border: 1px solid #a7d7f9;
  border-right-width: 0;
  min-width: 700px;
  min-height: 1500px;
}
div.page-container main div.article-container div.article-title {
  padding: 1.25em 1.5em 0 1.5em;
}
div.page-container main div.article-container div.article-title h1 {
  font-family: "Linux Libertine", "Georgia", "Times", serif;
  font-weight: 400;
  line-height: 1.3;
  margin: 0 0 0.25em 0;
  padding: 0;
}
div.page-container main div.article-container div.article-title p {
  font-size: 12px;
}
div.page-container main div.article-container div.mw-body.mw-body-content {
  margin-top: 0;
  margin-left: 0;
  border: none;
  overflow-x: hidden;
}

div.prototype-menu-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: none;
}
div.prototype-menu-container ul,
div.prototype-menu-container ol {
  list-style: none;
  margin: 0;
  width: max-content;
  position: absolute;
  background: white;
  border: 1px solid #cccccc;
  padding: 25px;
}
div.prototype-menu-container ul li,
div.prototype-menu-container ol li {
  padding: 6px 15px;
}
div.prototype-menu-container ul li:last-child,
div.prototype-menu-container ol li:last-child {
  padding-top: 20px;
  cursor: pointer;
}

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
  data() {
    return {
      siteStyleElement: false
    };
  },
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
    language() {
      return this.$store.state.site.language;
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
  },
  watch: {
    language(oldLang, newLang) {
      const currentLang = newLang || oldLang;
      if (!this.siteStyleElement) {
        const head = document.head,
          linkEl = document.createElement("link");

        linkEl.type = "text/css";
        linkEl.rel = "stylesheet";
        linkEl.href = `https://${currentLang}.wikipedia.org/w/load.php?lang=en&modules=site.styles&only=styles&skin=vector`;
        head.appendChild(linkEl);

        this.siteStyleElement = linkEl;
      }
      if (currentLang !== oldLang) {
        this.siteStyleElement.setAttribute(
          "href",
          `https://${this.language}.wikipedia.org/w/load.php?lang=en&modules=site.styles&only=styles&skin=vector`
        );
      }
    }
  }
};
</script>
