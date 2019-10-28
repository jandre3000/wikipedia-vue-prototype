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
            <a href="/wiki/Main_Page">Read</a>
          </span>
        </li>
        <li id="ca-viewsource" class="collapsible">
          <span>
            <a
              href="https://en.wikipedia.org/w/index.php?title=Main_Page&amp;action=edit"
              title="This page is protected. You can view its source [ctrl-option-e]"
              accesskey="e"
              >View source
            </a>
          </span>
        </li>
        <li id="ca-history" class="collapsible">
          <span>
            <a
              href="https://en.wikipedia.org/w/index.php?title=Main_Page&amp;action=history"
              title="Past revisions of this page [ctrl-option-h]"
              accesskey="h"
              >View history
            </a>
          </span>
        </li>
      </ul>
    </div>
    <div
      id="p-cactions"
      role="navigation"
      class="vectorMenu emptyPortlet"
      aria-labelledby="p-cactions-label"
      style
    >
      <input
        type="checkbox"
        class="vectorMenuCheckbox webfonts-changed"
        aria-labelledby="p-cactions-label"
      />
      <h3 id="p-cactions-label">
        <span>More</span>
      </h3>
      <ul class="menu"></ul>
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
