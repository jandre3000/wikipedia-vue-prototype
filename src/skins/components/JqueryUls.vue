<template>
  <div id="uls">
    <div id="uls-button">
      <mw-button>
        <span class="language-icon"></span>
        {{ Object.keys(this.languages).length - 1 }}
        languages
        <span class="down-icon"></span>
      </mw-button>
    </div>
    <div id="uls-picker"></div>
  </div>
</template>

<style>
#uls {
  position: relative;
}
.uls-menu {
  left: auto !important;
  right: 0;
}
.language-icon,
.down-icon {
  display: inline-block;
  vertical-align: middle;
  margin-right: 12px;
  width: 20px;
  height: 20px;
  background-image: url("../assets/languages.svg");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}

.down-icon {
  background-image: url("../assets/down.svg");
  width: 12px;
  height: 12px;
  margin-left: 12px;
  margin-right: 0;
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

  // eslint-disable-next-line
  $("#uls").prepend(this.$menu);
  this.i18n();
  this.initialized = true;

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
  watch: {
    languages: function(val) {
      // eslint-disable-next-line
      $(this.$el).uls({
        left: 0,
        top: "100%",
        languages: val
      });
    }
  }
};
</script>
