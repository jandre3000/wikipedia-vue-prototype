<template>
  <body @click="onClickContent" v-bind:class="bodyClasses">
    <header class="floating-header" ref="header">
      <div class="header">
        <div class="header-left">
          <div class="logo">
            <img src="../static/images/logo-w.svg" />
          </div>
          <div class="search">
            <img src="../static/images/search-icon.svg" />
          </div>
          <div class="subheader">
            <p class="article-title-subheader">{{ title }}</p>
          </div>
        </div>
        <div class="header-right">
          <div class="subheader">
            <div class="edit"><img src="../static/images/edit.svg" /></div>
            <!-- Problem, both respond to a single event.
				<jquery-uls
              v-if="languages.length > 0"
              :key="ulsKey + 1"
            ></jquery-uls>
			-->
          </div>
          <div class="settings-user">
            <img src="../static/images/settings-user.svg" />
          </div>
        </div>
      </div>
    </header>

    <div class="header site-header">
      <div class="header-left">
        <div class="hamburger" v-on:click="toggleSidebar">
          <img src="https://desktop-prototype.web.app/img/hamburger.svg" />
        </div>
        <div class="search-container">
          <input
            placeholder="Search Wikipedia..."
            v-model="searchQuery"
            v-on:blur="clearSearchQuery"
          />
          <type-ahead
            v-if="searchQuery"
            v-bind:query="searchQuery"
            v-bind:lang="language"
          ></type-ahead>
        </div>
      </div>
      <div class="header-middle">
        <div class="logo">
          <p2-logo></p2-logo>
          <!-- <img src="../static/images/logo-header.svg" /> -->
        </div>
      </div>
      <div class="header-right">
        <div class="user-menu">
          <img src="../static/images/user-menu.svg" />
        </div>
      </div>
    </div>
    <div
      class="page-container"
      v-bind:class="hiddenSidebar ? 'hide-sidebar' : 'show-sidebar'"
    >
      <div class="sidebar">
        <div id="mw-panel">
          <mw-portal-navigation />
          <mw-portal-interaction />
          <mw-portal-tools />
          <mw-portal-other />
          <mw-portal-print />
        </div>
        <!-- <img src="../static/images/sidebar6.jpg" /> -->
      </div>
      <div class="main-wrapper">
        <main>
          <div v-if="!isMainPage" class="contents">
            <p class="contents-title">
              {{ $store.state.site.i18n["toc"] }}
            </p>
            <ul class="contents-list">
              <li>
                <a href="#Introduction">{{ title }}</a>
              </li>
              <li v-for="t in toc" v-bind:key="t.anchor">
                <a v-if="t.toclevel === 1" v-bind:href="'#' + t.anchor">{{
                  t.line
                }}</a>
              </li>
            </ul>
          </div>
          <div class="page">
            <div class="header article-header">
              <div class="header-left article-talk">
                <img src="../static/images/article-discussion.svg" />
              </div>
              <div class="header-right read-edit-history">
                <img src="../static/images/page-tools.svg" />
              </div>
            </div>
            <div class="article-container">
              <div class="article-title" id="Introduction" v-if="!isMainPage">
                <div class="header languages-header">
                  <div class="header-left">
                    <h1>{{ title }}</h1>
                  </div>
                  <div class="header-right">
                    <div class="languages-container">
                      <jquery-uls
                        subtle="true"
                        v-if="languages.length > 0"
                        :key="ulsKey"
                      ></jquery-uls>
                    </div>
                  </div>
                </div>
                <p v-if="!isMainPage" id="new-operator">
                  {{ $store.state.site.tagline }}
                </p>
              </div>
              <div class="mw-body mw-body-content content">
                <mw-core class="no-toc"></mw-core>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  margin: 0;
  padding: 0;
}
body {
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

header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 20;
  opacity: 0;
  transform: translateY(-100%);
  transition: all 250ms linear;
}
header .header {
  padding: 10px 25px;
}

header .header .header-left {
  display: flex;
  align-items: center;
}

header .header .header-left .search {
  margin: 0px 30px 0 20px;
}
header .header .header-left .article-title-subheader {
  margin: 0px 5px;
  padding-left: 20px;
  border-left: 1px solid #cccccc;
  font-size: 18px;
  font-weight: bold;
}
header .header .header-right div {
  margin-left: 30px;
}
header .header .subheader {
  display: flex;
  align-items: center;
  opacity: 0;
  transition: all 150ms linear;
}
header:hover .header {
  background-color: #fffffff7;
  border-bottom: 1px solid #eeeeee;
}
header:hover .subheader {
  opacity: 1;
}
header.headroom--top {
  opacity: 0;
  transform: translateY(-100%);
}
header.headroom--not-top.headroom--unpinned {
  opacity: 1;
  transform: translateY(0%);
}
header.headroom--not-top.headroom--pinned {
  opacity: 1;
  transform: translateY(0%);
}
header.headroom--not-top.headroom--pinned .header {
  background-color: #fffffff7;
  border-bottom: 1px solid #eeeeee;
}
header.headroom--not-top.headroom--pinned .subheader {
  opacity: 1;
}

div.hamburger {
  margin-right: 20px;
  cursor: pointer;
}
div.hamburger:hover {
  opacity: 0.8;
}

div.site-header {
  padding: 18px 25px;
}
div.site-header > div {
  flex: 1;
}
div.site-header div.header-left {
  justify-content: flex-start;
}
div.site-header div.header-left div.search-container {
  margin: 0;
}
div.site-header div.header-left div.search-container input {
  width: 280px;
  border-radius: 4px;
  margin: 0;
}
div.site-header div.header-left div.search-container ul.searchResults {
  top: 32px;
  right: unset;
  min-width: 277px;
}
div.site-header div.header-middle {
  display: flex;
  justify-content: center;
}
div.site-header div.header-right {
  justify-content: flex-end;
}

div.page-container.hide-sidebar div.sidebar {
  transform: translateX(-195px);
}
div.page-container.hide-sidebar .main-wrapper {
  width: 100%;
  margin-left: -195px;
}
div.page-container.hide-sidebar main {
  padding: 0 90px 0 25px;
}

div.page-container div.sidebar {
  transform: translateX(0px);
  min-width: 195px;
  max-width: 195px;
  transition: all 300ms ease-out;
  position: sticky;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  top: 58px;
  background-color: #ffffff;
}
div.page-container div.sidebar.no-animation {
  transition: none;
}
div.page-container div.sidebar img {
  width: 175px;
}
div.page-container .main-wrapper {
  width: calc(100% - 195px);
}
div.page-container .main-wrapper.no-animation {
  transition: none;
}
div.page-container main {
  max-width: 1080px;
  min-width: 475px;
  padding: 0 25px;
  margin: 0 auto;
  display: flex;
}
div.page-container main .contents {
  background: #f8f9fa;
  border-radius: 4px;
  height: fit-content;
  margin: 20px 40px 0 0;
  position: sticky;
  top: 60px;
  padding: 20px;
}
div.page-container main .contents .contents-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  padding: 5px 0 10px 0;
}
div.page-container main .contents ul {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 150px;
  font-size: 14px;
}
div.page-container main .contents ul li {
  margin: 14px 0;
}
div.page-container main .contents ul li a {
  color: #3366cc;
  text-decoration: none;
}
div.page-container main .page {
  min-width: 475px;
}
div.page-container main .page div.article-container {
  border: none;
  border-top: 1px solid #eaecf0;
  min-height: unset;
}
div.page-container
  main
  .page
  div.header.article-header
  div.header-right.read-edit-history {
  margin-right: 0;
}
div.page-container main .page div.article-container {
  min-width: unset;
}
div.page-container
  main
  .page
  div.article-container
  div.mw-body.mw-body-content {
  padding: 1.25em 0 1.5em 0;
}
div.page-container main .page div.article-container div.article-title {
  padding: 1.25em 0 0 0;
}

div.languages-header {
  border-bottom: 1px solid #c8ccd1;
  padding-bottom: 8px;
  margin-bottom: 12px;
}
div.languages-header .header-left h1 {
  border-bottom: none;
  margin: 0 !important;
}

div.languages-container {
  cursor: pointer;
  position: relative;
}
div.languages-container img:hover {
  opacity: 0.8;
  transition: all 200ms;
}
div.languages-container ul {
  color: #0645ad;
  padding: 6px 0;
  right: 0;
}
div.languages-container ul li:hover {
  text-decoration: underline;
}
</style>

<script>
import "../globalSkinComponents.js";
import Headroom from "headroom.js";

export default {
  data() {
    return {
      ulsKey: 0,
      hiddenSidebar: true,
      searchQuery: ""
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
    isMainPage() {
      return this.$route.params.title === "Main_Page";
    },
    title() {
      return this.$store.state.article.title;
    },
    toc() {
      return this.$store.state.article.toc;
    },
    language() {
      return this.$store.state.site.language;
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
    },
    "$route.params.title": function(title) {
      if (title === "Main_Page") {
        this.$data.title = true;
      } else {
        this.$data.title = false;
      }
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
    },
    forceRerender() {
      this.ulsKey += 1;
    },
    toggleSidebar() {
      this.$data.hiddenSidebar = !this.$data.hiddenSidebar;
    },
    clearSearchQuery() {
      setTimeout(() => {
        this.$data.searchQuery = "";
      }, 300);
    }
  },
  mounted: function() {
    const headroom = new Headroom(this.$refs.header, {
      offset: 100
    });
    headroom.init();
  }
};
</script>
