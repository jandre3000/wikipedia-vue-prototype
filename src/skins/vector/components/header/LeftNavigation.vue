<template>
  <div id="left-navigation">
    <div
      id="p-namespaces"
      role="navigation"
      class="vectorTabs"
      aria-labelledby="p-namespaces-label"
    >
      <h3 id="p-namespaces-label">Namespaces</h3>
      <ul>
        <li id="ca-nstab-main" class="selected">
          <span>
            <a
              href="/wiki/Main_Page"
              title="View the content page [ctrl-option-c]"
              accesskey="c"
              >Main Page</a
            >
          </span>
        </li>
        <li id="ca-talk">
          <span>
            <a
              href="/Talk:Main_Page"
              rel="discussion"
              title="Discussion about the content page [ctrl-option-t]"
              accesskey="t"
              >Talk</a
            >
          </span>
        </li>
      </ul>
    </div>
    <div
      id="p-variants"
      role="navigation"
      class="vectorMenu emptyPortlet"
      aria-labelledby="p-variants-label"
    >
      <input
        type="checkbox"
        class="vectorMenuCheckbox webfonts-changed"
        aria-labelledby="p-variants-label"
      />
      <h3 id="p-variants-label">
        <span>Variants</span>
      </h3>
      <ul class="menu"></ul>
    </div>
  </div>
</template>
