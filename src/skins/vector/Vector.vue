<style lang="less">
@import "./static/css_1.css";
@import "./static/css_2.css";
@import "./static/css_3.css";
@import "./static/css_4.css";
</style>

<template>
  <body
    @click="onClickContent"
    class="mediawiki ltr sitedir-ltr mw-hide-empty-elt ns-0 ns-subject rootpage-Main_Page skin-vector action-view webfonts-changed"
  >
    <div id="mw-page-base" class="noprint"></div>
    <div id="mw-head-base" class="noprint"></div>
    <div id="content" class="mw-body" role="main">
      <a id="top"></a>
      <div id="siteNotice" class="mw-body-content">
        <div id="centralNotice"></div>
        <!-- CentralNotice -->
      </div>
      <div class="mw-indicators mw-body-content"></div>
      <div id="bodyContent" class="mw-body-content">
        <!-- #####################################################
 __     ___   _ _____                   _             _
 \ \   / / | | | ____|   ___ ___  _ __ | |_ ___ _ __ | |_
  \ \ / /| | | |  _|    / __/ _ \| '_ \| __/ _ \ '_ \| __|
   \ V / | |_| | |___  | (_| (_) | | | | ||  __/ | | | |_
    \_/   \___/|_____|  \___\___/|_| |_|\__\___|_| |_|\__|
######################################################## -->
        <mw-core>Content goes here!!</mw-core>
      </div>
    </div>

    <div id="mw-navigation">
      <h2>Navigation menu</h2>
      <div id="mw-head">
        <div
          id="p-personal"
          role="navigation"
          aria-labelledby="p-personal-label"
        >
          <h3 id="p-personal-label">Personal tools</h3>
          <ul>
            <li id="pt-anonuserpage">Not logged in</li>
            <li id="pt-anontalk">
              <a
                href="https://en.wikipedia.org/wiki/Special:MyTalk"
                title="Discussion about edits from this IP address [ctrl-option-n]"
                accesskey="n"
                >Talk</a
              >
            </li>
            <li id="pt-anoncontribs">
              <a
                href="https://en.wikipedia.org/wiki/Special:MyContributions"
                title="A list of edits made from this IP address [ctrl-option-y]"
                accesskey="y"
                >Contributions</a
              >
            </li>
            <li id="pt-createaccount">
              <a
                href="https://en.wikipedia.org/w/index.php?title=Special:CreateAccount&amp;returnto=Main+Page"
                title="You are encouraged to create an account and log in; however, it is not mandatory"
                >Create account</a
              >
            </li>
            <li id="pt-login">
              <a
                href="https://en.wikipedia.org/w/index.php?title=Special:UserLogin&amp;returnto=Main+Page"
                title="You&#39;re encouraged to log in; however, it&#39;s not mandatory. [ctrl-option-o]"
                accesskey="o"
                >Log in</a
              >
            </li>
          </ul>
        </div>
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
                <span
                  ><a
                    href="/wiki/Main_Page"
                    title="View the content page [ctrl-option-c]"
                    accesskey="c"
                    >Main Page</a
                  ></span
                >
              </li>
              <li id="ca-talk">
                <span
                  ><a
                    href="/Talk:Main_Page"
                    rel="discussion"
                    title="Discussion about the content page [ctrl-option-t]"
                    accesskey="t"
                    >Talk</a
                  ></span
                >
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
                <span><a href="/wiki/Main_Page">Read</a></span>
              </li>
              <li id="ca-viewsource" class="collapsible">
                <span
                  ><a
                    href="https://en.wikipedia.org/w/index.php?title=Main_Page&amp;action=edit"
                    title="This page is protected.
You can view its source [ctrl-option-e]"
                    accesskey="e"
                    >View source</a
                  ></span
                >
              </li>
              <li id="ca-history" class="collapsible">
                <span
                  ><a
                    href="https://en.wikipedia.org/w/index.php?title=Main_Page&amp;action=history"
                    title="Past revisions of this page [ctrl-option-h]"
                    accesskey="h"
                    >View history</a
                  ></span
                >
              </li>
            </ul>
          </div>
          <div
            id="p-cactions"
            role="navigation"
            class="vectorMenu emptyPortlet"
            aria-labelledby="p-cactions-label"
            style=""
          >
            <input
              type="checkbox"
              class="vectorMenuCheckbox webfonts-changed"
              aria-labelledby="p-cactions-label"
            />
            <h3 id="p-cactions-label"><span>More</span></h3>
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
                /><input
                  type="hidden"
                  value="Special:Search"
                  name="title"
                  class="webfonts-changed"
                /><input
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
      </div>
      <div id="mw-panel">
        <div id="p-logo" role="banner">
          <a
            class="mw-wiki-logo"
            href="/wiki/Main_Page"
            title="Visit the main page"
          ></a>
        </div>
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
                  >Main page</a
                >
              </li>
              <li id="n-contents">
                <a
                  href="/wiki/Portal:Contents"
                  title="Guides to browsing Wikipedia"
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
                  >Current events</a
                >
              </li>
              <li id="n-randompage">
                <a
                  href="/wiki/Special:Random"
                  title="Load a random article [ctrl-option-x]"
                  accesskey="x"
                  >Random article</a
                >
              </li>
              <li id="n-sitesupport">
                <a
                  href="https://donate.wikimedia.org/wiki/Special:FundraiserRedirector?utm_source=donate&amp;utm_medium=sidebar&amp;utm_campaign=C13_en.wikipedia.org&amp;uselang=en"
                  title="Support us"
                  >Donate to Wikipedia</a
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
                  >Help</a
                >
              </li>
              <li id="n-aboutsite">
                <a href="/wiki/Wikipedia:About" title="Find out about Wikipedia"
                  >About Wikipedia</a
                >
              </li>
              <li id="n-portal">
                <a
                  href="/wiki/Wikipedia:Community_portal"
                  title="About the project, what you can do, where to find things"
                  >Community portal</a
                >
              </li>
              <li id="n-recentchanges">
                <a
                  href="/wiki/Special:RecentChanges"
                  title="A list of recent changes in the wiki [ctrl-option-r]"
                  accesskey="r"
                  >Recent changes</a
                >
              </li>
              <li id="n-contactpage">
                <a
                  href="/wiki/Wikipedia:Contact_us"
                  title="How to contact Wikipedia"
                  >Contact page</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="portal"
          role="navigation"
          id="p-tb"
          aria-labelledby="p-tb-label"
        >
          <h3 id="p-tb-label">Tools</h3>
          <div class="body">
            <ul>
              <li id="t-whatlinkshere">
                <a
                  href="/wiki/Special:WhatLinksHere/Main_Page"
                  title="List of all English Wikipedia pages containing links to this page [ctrl-option-j]"
                  accesskey="j"
                  >What links here</a
                >
              </li>
              <li id="t-recentchangeslinked">
                <a
                  href="/wiki/Special:RecentChangesLinked/Main_Page"
                  rel="nofollow"
                  title="Recent changes in pages linked from this page [ctrl-option-k]"
                  accesskey="k"
                  >Related changes</a
                >
              </li>
              <li id="t-upload">
                <a
                  href="/wiki/Wikipedia:File_Upload_Wizard"
                  title="Upload files [ctrl-option-u]"
                  accesskey="u"
                  >Upload file</a
                >
              </li>
              <li id="t-specialpages">
                <a
                  href="/wiki/Special:SpecialPages"
                  title="A list of all special pages [ctrl-option-q]"
                  accesskey="q"
                  >Special pages</a
                >
              </li>
              <li id="t-permalink">
                <a
                  href="https://en.wikipedia.org/w/index.php?title=Main_Page&amp;oldid=889268954"
                  title="Permanent link to this revision of the page"
                  >Permanent link</a
                >
              </li>
              <li id="t-info">
                <a
                  href="https://en.wikipedia.org/w/index.php?title=Main_Page&amp;action=info"
                  title="More information about this page"
                  >Page information</a
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
        <div
          class="portal"
          role="navigation"
          id="p-wikibase-otherprojects"
          aria-labelledby="p-wikibase-otherprojects-label"
        >
          <h3 id="p-wikibase-otherprojects-label">In other projects</h3>
          <div class="body">
            <ul>
              <li class="wb-otherproject-link wb-otherproject-commons">
                <a
                  href="https://commons.wikimedia.org/wiki/Main_Page"
                  hreflang="en"
                  >Wikimedia Commons</a
                >
              </li>
              <li class="wb-otherproject-link wb-otherproject-mediawiki">
                <a href="https://www.mediawiki.org/wiki/MediaWiki" hreflang="en"
                  >MediaWiki</a
                >
              </li>
              <li class="wb-otherproject-link wb-otherproject-meta">
                <a
                  href="https://meta.wikimedia.org/wiki/Main_Page"
                  hreflang="en"
                  >Meta-Wiki</a
                >
              </li>
              <li class="wb-otherproject-link wb-otherproject-species">
                <a
                  href="https://species.wikimedia.org/wiki/Main_Page"
                  hreflang="en"
                  >Wikispecies</a
                >
              </li>
              <li class="wb-otherproject-link wb-otherproject-wikibooks">
                <a href="https://en.wikibooks.org/wiki/Main_Page" hreflang="en"
                  >Wikibooks</a
                >
              </li>
              <li class="wb-otherproject-link wb-otherproject-wikidata">
                <a
                  href="https://www.wikidata.org/wiki/Wikidata:Main_Page"
                  hreflang="en"
                  >Wikidata</a
                >
              </li>
              <li class="wb-otherproject-link wb-otherproject-wikimania">
                <a
                  href="https://wikimania.wikimedia.org/wiki/Wikimania"
                  hreflang="en"
                  >Wikimania</a
                >
              </li>
              <li class="wb-otherproject-link wb-otherproject-wikinews">
                <a href="https://en.wikinews.org/wiki/Main_Page" hreflang="en"
                  >Wikinews</a
                >
              </li>
              <li class="wb-otherproject-link wb-otherproject-wikiquote">
                <a href="https://en.wikiquote.org/wiki/Main_Page" hreflang="en"
                  >Wikiquote</a
                >
              </li>
              <li class="wb-otherproject-link wb-otherproject-wikisource">
                <a href="https://en.wikisource.org/wiki/Main_Page" hreflang="en"
                  >Wikisource</a
                >
              </li>
              <li class="wb-otherproject-link wb-otherproject-wikiversity">
                <a
                  href="https://en.wikiversity.org/wiki/Wikiversity:Main_Page"
                  hreflang="en"
                  >Wikiversity</a
                >
              </li>
              <li class="wb-otherproject-link wb-otherproject-wikivoyage">
                <a href="https://en.wikivoyage.org/wiki/Main_Page" hreflang="en"
                  >Wikivoyage</a
                >
              </li>
              <li class="wb-otherproject-link wb-otherproject-wiktionary">
                <a
                  href="https://en.wiktionary.org/wiki/Wiktionary:Main_Page"
                  hreflang="en"
                  >Wiktionary</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="portal"
          role="navigation"
          id="p-coll-print_export"
          aria-labelledby="p-coll-print_export-label"
        >
          <h3 id="p-coll-print_export-label">Print/export</h3>
          <div class="body">
            <ul>
              <li id="coll-create_a_book">
                <a
                  href="https://en.wikipedia.org/w/index.php?title=Special:Book&amp;bookcmd=book_creator&amp;referer=Main+Page"
                  >Create a book</a
                >
              </li>
              <li id="coll-download-as-rl">
                <a
                  href="https://en.wikipedia.org/w/index.php?title=Special:ElectronPdf&amp;page=Main+Page&amp;action=show-download-screen"
                  >Download as PDF</a
                >
              </li>
              <li id="t-print">
                <a
                  href="https://en.wikipedia.org/w/index.php?title=Main_Page&amp;printable=yes"
                  title="Printable version of this page [ctrl-option-p]"
                  accesskey="p"
                  >Printable version</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="portal"
          role="navigation"
          id="p-lang"
          aria-labelledby="p-lang-label"
        >
          <button
            class="uls-settings-trigger webfonts-changed"
            title="Language settings"
          ></button>
          <h3 id="p-lang-label">Languages</h3>
          <div class="body">
            <ul>
              <li class="interlanguage-link interwiki-ar">
                <a
                  href="https://ar.wikipedia.org/wiki/"
                  title="Arabic"
                  lang="ar"
                  hreflang="ar"
                  class="interlanguage-link-target"
                  >العربية</a
                >
              </li>
              <li class="interlanguage-link interwiki-bg">
                <a
                  href="https://bg.wikipedia.org/wiki/"
                  title="Bulgarian"
                  lang="bg"
                  hreflang="bg"
                  class="interlanguage-link-target"
                  >Български</a
                >
              </li>
              <li class="interlanguage-link interwiki-bs">
                <a
                  href="https://bs.wikipedia.org/wiki/"
                  title="Bosnian"
                  lang="bs"
                  hreflang="bs"
                  class="interlanguage-link-target"
                  >Bosanski</a
                >
              </li>
              <li class="interlanguage-link interwiki-ca">
                <a
                  href="https://ca.wikipedia.org/wiki/"
                  title="Catalan"
                  lang="ca"
                  hreflang="ca"
                  class="interlanguage-link-target"
                  >Català</a
                >
              </li>
              <li class="interlanguage-link interwiki-cs">
                <a
                  href="https://cs.wikipedia.org/wiki/"
                  title="Czech"
                  lang="cs"
                  hreflang="cs"
                  class="interlanguage-link-target"
                  >Čeština</a
                >
              </li>
              <li class="interlanguage-link interwiki-da">
                <a
                  href="https://da.wikipedia.org/wiki/"
                  title="Danish"
                  lang="da"
                  hreflang="da"
                  class="interlanguage-link-target"
                  >Dansk</a
                >
              </li>
              <li class="interlanguage-link interwiki-de">
                <a
                  href="https://de.wikipedia.org/wiki/"
                  title="German"
                  lang="de"
                  hreflang="de"
                  class="interlanguage-link-target"
                  >Deutsch</a
                >
              </li>
              <li class="interlanguage-link interwiki-et">
                <a
                  href="https://et.wikipedia.org/wiki/"
                  title="Estonian"
                  lang="et"
                  hreflang="et"
                  class="interlanguage-link-target"
                  >Eesti</a
                >
              </li>
              <li class="interlanguage-link interwiki-el">
                <a
                  href="https://el.wikipedia.org/wiki/"
                  title="Greek"
                  lang="el"
                  hreflang="el"
                  class="interlanguage-link-target"
                  >Ελληνικά</a
                >
              </li>
              <li class="interlanguage-link interwiki-es">
                <a
                  href="https://es.wikipedia.org/wiki/"
                  title="Spanish"
                  lang="es"
                  hreflang="es"
                  class="interlanguage-link-target"
                  >Español</a
                >
              </li>
              <li class="interlanguage-link interwiki-eo">
                <a
                  href="https://eo.wikipedia.org/wiki/"
                  title="Esperanto"
                  lang="eo"
                  hreflang="eo"
                  class="interlanguage-link-target"
                  >Esperanto</a
                >
              </li>
              <li class="interlanguage-link interwiki-eu">
                <a
                  href="https://eu.wikipedia.org/wiki/"
                  title="Basque"
                  lang="eu"
                  hreflang="eu"
                  class="interlanguage-link-target"
                  >Euskara</a
                >
              </li>
              <li class="interlanguage-link interwiki-fa">
                <a
                  href="https://fa.wikipedia.org/wiki/"
                  title="Persian"
                  lang="fa"
                  hreflang="fa"
                  class="interlanguage-link-target"
                  >فارسی</a
                >
              </li>
              <li class="interlanguage-link interwiki-fr">
                <a
                  href="https://fr.wikipedia.org/wiki/"
                  title="French"
                  lang="fr"
                  hreflang="fr"
                  class="interlanguage-link-target"
                  >Français</a
                >
              </li>
              <li class="interlanguage-link interwiki-gl">
                <a
                  href="https://gl.wikipedia.org/wiki/"
                  title="Galician"
                  lang="gl"
                  hreflang="gl"
                  class="interlanguage-link-target"
                  >Galego</a
                >
              </li>
              <li class="interlanguage-link interwiki-ko">
                <a
                  href="https://ko.wikipedia.org/wiki/"
                  title="Korean"
                  lang="ko"
                  hreflang="ko"
                  class="interlanguage-link-target"
                  >한국어</a
                >
              </li>
              <li class="interlanguage-link interwiki-hr">
                <a
                  href="https://hr.wikipedia.org/wiki/"
                  title="Croatian"
                  lang="hr"
                  hreflang="hr"
                  class="interlanguage-link-target"
                  >Hrvatski</a
                >
              </li>
              <li class="interlanguage-link interwiki-id">
                <a
                  href="https://id.wikipedia.org/wiki/"
                  title="Indonesian"
                  lang="id"
                  hreflang="id"
                  class="interlanguage-link-target"
                  >Bahasa Indonesia</a
                >
              </li>
              <li class="interlanguage-link interwiki-it">
                <a
                  href="https://it.wikipedia.org/wiki/"
                  title="Italian"
                  lang="it"
                  hreflang="it"
                  class="interlanguage-link-target"
                  >Italiano</a
                >
              </li>
              <li class="interlanguage-link interwiki-he">
                <a
                  href="https://he.wikipedia.org/wiki/"
                  title="Hebrew"
                  lang="he"
                  hreflang="he"
                  class="interlanguage-link-target"
                  >עברית</a
                >
              </li>
              <li class="interlanguage-link interwiki-ka">
                <a
                  href="https://ka.wikipedia.org/wiki/"
                  title="Georgian"
                  lang="ka"
                  hreflang="ka"
                  class="interlanguage-link-target"
                  >ქართული</a
                >
              </li>
              <li class="interlanguage-link interwiki-lv">
                <a
                  href="https://lv.wikipedia.org/wiki/"
                  title="Latvian"
                  lang="lv"
                  hreflang="lv"
                  class="interlanguage-link-target"
                  >Latviešu</a
                >
              </li>
              <li class="interlanguage-link interwiki-lt">
                <a
                  href="https://lt.wikipedia.org/wiki/"
                  title="Lithuanian"
                  lang="lt"
                  hreflang="lt"
                  class="interlanguage-link-target"
                  >Lietuvių</a
                >
              </li>
              <li class="interlanguage-link interwiki-hu">
                <a
                  href="https://hu.wikipedia.org/wiki/"
                  title="Hungarian"
                  lang="hu"
                  hreflang="hu"
                  class="interlanguage-link-target"
                  >Magyar</a
                >
              </li>
              <li class="interlanguage-link interwiki-ms">
                <a
                  href="https://ms.wikipedia.org/wiki/"
                  title="Malay"
                  lang="ms"
                  hreflang="ms"
                  class="interlanguage-link-target"
                  >Bahasa Melayu</a
                >
              </li>
              <li class="interlanguage-link interwiki-nl">
                <a
                  href="https://nl.wikipedia.org/wiki/"
                  title="Dutch"
                  lang="nl"
                  hreflang="nl"
                  class="interlanguage-link-target"
                  >Nederlands</a
                >
              </li>
              <li class="interlanguage-link interwiki-ja">
                <a
                  href="https://ja.wikipedia.org/wiki/"
                  title="Japanese"
                  lang="ja"
                  hreflang="ja"
                  class="interlanguage-link-target"
                  >日本語</a
                >
              </li>
              <li class="interlanguage-link interwiki-no">
                <a
                  href="https://no.wikipedia.org/wiki/"
                  title="Norwegian"
                  lang="no"
                  hreflang="no"
                  class="interlanguage-link-target"
                  >Norsk</a
                >
              </li>
              <li class="interlanguage-link interwiki-nn">
                <a
                  href="https://nn.wikipedia.org/wiki/"
                  title="Norwegian Nynorsk"
                  lang="nn"
                  hreflang="nn"
                  class="interlanguage-link-target"
                  >Norsk nynorsk</a
                >
              </li>
              <li class="interlanguage-link interwiki-pl">
                <a
                  href="https://pl.wikipedia.org/wiki/"
                  title="Polish"
                  lang="pl"
                  hreflang="pl"
                  class="interlanguage-link-target"
                  >Polski</a
                >
              </li>
              <li class="interlanguage-link interwiki-pt">
                <a
                  href="https://pt.wikipedia.org/wiki/"
                  title="Portuguese"
                  lang="pt"
                  hreflang="pt"
                  class="interlanguage-link-target"
                  >Português</a
                >
              </li>
              <li class="interlanguage-link interwiki-ro">
                <a
                  href="https://ro.wikipedia.org/wiki/"
                  title="Romanian"
                  lang="ro"
                  hreflang="ro"
                  class="interlanguage-link-target"
                  >Română</a
                >
              </li>
              <li class="interlanguage-link interwiki-ru">
                <a
                  href="https://ru.wikipedia.org/wiki/"
                  title="Russian"
                  lang="ru"
                  hreflang="ru"
                  class="interlanguage-link-target"
                  >Русский</a
                >
              </li>
              <li class="interlanguage-link interwiki-simple">
                <a
                  href="https://simple.wikipedia.org/wiki/"
                  title="Simple English"
                  lang="en-simple"
                  hreflang="en-simple"
                  class="interlanguage-link-target"
                  >Simple English</a
                >
              </li>
              <li class="interlanguage-link interwiki-sk">
                <a
                  href="https://sk.wikipedia.org/wiki/"
                  title="Slovak"
                  lang="sk"
                  hreflang="sk"
                  class="interlanguage-link-target"
                  >Slovenčina</a
                >
              </li>
              <li class="interlanguage-link interwiki-sl">
                <a
                  href="https://sl.wikipedia.org/wiki/"
                  title="Slovenian"
                  lang="sl"
                  hreflang="sl"
                  class="interlanguage-link-target"
                  >Slovenščina</a
                >
              </li>
              <li class="interlanguage-link interwiki-sr">
                <a
                  href="https://sr.wikipedia.org/wiki/"
                  title="Serbian"
                  lang="sr"
                  hreflang="sr"
                  class="interlanguage-link-target"
                  >Српски / srpski</a
                >
              </li>
              <li class="interlanguage-link interwiki-sh">
                <a
                  href="https://sh.wikipedia.org/wiki/"
                  title="Serbo-Croatian"
                  lang="sh"
                  hreflang="sh"
                  class="interlanguage-link-target"
                  >Srpskohrvatski / српскохрватски</a
                >
              </li>
              <li class="interlanguage-link interwiki-fi">
                <a
                  href="https://fi.wikipedia.org/wiki/"
                  title="Finnish"
                  lang="fi"
                  hreflang="fi"
                  class="interlanguage-link-target"
                  >Suomi</a
                >
              </li>
              <li class="interlanguage-link interwiki-sv">
                <a
                  href="https://sv.wikipedia.org/wiki/"
                  title="Swedish"
                  lang="sv"
                  hreflang="sv"
                  class="interlanguage-link-target"
                  >Svenska</a
                >
              </li>
              <li class="interlanguage-link interwiki-th">
                <a
                  href="https://th.wikipedia.org/wiki/"
                  title="Thai"
                  lang="th"
                  hreflang="th"
                  class="interlanguage-link-target"
                  >ไทย</a
                >
              </li>
              <li class="interlanguage-link interwiki-tr">
                <a
                  href="https://tr.wikipedia.org/wiki/"
                  title="Turkish"
                  lang="tr"
                  hreflang="tr"
                  class="interlanguage-link-target"
                  >Türkçe</a
                >
              </li>
              <li class="interlanguage-link interwiki-uk">
                <a
                  href="https://uk.wikipedia.org/wiki/"
                  title="Ukrainian"
                  lang="uk"
                  hreflang="uk"
                  class="interlanguage-link-target"
                  >Українська</a
                >
              </li>
              <li class="interlanguage-link interwiki-vi">
                <a
                  href="https://vi.wikipedia.org/wiki/"
                  title="Vietnamese"
                  lang="vi"
                  hreflang="vi"
                  class="interlanguage-link-target"
                  >Tiếng Việt</a
                >
              </li>
              <li class="interlanguage-link interwiki-zh">
                <a
                  href="https://zh.wikipedia.org/wiki/"
                  title="Chinese"
                  lang="zh"
                  hreflang="zh"
                  class="interlanguage-link-target"
                  >中文</a
                >
              </li>
              <li id="interwiki-completelist">
                <a
                  href="https://meta.wikimedia.org/wiki/List_of_Wikipedias"
                  title="Complete list of Wikipedias"
                  >Complete list</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="footer" role="contentinfo">
      <ul id="footer-info">
        <li id="footer-info-lastmod">
          This page was last edited on 24 March 2019, at 16:37<span
            class="anonymous-show"
            >&nbsp;(UTC)</span
          >.
        </li>
        <li id="footer-info-copyright">
          Text is available under the
          <a
            rel="license"
            href="https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License"
            >Creative Commons Attribution-ShareAlike License</a
          ><a
            rel="license"
            href="https://creativecommons.org/licenses/by-sa/3.0/"
            style="display:none;"
          ></a
          >; additional terms may apply. By using this site, you agree to the
          <a href="https://foundation.wikimedia.org/wiki/Terms_of_Use"
            >Terms of Use</a
          >
          and
          <a href="https://foundation.wikimedia.org/wiki/Privacy_policy"
            >Privacy Policy</a
          >. Wikipedia® is a registered trademark of the
          <a href="https://www.wikimediafoundation.org/"
            >Wikimedia Foundation, Inc.</a
          >, a non-profit organization.
        </li>
      </ul>
      <ul id="footer-places">
        <li id="footer-places-privacy">
          <a
            href="https://foundation.wikimedia.org/wiki/Privacy_policy"
            class="extiw"
            title="wmf:Privacy policy"
            >Privacy policy</a
          >
        </li>
        <li id="footer-places-about">
          <a
            href="https://en.wikipedia.org/wiki/Wikipedia:About"
            title="Wikipedia:About"
            >About Wikipedia</a
          >
        </li>
        <li id="footer-places-disclaimer">
          <a
            href="https://en.wikipedia.org/wiki/Wikipedia:General_disclaimer"
            title="Wikipedia:General disclaimer"
            >Disclaimers</a
          >
        </li>
        <li id="footer-places-contact">
          <a href="https://en.wikipedia.org/wiki/Wikipedia:Contact_us"
            >Contact Wikipedia</a
          >
        </li>
        <li id="footer-places-developers">
          <a
            href="https://www.mediawiki.org/wiki/Special:MyLanguage/How_to_contribute"
            >Developers</a
          >
        </li>
        <li id="footer-places-cookiestatement">
          <a href="https://foundation.wikimedia.org/wiki/Cookie_statement"
            >Cookie statement</a
          >
        </li>
        <li id="footer-places-mobileview">
          <a
            href="https://en.m.wikipedia.org/w/index.php?title=Main_Page&amp;mobileaction=toggle_view_mobile"
            class="noprint stopMobileRedirectToggle"
            >Mobile view</a
          >
        </li>
        <li style="display: none;">
          <a href="https://en.wikipedia.org/wiki/Main_Page#">Enable previews</a>
        </li>
      </ul>
      <div style="clear: both;"></div>
    </div>

    <div class="suggestions" style="display: none; font-size: 13px;">
      <div class="suggestions-results"></div>
      <div class="suggestions-special"></div>
    </div>

    <div id="mwe-popups-svg">
      <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
        <defs>
          <clippath id="mwe-popups-mask" transform="matrix(1 0 0 1 0 0)">
            <path d="M0 8h10l8-8 8 8h974v992H0z"></path>
          </clippath>
          <clippath id="mwe-popups-mask-flip">
            <path d="M0 8h294l8-8 8 8h690v992H0z"></path>
          </clippath>
          <clippath id="mwe-popups-landscape-mask">
            <path d="M0 8h174l8-8 8 8h810v992H0z"></path>
          </clippath>
          <clippath id="mwe-popups-landscape-mask-flip">
            <path d="M0 0h1000v242H190l-8 8-8-8H0z"></path>
          </clippath>
        </defs>
      </svg>
    </div>
  </body>
</template>

<script>
import Core from "@/core/Core.vue";

export default {
  components: {
    "mw-core": Core
  },
  methods: {
    onClickContent(event) {
      const nodeName = event.target.nodeName,
        href = event.target.getAttribute("href"),
        currentRouteLanguage = this.$router.currentRoute.meta.language;
      if (nodeName == "A" && /\/wiki\//.test(href)) {
        event.stopPropagation();
        event.preventDefault();
        this.$router.push(`/${currentRouteLanguage}${href}`);
      }
    }
  }
};
</script>
