<template>
  <body @click="onClickContent" v-bind:class="bodyClasses">
    <div id="mw-page-base" class="noprint"></div>

    <div id="content" class="mw-body" role="main">
      <a id="top"></a>
      <div id="siteNotice" class="mw-body-content">
        <div id="centralNotice"></div>
        <!-- CentralNotice -->
      </div>

      <div class="page-title-with-languages">
        <h1 id="firstHeading" class="firstHeading">
          {{ title }}
        </h1>
        <jquery-uls
          v-if="languages.length > 0"
          :key="ulsKey"
          v-bind:hideSearch="true"
        ></jquery-uls>
      </div>

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

      <div id="mw-head">
        <vn-menu-icon></vn-menu-icon>
        <p1-logo id="vn-logo"></p1-logo>
        <personal-navigation></personal-navigation>

        <div class="vn-page-navigation">
          <right-navigation></right-navigation>
          <left-navigation></left-navigation>
        </div>
      </div>
    </div>

    <div ref="sidebar" id="mw-panel" :class="{ collapsed: sidebarCollapsed }">
      <mw-portal-navigation class="first-portal" />
      <mw-portal-interaction />
      <mw-portal-tools />
      <mw-portal-other />
      <mw-portal-print />
    </div>

    <mw-footer></mw-footer>
  </body>
</template>

<style lang="less" scoped>
@import "../static/css/vector.css";
</style>

<style lang="less" scoped>
body {
  background-color: white;
}

#vn-logo {
  left: 55px;
}

/** Sidebar */
#mw-panel {
  top: 103px;
  position: absolute;
  overflow: auto;
  height: 100vh;
  transition: transform 150ms ease-out;
  background: linear-gradient(0deg, #f6f6f6 90%, #ffffff 100%);
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.15);
}

#mw-panel.collapsed {
  transform: translateX(-100%);
}

#mw-panel.headroom--not-top {
  position: fixed;
  top: 0;
}

#mw-head {
  z-index: 1;
  height: 44px;
  width: 100%;
  background-color: white;
}

#vn-logo {
  left: 55px;
}

#p-personal {
  top: 14px;
}

.page-Main_Page .page-title-with-languages {
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
  box-shadow: inset 0 40px 25px 10px #fff;
}

#left-navigation.vector-neue,
#right-navigation.vector-neue {
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

#mw-page-base {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}

.mw-body {
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  min-width: 500px;
  padding: 1em 70px;
  border: none;
}

.vn-page-navigation {
  max-width: 960px;
  min-width: 500px;
  margin: 0 auto;
  border-bottom: 1px solid #a7d7f9;
}

.vn-page-navigation:after {
  display: block;
  content: "";
  clear: both;
}

#left-navigation {
  margin-left: 0;
  margin-right: 0;
}

/deep/ #right-navigation,
/deep/ #left-navigation {
  margin-top: 63px;
  margin-bottom: -1px;
}

/deep/ #p-namespaces {
  background-image: none;
}

/deep/ #p-personal {
  margin-left: 230px;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding-left: 0;
  }
}

/deep/ #simpleSearch {
  width: 13.2em;
}

.vn-sidebar-collapsed .mw-body {
  padding: 1em 40px;
}

@media screen and (max-width: 1360px) {
  #mw-panel {
    transition: none;
  }

  .vn-sidebar-collapsed .mw-body {
    margin-left: 180px;
  }

  .vn-sidebar-collapsed .vn-page-navigation {
    margin-left: 220px;
  }
}

/* These are ridiculous breakpoints */
@media screen and (max-width: 982px) {
  #mw-panel {
    padding-left: 0.5em;
    z-index: 1;
  }
}

// overriding default styles
@media screen and (min-width: 982px) {
  .mw-body {
    padding: 1em 70px;
  }
}

@media screen and (min-width: 1440px) {
  .mw-body,
  .vn-page-navigation {
    max-width: 66.7%;
  }
}
/* Make the sidebar overlap conent on small screens
@media screen and (max-width: 768px) {
  .vn-sidebar-collapsed .mw-body {
    margin-left: 0;
  }
}
*/
</style>

<script>
import "../globalSkinComponents.js";
// import Headroom from "headroom.js";

export default {
  data() {
    return {
      ulsKey: 0,
      indicators: ""
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
  mounted: function() {
    /* Makes sidebar fixed/sticky on scroll
    const headroom = new Headroom(this.$refs.sidebar, {
      offset: 103
    });
    headroom.init();
    */
  },
  methods: {
    forceRerender() {
      this.ulsKey += 1;
    },
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
