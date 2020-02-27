<template>
  <body>
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

<style lang="scss" scoped>
html[dir="ltr"] body,
html[dir="rtl"] body {
  background-color: white;
}

html[dir="ltr"] {
  header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 20;
    opacity: 0;
    transform: translateY(-100%);
    transition: all 250ms linear;

    .header {
      padding: 10px 25px;

      .header-left {
        .search {
          margin: 0px 30px 0 20px;
        }

        .article-title-subheader {
          margin: 0px 5px;
          padding-left: 20px;
          border-left: 1px solid #cccccc;
          font-size: 18px;
          font-weight: bold;
        }
      }

      .header-right {
        div {
          margin-left: 30px;
        }
      }

      .subheader {
        display: flex;
        align-items: center;
        opacity: 0;
        transition: all 150ms linear;
      }
    }

    &:hover {
      .header {
        background-color: #fffffff7;
        border-bottom: 1px solid #eeeeee;
      }

      .subheader {
        opacity: 1;
      }
    }

    &.headroom--top {
      opacity: 0;
      transform: translateY(-100%);
    }

    // scrolling down, beyond the top bit
    &.headroom--not-top.headroom--unpinned {
      opacity: 1;
      transform: translateY(0%);
    }

    // scrolling up, before the top bit
    &.headroom--not-top.headroom--pinned {
      opacity: 1;
      transform: translateY(0%);

      .header {
        background-color: #fffffff7;
        border-bottom: 1px solid #eeeeee;
      }

      .subheader {
        opacity: 1;
      }
    }
  }

  div.hamburger {
    margin-right: 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }

  div.site-header {
    padding: 18px 25px;

    > div {
      flex: 1;
    }

    div.header-left {
      justify-content: flex-start;

      div.search-container {
        margin: 0;
        input {
          width: 280px;
          border-radius: 4px;
          margin: 0;
        }
        ul.searchResults {
          top: 32px;
          right: unset;
          min-width: 277px;
        }
      }
    }
    div.header-middle {
      display: flex;
      justify-content: center;
    }
    div.header-right {
      justify-content: flex-end;
    }
  }

  div.page-container {
    &.hide-sidebar {
      div.sidebar {
        transform: translateX(-195px);
      }
      .main-wrapper {
        width: 100%;
        margin-left: -195px;
      }
      main {
        padding: 0 90px 0 25px;
      }
    }
  }

  div.page-container {
    div.sidebar {
      transform: translateX(0px);
      min-width: 195px;
      max-width: 195px;
      transition: all 300ms ease-out;
      position: sticky;
      height: 100vh;
      overflow-y: auto;
      overflow-x: hidden;
      top: 58px;
      background-color: #ffffff;
      &.no-animation {
        transition: none;
      }

      img {
        width: 175px;
      }
    }
    .main-wrapper {
      width: calc(100% - 195px);
      //transition: all 300ms ease-out;
      &.no-animation {
        transition: none;
      }
    }
    main {
      max-width: 1080px;
      min-width: 475px;
      padding: 0 25px;
      margin: 0 auto;
      display: flex;

      .contents {
        background: #f8f9fa;
        border-radius: 4px;
        height: fit-content;
        margin: 20px 40px 0 0;
        position: sticky;
        top: 60px;
        padding: 20px;

        .contents-title {
          font-size: 18px;
          font-weight: bold;
          margin: 0;
          padding: 5px 0 10px 0;
        }

        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          width: 150px;
          font-size: 14px;

          li {
            margin: 14px 0;

            a {
              color: #3366cc;
              text-decoration: none;
            }
          }
        }
      }

      .page {
        min-width: 475px;

        div.article-container {
          border: none;
          border-top: 1px solid #eaecf0;
          min-height: unset;
        }
        div.header.article-header {
          div.header-right.read-edit-history {
            margin-right: 0;
          }
        }
        div.article-container {
          min-width: unset;

          div.mw-body.mw-body-content {
            padding: 1.25em 0 1.5em 0;
          }
          div.article-title {
            padding: 1.25em 0 0 0;
          }
        }
      }
    }
  }

  .mw-body #toc {
    display: none;
  }

  div.languages-header {
    border-bottom: 1px solid #c8ccd1;
    padding-bottom: 8px;
    margin-bottom: 12px;
    .header-left {
      h1 {
        border-bottom: none;
        margin: 0 !important;
      }
    }
  }

  div.languages-container {
    cursor: pointer;
    position: relative;
    img:hover {
      opacity: 0.8;
      transition: all 200ms;
    }
    ul {
      color: #0645ad;
      padding: 6px 0;
      right: 0;

      li:hover {
        text-decoration: underline;
      }
    }
  }
}

html[dir="rtl"] {
  header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 20;
    opacity: 0;
    transform: translateY(100%);
    transition: all 250ms linear;
  }
  header .header {
    padding: 10px 25px;
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
    margin-right: 30px;
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
    transform: translateY(100%);
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

  .mw-body {
    margin-right: 0 !important;
  }

  div.hamburger {
    margin-left: 20px;
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
    transform: translateX(195px);
    max-width: 0;
    overflow: hidden;
    display: none;
  }
  div.page-container.hide-sidebar .main-wrapper {
    /*width: 100%;*/
    margin: 0 auto;
    position: relative;
  }
  div.page-container.hide-sidebar main {
    padding: 0 25px 0 90px;
  }

  div.page-container div.sidebar {
    transform: translateX(0px);
    min-width: 195px;
    max-width: 195px;
    transition: all 300ms ease-out;
    position: sticky;
    height: 100vh;
    overflow-y: auto;
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
    /*width: calc(100% - 195px); */
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
    margin: 20px 0 0 40px;
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

  .mw-body #toc {
    display: none;
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
