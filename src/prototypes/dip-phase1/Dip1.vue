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
        <jquery-uls v-if="languages.length > 0" :key="ulsKey"></jquery-uls>
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
          <div class="vn-page-navigation-margin">
            <right-navigation class="vector-neue"></right-navigation>
            <left-navigation class="vector-neue"></left-navigation>
          </div>
        </div>
      </div>

      <div id="mw-panel" v-show="sidebarCollapsed">
        <mw-portal-navigation class="first-portal" />
        <mw-portal-interaction />
        <mw-portal-tools />
        <mw-portal-other />
        <mw-portal-print />
      </div>
    </div>

    <mw-footer></mw-footer>
  </body>
</template>

<style scoped>
#vn-logo {
  left: 55px;
}

#mw-panel {
  margin-top: 80px;
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

#mw-panel .first-portal .body {
  background-image: none;
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
