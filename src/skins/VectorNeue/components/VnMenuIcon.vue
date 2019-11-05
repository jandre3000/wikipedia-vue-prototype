<template>
  <button @click="toggleSidebar"></button>
</template>

<style scoped>
button {
  display: inline-block;
  background: center / contain no-repeat url("../assets/hamburger.svg");
  width: 20px;
  height: 20px;
  border: 0;
  vertical-align: middle;
  position: absolute;
  left: 20px;
  top: 15px;
  cursor: pointer;
}

html[dir="rtl"] button {
  left: auto;
  right: 20px;
}
</style>

<style lang="less">
/* Showing/collapsing the sidebar.
 * DANGER: this is using a body class to move the layout for the collapsed sidebar.
 * Is there a better way to do this?
 */
html[dir="rtl"],
html[dir="ltr"] {
  body.vn-sidebar-collapsed {
    background-color: white;

    #mw-page-base {
      max-width: 960px;
      margin-left: auto;
      margin-right: auto;
    }

    .mw-body {
      margin-left: auto;
      margin-right: auto;
      // DANGER: what width should we use, what do specialPages like recent changes
      // look like with it?
      max-width: 960px; //random
      border-left: none;
      border-right: none;
    }

    #left-navigation {
      margin-left: 0;
      margin-right: 0;
    }
    .vn-page-navigation-margin {
      max-width: 1008px; // random because 1em padding on body
      margin-left: auto;
      margin-right: auto;
    }

    .vectorTabs {
      background-image: none;
    }
  }
}
</style>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      toggleSidebar: "user/toggleSidebar"
    })
  }
};
</script>
