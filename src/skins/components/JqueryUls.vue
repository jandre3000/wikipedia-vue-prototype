<template>
  <div id="uls">
    <div id="uls-button">
      <mw-button>
        <span class="language-icon"></span>
        <span>
          {{ Object.keys(this.languages).length }}
          {{ $store.state.site.i18n["uls-plang-title-languages"] }}
        </span>
        <span class="down-icon"></span>
      </mw-button>
    </div>
    <div id="uls-picker"></div>
  </div>
</template>

<style>
html[dir="ltr"] #uls ul {
  list-style-image: none;
}

#uls {
  position: relative;
}

#uls-button {
  position: relative;
  top: -8px;
}
.uls-menu {
  left: auto !important;
  right: 0;
}

.uls-medium {
  min-width: 480px;
}

.language-icon,
.down-icon {
  display: inline-block;
  vertical-align: middle;
  margin-right: 12px;
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
  margin-left: 12px;
  margin-right: 0;
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
    this.i18n();
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
  computed: {
    languages: function() {
      return this.$store.state.article.languageLinks.reduce(
        (langs, langLink) => {
          // eslint-disable-next-line
          langs[langLink.lang] = $.uls.data.getAutonym(langLink.lang);
          return langs;
        },
        {}
      );
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
    }
  },
  mounted: function() {
    // eslint-disable-next-line
      $(this.$el).uls({
      left: 0,
      top: "100%",
      menuWidth: "large",
      languages: this.languages,
      onSelect: this.languageSelected.bind(this)
    });
  }
};
</script>
