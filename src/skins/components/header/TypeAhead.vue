<template>
  <div id="typeahead-suggestions">
    <div class="suggestions-dropdown">
      <router-link
        v-for="s in suggestions"
        v-bind:key="s.title"
        class="suggestion-link"
        :to="{ params: { title: s.title } }"
      >
        <div class="suggestion-text">
          <div class="suggestion-title">
            <em class="suggestion-highlight">{{ s.title }}</em>
          </div>
          <p class="suggestion-description">{{ s.description }}</p>
        </div>
        <div
          class="suggestion-thumbnail"
          v-bind:style="{
            backgroundImage:
              'url(' + (s.thumbnail ? s.thumbnail.source : '') + ')'
          }"
        ></div>
      </router-link>
    </div>
  </div>
</template>

<style>
/* ::: Search suggestions dropdown ::: */
@import "../../../../node_modules/wikimedia-ui-base/wikimedia-ui-base.css";

.suggestions-dropdown {
  background-color: #fff;
  display: inline-block;
  position: absolute;
  left: 0;
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  border: var(--border-dialog);
  border-top: 0;
  box-shadow: var(--box-shadow-dialog);
  text-align: left;
  list-style-type: none;
  /* Overwrite hack of `.search-container fieldset` in '_search.css' */
  word-spacing: normal;
  font-size: 14px;
}

.suggestion-link {
  display: block;
  position: relative;
  box-sizing: border-box;
  min-height: 60px;
  max-height: 60px;
  width: 100%;
  padding: 6px 6px 6px 66px;
  border-bottom: 1px solid var(--wmui-color-base80);
  color: inherit;
  text-decoration: none;
  text-align: initial;
  white-space: normal;
  overflow: hidden;
}

.suggestion-link.active,
.suggestion-link:hover {
  background-color: var(--wmui-color-accent90);
}

/* using element selector to override default anchor styles */
a.suggestion-link:hover {
  text-decoration: none !important;
}

a.suggestion-link:active,
a.suggestion-link:focus {
  outline: 0;
  white-space: normal;
}

.suggestion-thumbnail {
  background-color: var(--wmui-color-base80);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-size: cover;
  height: 100%;
  width: 60px;
  position: absolute;
  top: 0;
  left: 0;
}

.suggestion-title {
  color: var(--wmui-color-base20);
  font-size: 0.8em;
  line-height: 1.2em;
}

.suggestion-link.active .suggestion-title {
  color: var(--wmui-color-accent50);
}

.suggestion-highlight {
  font-style: normal;
  text-decoration: underline;
}

.suggestion-description {
  color: var(--wmui-color-base30);
  margin: 0;
  font-size: 0.8em;
  line-height: 1.43em;
}
</style>

<script>
import axios from "axios";

export default {
  props: ["query", "lang"],
  data: function() {
    return {
      suggestions: []
    };
  },
  methods: {
    search(value) {
      const searchQuery = {
        action: "query",
        format: "json",
        generator: "prefixsearch",
        prop: "pageprops|pageimages|description",
        redirects: "true",
        ppprop: "displaytitle",
        piprop: "thumbnail",
        pithumbsize: 160,
        pilimit: 6,
        gpssearch: value,
        gpsnamespace: 0,
        gpslimit: 6,
        origin: "*"
      };

      axios
        .get(`https://${this.$props.lang}.wikipedia.org/w/api.php`, {
          params: searchQuery
        })
        .then(response => {
          if (
            response.data &&
            response.data.query &&
            response.data.query.pages
          ) {
            this.$data.suggestions = response.data.query.pages;
          } else {
            this.$data.suggestions = [];
          }
        });
    }
  },
  watch: {
    query: function(value) {
      this.search(value);
    }
  }
};
</script>
