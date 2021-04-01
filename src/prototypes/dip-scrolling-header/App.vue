<template>
  <body @click="onClickContent" v-bind:class="bodyClasses">
    <div class="outer-container">
      <header
        ref="header"
        v-on:mouseenter="headroom.pin()"
        v-on:mouseleave="headroom.unpin()"
        class="floating-header headroom headroom--not-bottom headroom--not-top headroom--pinned"
      >
        <div class="header">
          <div class="header-left">
            <a class="button logo-icon">
              <img src="./img/w.svg" />
            </a>
            <a class="button button-icon logo-icon subheader">
              <img src="./img/w.svg" />
            </a>

            <!-- Search -->
            <a
              v-on:click="showStickySearch = !showStickySearch"
              class="button button-icon search-icon subheader"
            >
              <img src="./img/search.svg" />
            </a>
            <WvuiTypeaheadSearch
              v-show="showStickySearch"
              buttonLabel="search"
              formAction="search"
              footerSearchText="search in pages"
              suggestionsLabel="suggestions label"
              id="stickySearch"
              class="subheader"
              searchPlaceholder="Search Wikipedia"
            />
            <div class="search-container subheader"></div>
            <!-- Article title -->
            <div
              v-show="!showStickySearch"
              class="article-title-subheader subheader"
            >
              <p class="title">{{ this.title }}</p>
              <p v-if="this.tocTitle" class="title-section">
                {{ this.tocTitle }}
                <!-- &nbsp;&nbsp;History -->
              </p>
            </div>
          </div>
          <div class="header-right" v-show="loggedIn">
            <!-- Article tools -->
            <div class="button-group subheader">
              <a class="button button-icon">
                <img src="./img/talk.svg" />
                <p class="tooltip" data-stringname="discussionString">Talk</p>
              </a>
              <a class="button button-icon">
                <img src="./img/history.svg" />
                <p class="tooltip" data-stringname="historyString">History</p>
              </a>
              <a class="button button-icon">
                <img src="./img/edit-source.svg" />
                <p class="tooltip" data-stringname="editSourceString">
                  Edit source
                </p>
              </a>
              <a class="button button-icon">
                <img src="./img/edit-icon.svg" />
                <p class="tooltip" data-stringname="editString">Edit</p>
              </a>
            </div>
            <!-- Language switcher & menu -->
            <div class="languages-container subheader">
              <a class="button" onclick="toggleLanguageMenuFloating()">
                <img src="./img/languages-icon.svg"/><span
                  data-stringname="languagebuttonString"
                >
                  {{ languages.length }} Languages</span
                ><img src="./img/down.svg"
              /></a>
              <div class="language-menu" data-stringname="languageMenuString">
                <!--<img src="./img/uls.png" />-->
              </div>
            </div>
            <!-- User menu -->
            <a class="button user-icon" v-on:click="toggleUserMenuFloating">
              <img src="./img/user.svg" />
              <img src="./img/down.svg" />
            </a>
            <ul class="floating-menu user-menu" v-show="userMenuFloating">
              <li class="compact-menu">
                <img src="./img/bell.svg" />
                <span data-stringname="alertsString">Alerts</span>
              </li>
              <li class="compact-menu">
                <img src="./img/inbox.svg" />
                <span data-stringname="noticesString">Notices</span>
              </li>
              <li>
                <img src="./img/sandbox.svg" />
                <span data-stringname="sandboxString">Sandbox</span>
              </li>
              <li>
                <img src="./img/preferences.svg" />
                <span data-stringname="preferencesString">Preferences</span>
              </li>
              <li>
                <img src="./img/beta.svg" />
                <span data-stringname="betaString">Beta</span>
              </li>
              <li>
                <img src="./img/watchlist.svg" />
                <span data-stringname="watchlistString">Watchlist</span>
              </li>
              <li>
                <img src="./img/contribs.svg" />
                <span data-stringname="contributionsString">Contributions</span>
              </li>
              <li>
                <img src="./img/languages-icon.svg" />
                <span data-stringname="contributionsString">Translations</span>
              </li>
              <li>
                <img src="./img/commons.svg" />
                <span data-stringname="contributionsString"
                  >Uploaded media</span
                >
              </li>
              <li>
                <span data-stringname="gadgetString">Gadget</span>
              </li>
              <li>18:05:22</li>
              <li>
                <img src="./img/logout.svg" />
                <span v-on:click="toggleLoggedIn">Log out</span>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div class="header site-header">
        <div class="header-left">
          <div class="hamburger" v-on:click="toggleSidebar">
            <img src="https://desktop-prototype.web.app/img/hamburger.svg" />
          </div>
          <p1-logo></p1-logo>
        </div>
        <div class="header-middle">
          <WvuiTypeaheadSearch
            buttonLabel="Search"
            formAction="search"
            footerSearchText="search in pages"
            suggestionsLabel="no idea"
            id="headerSearch"
            placeholder="Search Wikipedia"
          />
          <a class="button search-icon">
            <img src="./img/search.svg" />
          </a>
        </div>
        <div class="header-right">
          <!-- L O G G E D  O U T -->
          <div v-show="!loggedIn" class="user-links-container logged-out">
            <a class="button detailed-menu">
              <span data-stringname="signUpString">Create account</span>
            </a>
            <a
              class="button button-icon"
              id="loggedOutUserMenuButton"
              v-on:click="toggleUserMenu"
            >
              <img src="./img/more.svg" />
            </a>
            <ul class="floating-menu user-menu" v-show="userMenuOpen">
              <li class="compact-menu">
                <img src="./img/user.svg" />
                <span data-stringname="signUpString">Create account</span>
              </li>
              <li>
                <img src="./img/login.svg" />
                <span v-on:click="toggleLoggedIn">Log in</span>
              </li>
              <li class="text">
                <span data-stringname="loggedOutMessageString"
                  >Pages for logged-out editors (<a href="">learn more</a
                  >):</span
                >
              </li>
              <li>
                <span data-stringname="discussionString">Talk</span>
              </li>
              <li>
                <span data-stringname="contributionsString">Contributions</span>
              </li>
            </ul>
          </div>
          <!-- L O G G E D  I N -->
          <div class="user-links-container logged-in" v-show="loggedIn">
            <a class="button button-icon disabled detailed-menu"
              ><img src="./img/bell.svg"
            /></a>
            <a class="button button-icon disabled detailed-menu"
              ><img src="./img/inbox.svg"
            /></a>
            <a class="button">
              <img src="./img/user.svg" />
              <span class="detailed-menu">L May Alcott</span>
            </a>
            <a
              class="button button-icon"
              id="loggedOutUserMenuButton"
              v-on:click="toggleUserMenu"
            >
              <img src="./img/more.svg" />
            </a>
            <ul
              class="floating-menu user-menu"
              v-show="userMenuOpen && loggedIn"
            >
              <li class="compact-menu">
                <img src="./img/bell.svg" />
                <span data-stringname="alertsString">Alerts</span>
              </li>
              <li class="compact-menu">
                <img src="./img/inbox.svg" />
                <span data-stringname="noticesString">Notices</span>
              </li>
              <li>
                <img src="./img/sandbox.svg" />
                <span data-stringname="sandboxString">Sandbox</span>
              </li>
              <li>
                <img src="./img/preferences.svg" />
                <span data-stringname="preferencesString">Preferences</span>
              </li>
              <li>
                <img src="./img/beta.svg" />
                <span data-stringname="betaString">Beta</span>
              </li>
              <li>
                <img src="./img/watchlist.svg" />
                <span data-stringname="watchlistString">Watchlist</span>
              </li>
              <li>
                <img src="./img/contribs.svg" />
                <span data-stringname="contributionsString">Contributions</span>
              </li>
              <li>
                <img src="./img/languages-icon.svg" />
                <span data-stringname="contributionsString">Translations</span>
              </li>
              <li>
                <img src="./img/commons.svg" />
                <span data-stringname="contributionsString"
                  >Uploaded media</span
                >
              </li>
              <li>
                <span data-stringname="gadgetString">Gadget</span>
              </li>
              <li>18:05:22</li>
              <li>
                <img src="./img/logout.svg" />
                <span v-on:click="toggleLoggedIn">Log out</span>
              </li>
            </ul>
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
        </div>
        <div class="main-wrapper">
          <main>
            <div class="page">
              <div class="header article-header">
                <left-navigation class="header-left article-talk" />

                <right-navigation
                  class="header-right read-edit-history"
                  v-bind:search="false"
                />
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
                          subtle
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
                  <mw-core
                    class="no-toc"
                    ref="content"
                    v-on:content-updated="contentUpdated"
                  ></mw-core>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </body>
</template>

<style lang="less" scoped>
@import "../static/css/vector.css";
</style>

<style lang="less">
@import "~@wikimedia/wvui/dist/wvui.css";
</style>

<style scoped>
body {
  background-color: #f8f9fa;
}
.outer-container {
  position: relative;
  max-width: 1650px;
  min-width: 470px;
  margin: 0 auto;
  overflow: hidden;
  background-color: white;
}

#vn-logo {
  position: static;
  display: flex;
  margin-right: 36px;
}

.floating-menu.user-menu {
  width: 180px;
  top: 35px;
  right: 0;
  font-size: 14px;
  font-weight: 500;
  list-style: none;
  margin: 0;
  position: absolute;
  background: white;
  z-index: 10;
  border: 1px solid #cccccc;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 25%);
  border-radius: 2px;
}

a.button .tooltip {
  background: #000000bf;
  color: white;
  font-weight: 500;
  padding: 2px 10px;
  margin-top: 8px;
  border-radius: 2px;
  left: 0px;
  transition: all 300ms;
  white-space: nowrap;
  opacity: 0;
}

a.button:hover .tooltip {
  opacity: 1;
}

.wvui-typeahead-search {
  flex-grow: 1;
  max-width: 445px;
}
</style>

<style>
#headerSearch,
#stickySearch {
  font-size: 16px;
  z-index: 1;
  /*
  min-width: 35vw;
  max-width: 600px;
  */
}
#headerSearch-suggestions,
#stickySearch-suggestions {
  font-size: 14px;
}

#headerSearch-suggestions a,
#stickySearch-suggestions a {
  text-decoration: none;
}

#stickySearch .wvui-icon.wvui-input__start-icon {
  display: none;
}
#stickySearch .wvui-input__input {
  width: 100% !important;
}

#stickySearch .wvui-typeahead-search__suggestions {
  left: 0;
}
#stickySearch .wvui-input__input:focus {
  left: 0;
  width: auto;
}

.header-right .user-links-container.logged-out {
  display: flex;
}

.floating-menu.user-menu li:first-child {
  padding-top: 10px;
}

.floating-menu.user-menu li.text {
  border-top: 1px solid #cccccc;
  padding: 15px 15px 15px 15px;
  font-weight: 500;
  color: #54595d;
  pointer-events: none;
}

.header-right .user-links-container ul li img {
  margin-right: 8px;
}

.user-links-container.logged-in {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
}

a.button span {
  padding: 0 2px 0 6px;
  white-space: nowrap;
}

#p-namespaces {
  background-position: 1px 0;
}
</style>

<style scoped>
.header a.button:hover {
  background-color: rgba(0, 24, 73, 0.02745098);
  text-decoration: none;
}

#left-navigation,
#right-navigation {
  margin: 0;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  margin: 0;
  padding: 0;
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
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
}
div.header .header-left,
div.header .header-right {
  display: flex;
  align-items: center;
  position: relative;
}

div.page-container {
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  overflow-y: hidden;
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
  padding-bottom: 0;
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

header .header .header-left .article-title-subheader .title-section {
  position: relative;
}
header .header .header-left .article-title-subheader .title-section:before {
  content: "";
  display: block;
  position: absolute;
  left: 15px;
  top: 10%;
  height: 90%;
  background-color: #444;
  border-radius: 1px;
  width: 2px;
}

header .header .header-left .article-title-subheader {
  margin: 0px 5px;
  padding-left: 20px;
  border-left: 1px solid #cccccc;
  font-size: 16px;
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
  position: relative;
  top: -4px;
}
div.hamburger:hover {
  opacity: 0.8;
}

div.site-header {
  padding: 18px 25px;
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
div.site-header div.header-right {
  flex-grow: 1;
  justify-content: flex-end;
  margin-left: 40px;
}

div.site-header .header-right .compact-menu {
  display: none;
}

div.page-container.hide-sidebar div.sidebar {
  transform: translateX(-150px);
}
@media (max-width: 1400px) {
  div.page-container.hide-sidebar .main-wrapper {
    width: 100%;
    margin-left: -150px;
  }
}

div.page-container.hide-sidebar main {
  padding: 0 25px 0 25px;
}

div.page-container div.sidebar {
  transform: translateX(0px);
  min-width: 150px;
  max-width: 195px;
  transition: all 300ms ease-out;
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
  position: relative;
  z-index: 0;
}

div.page-container .main-wrapper.no-animation {
  transition: none;
}

div.page-container main {
  max-width: 960px;
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

<style scoped>
body.loggedIn header .header .header-right {
  display: flex;
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
  max-width: 1660px;
  margin: 0 auto;
  padding: 6px 25px;
  justify-content: unset;
}
header .header > div {
  flex: 1;
}
.header a.button {
  background-color: #ffffff;
  height: 30px;
  font-size: 14px;
  color: #202122;
  cursor: pointer;
  padding: 0px 12px;
  border-radius: 2px;
  transition: all 200ms;
  font-weight: 700;
  display: flex;
  align-items: center;
}
header .header .header-left .logo-icon:hover {
  background-color: rgba(0, 24, 73, 0.02745098);
}

.header .header-left .logo-icon.subheader {
  display: none;
}

header .header .header-left .search-container {
  display: none;
  min-width: 220px;
  max-width: 300px;
  height: 28px;
  margin-left: 25px;
}
header .header .header-left .search-container:focus-within {
  max-width: 380px;
}
header .header .header-left .search-container button.search-button {
  height: 30px;
}
header .header .header-left .article-title-subheader {
  display: flex;
  align-items: baseline;
  white-space: nowrap;
  margin: 0 15px;
  padding-left: 30px;
  border-left: 1px solid #c8c8c8;
  margin-left: 15px;
}
header .header .header-left .article-title-subheader .title {
  margin: 0;
  font-family: "Linux Libertine", "Georgia", "Times", serif;
  font-size: 22px;
}
.header .header-left .article-title-subheader .title-section {
  margin: 0;
  padding-left: 30px;
}
.header .header-middle {
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
}
.header .header-right {
  justify-content: flex-end;
}
.header .header-right .button-group {
  display: flex;
}
.header .header-right .button-group a {
  width: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.header .header-right .button-group a img {
  margin-top: 6px;
}
.header .header-right .languages-container div.language-menu {
  margin: 0;
  width: max-content;
  position: absolute;
  right: 0px;
  top: 33px;
  z-index: 10;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  display: none;
}
header .header .header-right .languages-container div.language-menu img {
  width: 514px;
}
header .header .header-right .languages-container div.language-menu img:hover {
  opacity: 1;
}
header .header .header-right .user-menu {
  top: 38px;
  font-size: 14px;
  font-weight: 600;
}
header .header .header-right .user-menu li:first-child {
  padding-top: 10px;
}
.user-links-container.logged-in li:last-child {
  border-top: 1px solid #cccccc;
  padding: 10px 15px 8px 15px;
}
header .header .header-right .user-menu li img {
  margin-right: 10px;
}
header .header .subheader {
  opacity: 0;
  transform: translateY(-45px);
  transition: all 100ms linear;
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
  border-bottom: 1px solid #e0e2e5;
}
header.headroom--not-top.headroom--pinned .subheader {
  opacity: 1;
  transform: translateY(0);
}
header.logged-in .header {
  padding: 5px 25px;
}
header.logged-in .header.logged-in {
  display: flex;
}
header.logged-in .header.logged-out {
  display: none;
}
header.logged-in .header .header-left .search-icon {
  margin: 0 6px 0 10px;
}

.site-header .button.search-icon {
  display: none;
}

.languages-container.subheader {
  margin-left: 0 !important;
}

div.site-header .header-right .user-links-container ul li.compact-menu + li {
  padding-top: 10px;
}

@media (max-width: 575px) {
  .site-header {
    justify-content: flex-end;
  }
  .site-header div.header-left {
    flex-grow: 1;
  }
  .site-header div.header-middle a.search-icon {
    display: flex;
  }
  .site-header div.header-middle div.search-container {
    display: none;
  }
  .header .header-middle {
    flex-grow: 0;
  }
  div.site-header div.header-right {
    flex-grow: 0;
    margin: 0 0 0 5px;
  }
  div.header-right .detailed-menu {
    display: none;
  }
  .header-right .compact-menu {
    display: block;
  }

  .site-header .button.search-icon {
    display: inline;
  }

  .wvui-typeahead-search {
    display: none;
  }

  div.site-header div.header-right .compact-menu {
    display: block;
  }
}

@media (max-width: 800px) {
  .header-right .button-group,
  .header-right .languages-container {
    display: none;
  }
}

@media (max-width: 875px) {
  .site-header .header-right {
    flex-grow: 1;
    justify-content: flex-end;
  }
}

@media (max-width: 1095px) {
  .header-right .languages-container a.button span {
    display: none;
  }
}

@media (max-width: 1175px) {
  .header .header-left .logo-icon,
  .header .header-right .user-icon {
    display: none;
  }

  .header .header-left .logo-icon.subheader {
    display: flex;
  }
}

/*# sourceMappingURL=floatingheader.css.map */
</style>

<script>
import "../globalSkinComponents.js";
import Headroom from "headroom.js";
import wvui from "@wikimedia/wvui";
export default {
  components: {
    WvuiTypeaheadSearch: wvui.WvuiTypeaheadSearch
  },
  data() {
    return {
      ulsKey: 0,
      hiddenSidebar: true,
      searchQuery: "",
      userMenuOpen: false,
      loggedIn: true,
      showStickySearch: false,
      userMenuFloating: false,
      tocTitle: "",
      headroom: {}
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

      console.log(event.target.closest(".floating-menu"));
      const closeFloatingUserMenu = event.target.closest(
        ".floating-menu, .header-right"
      );
      if (!closeFloatingUserMenu) {
        this.userMenuFloating = false;
        this.userMenuOpen = false;
      }
    },
    forceRerender() {
      this.ulsKey += 1;
    },
    toggleSidebar() {
      this.$data.hiddenSidebar = !this.$data.hiddenSidebar;
    },
    toggleUserMenu() {
      this.userMenuOpen = !this.userMenuOpen;
    },
    toggleLoggedIn() {
      this.loggedIn = !this.loggedIn;
      this.toggleUserMenu();
    },
    toggleUserMenuFloating() {
      this.userMenuFloating = !this.userMenuFloating;
    },
    clearSearchQuery() {
      setTimeout(() => {
        this.$data.searchQuery = "";
      }, 300);
    },
    contentUpdated() {
      this.tocTitle = "";
      const config = {
        rootMargin: "0px 0px 0px 0px"
      };
      const contentHeadings = this.$refs.content.$el.querySelectorAll("h2");
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.dataset.previousTop = entry.boundingClientRect.top;
          }

          if (entry.intersectionRatio < 1) {
            const reachedTop =
                entry.boundingClientRect.top < entry.intersectionRect.top,
              scrollingDown =
                entry.target.dataset.previousTop > entry.boundingClientRect.top;

            if (reachedTop && scrollingDown) {
              const headingText = entry.target.querySelector(".mw-headline")
                .textContent;
              this.tocTitle = headingText;
            }
            if (reachedTop && !scrollingDown) {
              const previousHeadingIndex = Array.prototype.indexOf.call(
                contentHeadings,
                entry.target
              );
              if (previousHeadingIndex - 1 > 0) {
                const headingText = contentHeadings
                  .item(previousHeadingIndex - 1)
                  .querySelector(".mw-headline").textContent;
                this.tocTitle = headingText;
              } else {
                this.tocTitle = "";
              }
            }
          }
        });
      }, config);
      contentHeadings.forEach(heading => observer.observe(heading));
    }
  },
  mounted: function() {
    this.headroom = new Headroom(this.$refs.header, {
      offset: 100
    });
    this.headroom.init();
    window.addEventListener("blur", () => {
      this.headroom.pin();
    });
  }
};
</script>
