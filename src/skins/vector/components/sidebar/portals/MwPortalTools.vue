<template>
  <div class="portal" role="navigation" id="p-tb" aria-labelledby="p-tb-label">
    <h3 id="p-tb-label">Tools</h3>
    <div class="body">
      <ul>
        <li id="t-whatlinkshere">
          <a
            href="/wiki/Special:WhatLinksHere/Main_Page"
            title="List of all English Wikipedia pages containing links to this page [ctrl-option-j]"
            accesskey="j"
            >{{ $store.state.site.i18n["whatlinkshere"] }}</a
          >
        </li>
        <li id="t-recentchangeslinked">
          <a
            href="/wiki/Special:RecentChangesLinked/Main_Page"
            rel="nofollow"
            title="Recent changes in pages linked from this page [ctrl-option-k]"
            accesskey="k"
            >{{ $store.state.site.i18n["recentchangeslinked-toolbox"] }}</a
          >
        </li>
        <li id="t-upload">
          <a
            href="/wiki/Wikipedia:File_Upload_Wizard"
            title="Upload files [ctrl-option-u]"
            accesskey="u"
            >{{ $store.state.site.i18n["upload"] }}</a
          >
        </li>
        <li id="t-specialpages">
          <a
            href="/wiki/Special:SpecialPages"
            title="A list of all special pages [ctrl-option-q]"
            accesskey="q"
            >{{ $store.state.site.i18n["specialpages"] }}</a
          >
        </li>
        <li id="t-permalink">
          <a
            href="https://en.wikipedia.org/w/index.php?title=Main_Page&amp;oldid=889268954"
            title="Permanent link to this revision of the page"
            >{{ $store.state.site.i18n["permalink"] }}</a
          >
        </li>
        <li id="t-info">
          <a
            href="https://en.wikipedia.org/w/index.php?title=Main_Page&amp;action=info"
            title="More information about this page"
            >{{ $store.state.site.i18n["pageinfo-toolboxlink"] }}</a
          >
        </li>
        <li id="t-wikibase">
          <a
            href="https://www.wikidata.org/wiki/Special:EntityPage/Q5296"
            title="Link to connected data repository item [ctrl-option-g]"
            accesskey="g"
            >Wikidata item</a
          >
        </li>
        <li id="t-cite">
          <a
            href="https://en.wikipedia.org/w/index.php?title=Special:CiteThisPage&amp;page=Main_Page&amp;id=889268954"
            title="Information on how to cite this page"
            >Cite this page</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
