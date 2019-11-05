<template>
  <div
    class="portal"
    role="navigation"
    id="p-navigation"
    aria-labelledby="p-navigation-label"
  >
    <h3 id="p-navigation-label">Navigation</h3>
    <div class="body">
      <ul>
        <li id="n-mainpage-description">
          <a
            href="/wiki/Main_Page"
            title="Visit the main page [ctrl-option-z]"
            accesskey="z"
            >{{ $store.state.site.i18n["mainpage-description"] }}</a
          >
        </li>
        <li id="n-contents">
          <a href="/wiki/Portal:Contents" title="Guides to browsing Wikipedia"
            >Contents</a
          >
        </li>
        <li id="n-featuredcontent">
          <a
            href="/wiki/Portal:Featured_content"
            title="Featured content – the best of Wikipedia"
            >Featured content</a
          >
        </li>
        <li id="n-currentevents">
          <a
            href="/wiki/Portal:Current_events"
            title="Find background information on current events"
            >{{ $store.state.site.i18n["currentevents"] }}</a
          >
        </li>
        <li id="n-randompage">
          <a
            href="/wiki/Special:Random"
            title="Load a random article [ctrl-option-x]"
            accesskey="x"
            >{{ $store.state.site.i18n["randompage"] }}</a
          >
        </li>
        <li id="n-sitesupport">
          <a
            href="https://donate.wikimedia.org/wiki/Special:FundraiserRedirector?utm_source=donate&amp;utm_medium=sidebar&amp;utm_campaign=C13_en.wikipedia.org&amp;uselang=en"
            title="Support us"
            >{{ $store.state.site.i18n["sitesupport"] }}</a
          >
        </li>
        <li id="n-shoplink">
          <a
            href="https://shop.wikimedia.org/"
            title="Visit the Wikipedia store"
            >Wikipedia store</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
