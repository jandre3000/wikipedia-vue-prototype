<template>
  <div id="right-navigation">
    <div
      id="p-views"
      role="navigation"
      class="vectorTabs"
      aria-labelledby="p-views-label"
    >
      <h3 id="p-views-label">Views</h3>
      <ul>
        <li id="ca-view" class="collapsible selected">
          <span>
            <a href="/wiki/Main_Page">{{
              $store.state.site.i18n["vector-view-view"]
            }}</a>
          </span>
        </li>
        <li id="ca-viewsource" class="collapsible">
          <span>
            <a
              href="/w/index.php?title=Main_Page&amp;action=edit"
              title="This page is protected. You can view its source [ctrl-option-e]"
              accesskey="e"
              >{{ $store.state.site.i18n["vector-view-viewsource"] }}
            </a>
          </span>
        </li>
        <li id="ca-history" class="collapsible">
          <span>
            <a
              href="/w/index.php?title=Main_Page&amp;action=history"
              title="Past revisions of this page [ctrl-option-h]"
              accesskey="h"
              >{{ $store.state.site.i18n["vector-view-history"] }}
            </a>
          </span>
        </li>

        <li
          id="ca-watch"
          class="collapsible icon mw-watchlink"
          v-if="$store.state.user.loggedIn"
        >
          <a
            href="/w/index.php?title=Jackie_Shroff&amp;action=watch"
            data-mw="interface"
            title="Add this page to your watchlist [ctrl-option-w]"
            accesskey="w"
          >
            Watch
          </a>
        </li>
      </ul>
    </div>
    <div
      id="p-cactions"
      role="navigation"
      class="vectorMenu"
      aria-labelledby="p-cactions-label"
      v-if="$store.state.user.loggedIn"
    >
      <input
        type="checkbox"
        class="vectorMenuCheckbox"
        aria-labelledby="p-cactions-label"
      />
      <h3 id="p-cactions-label">
        <span>{{ $store.state.site.i18n["vector-more-actions"] }}</span>
      </h3>
      <ul class="menu">
        <li id="ca-move">
          <a
            href="/wiki/Special:MovePage/Jackie_Shroff"
            title="Rename this page [ctrl-option-m]"
            accesskey="m"
          >
            {{ $store.state.site.i18n["vector-action-move"] }}
          </a>
        </li>
      </ul>
    </div>
    <div id="p-search" role="search">
      <h3>
        <label for="searchInput">Search</label>
      </h3>
      <form action="https://en.wikipedia.org/w/index.php" id="searchform">
        <div id="simpleSearch">
          <input
            type="search"
            name="search"
            placeholder="Search Wikipedia"
            title="Search Wikipedia [ctrl-option-f]"
            accesskey="f"
            id="searchInput"
            tabindex="1"
            autocomplete="off"
            class="webfonts-changed"
          />
          <input
            type="hidden"
            value="Special:Search"
            name="title"
            class="webfonts-changed"
          />
          <input
            type="submit"
            name="go"
            value="Go"
            title="Go to a page with this exact name if it exists"
            id="searchButton"
            class="searchButton webfonts-changed"
          />
        </div>
      </form>
    </div>
  </div>
</template>
