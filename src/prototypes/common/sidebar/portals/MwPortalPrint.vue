<template>
  <div
    class="portal"
    role="navigation"
    id="p-coll-print_export"
    aria-labelledby="p-coll-print_export-label"
  >
    <h3 id="p-coll-print_export-label">
      {{ $store.state.site.i18n["coll-print_export"] }}
    </h3>
    <div class="body">
      <ul>
        <li id="coll-create_a_book">
          <a
            href="https://en.wikipedia.org/w/index.php?title=Special:Book&amp;bookcmd=book_creator&amp;referer=Main+Page"
            >{{ $store.state.site.i18n["coll-create_a_book"] }}</a
          >
        </li>
        <li id="coll-download-as-rl">
          <a
            href="https://en.wikipedia.org/w/index.php?title=Special:ElectronPdf&amp;page=Main+Page&amp;action=show-download-screen"
            >{{ $store.state.site.i18n["coll-download_as_pdf"] }}</a
          >
        </li>
        <li id="t-print">
          <a
            href="https://en.wikipedia.org/w/index.php?title=Main_Page&amp;printable=yes"
            title="Printable version of this page [ctrl-option-p]"
            accesskey="p"
            >{{ $store.state.site.i18n["coll-printable_version_pdf"] }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
