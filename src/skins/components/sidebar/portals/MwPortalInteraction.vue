<template>
  <div
    class="portal"
    role="navigation"
    id="p-interaction"
    aria-labelledby="p-interaction-label"
  >
    <h3 id="p-interaction-label">Interaction</h3>
    <div class="body">
      <ul>
        <li id="n-help">
          <a
            href="/wiki/Help:Contents"
            title="Guidance on how to use and edit Wikipedia"
            >{{ $store.state.site.i18n["help"] }}</a
          >
        </li>
        <li id="n-aboutsite">
          <a href="/wiki/Wikipedia:About" title="Find out about Wikipedia">{{
            $store.state.site.i18n["aboutsite"]
          }}</a>
        </li>
        <li id="n-portal">
          <a
            href="/wiki/Wikipedia:Community_portal"
            title="About the project, what you can do, where to find things"
            >{{ $store.state.site.i18n["portal"] }}</a
          >
        </li>
        <li id="n-recentchanges">
          <a
            href="/wiki/Special:RecentChanges"
            title="A list of recent changes in the wiki [ctrl-option-r]"
            accesskey="r"
            >{{ $store.state.site.i18n["recentchanges"] }}</a
          >
        </li>
        <li id="n-contactpage">
          <a
            href="/wiki/Wikipedia:Contact_us"
            title="How to contact Wikipedia"
            >{{ $store.state.site.i18n["contactpage"] }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
