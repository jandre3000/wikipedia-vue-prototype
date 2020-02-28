<template>
  <div id="uls">
    <div id="uls-button">
      <mw-button v-bind:class="{ 'mw-ui-quiet': subtle }">
        <span class="language-icon"></span>
        <span class="language-label">
          {{ languagesLength }}
          {{ $store.state.site.i18n["uls-plang-title-languages"] }}
        </span>
        <span class="down-icon"></span>
      </mw-button>
    </div>
    <div id="uls-picker"></div>
  </div>
</template>

<style>
#uls ul {
  list-style-image: none;
}

#uls {
  position: relative;
}

#uls-button {
  position: relative;
  /*top: -8px;*/
}

.uls-menu {
  left: auto !important;
  right: 0;
}

html[dir="rtl"] .uls-menu {
  left: 0 !important;
  right: auto !important;
}

.grid .columns {
  float: left;
}

.uls-language-block > ul > li {
  text-align: left;
}

.uls-medium {
  min-width: 480px;
}

.language-icon,
.down-icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  background-image: url("../static/images/languages.svg");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}

.down-icon {
  background-image: url("../static/images/down.svg");
  width: 12px;
  height: 12px;
}

.language-label {
  display: inline-block;
  margin: 0 12px;
  white-space: nowrap;
}

.row.uls-search {
  background-image: url("../static/images/settings.svg");
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: 95% center;
}

.uls-filtersuggestion {
  background-color: transparent;
}
</style>
<script>
import "jquery.uls/src/jquery.uls.data";
import "jquery.uls/src/jquery.uls.data.utils";
import "jquery.uls/src/jquery.uls.core";
import "jquery.uls/src/jquery.uls.lcd";
import "jquery.uls/src/jquery.uls.languagefilter";

// eslint-disable-next-line
import languagedata from "@wikimedia/language-data";

import "jquery.uls/css/jquery.uls.css";
import "jquery.uls/css/jquery.uls.grid.css";
import "jquery.uls/css/jquery.uls.lcd.css";
import "jquery.uls/css/jquery.uls.mobile.css";

// eslint-disable-next-line
$.fn.uls.Constructor.prototype.show = function() {
  var widthClasses = {
    wide: "uls-wide",
    medium: "uls-medium",
    narrow: "uls-narrow"
  };

  this.$menu.addClass(widthClasses[this.menuWidth]);

  if (!this.initialized) {
    // eslint-disable-next-line
	$( '#uls' ).prepend( this.$menu );
    this.initialized = true;
  }

  this.$menu.css(this.position());
  this.$menu.show();
  this.$menu.scrollIntoView();
  this.shown = true;

  if (!this.isMobile()) {
    this.$languageFilter.focus();
  }
  this.visible();
};

export default {
  props: ["subtle"],
  computed: {
    languages() {
      return this.$store.state.article.languageLinks.reduce(
        (langs, langLink) => {
          // eslint-disable-next-line
          langs[langLink.lang] = $.uls.data.getAutonym(langLink.lang);
          return langs;
        },
        {}
      );
    },
    languagesLength() {
      const languageLength = Object.keys(this.languages).length || 0;
      try {
        console.log(this.$store.state.site.language);
        console.log(
          languageLength.toLocaleString(this.$store.state.site.language)
        );
        return languageLength.toLocaleString(this.$store.state.site.language);
      } catch {
        return languageLength;
      }
    },
    i18n() {
      return this.$store.state.site.i18n;
    }
  },
  methods: {
    languageSelected(lang) {
      const langLink = this.$store.state.article.languageLinks.find(
        l => l.lang === lang
      );
      this.$router.push({
        name: `${langLink.lang}wiki`,
        params: { title: langLink.titles.canonical }
      });
    },
    translateUI() {
      this.$el.querySelectorAll("[data-i18n]").forEach(i18nEl => {
        const i18nTextContent =
          this.i18n[i18nEl.dataset.i18n] || i18nEl.textContent;
        i18nEl.textContent = i18nTextContent;
      });
    }
  },
  mounted() {
    // eslint-disable-next-line
      $(this.$el).uls({
      left: 0,
      top: "100%",
      menuWidth: "large",
      languages: this.languages,
      onSelect: this.languageSelected.bind(this),
      onVisible: this.translateUI
    });
  }
};
</script>
