<template>
  <vector-layout>
    <template v-slot:header>
      <div id="mw-head">
        <headroom>
          <vn-menu-icon></vn-menu-icon>
          <p1-logo></p1-logo>
          <personal-navigation></personal-navigation>
        </headroom>
      </div>
    </template>

    <template v-slot:sidebar>
      <div id="mw-panel" v-show="sidebarCollapsed">
        <mw-portals></mw-portals>
      </div>
    </template>
  </vector-layout>
</template>

<style scoped lang="less">
#mw-panel {
  margin-top: 80px;
}
// modifying <p1-logo>
#vn-logo {
  left: 54px;
}

#mw-head {
  height: 44px;
  width: 100%;
  background-color: white;
}
</style>

<style>
.headroom {
  will-change: transform;
  transition-duration: 150ms !important;
  height: 44px;
  background-color: white;
}
.headroom--pinned {
  transform: translateY(0%);
}
.headroom--unpinned {
  transform: translateY(-100%);
}

.headroom--not-top.headroom--pinned {
  box-shadow: -2px 0 3px rgba(0, 0, 0, 0.2);
}
</style>

<script>
import "../globalSkinComponents.js";
import { headroom } from "vue-headroom";

export default {
  components: {
    headroom
  },
  computed: {
    isMainPage() {
      return this.$store.state.article.title === "Main Page";
    },
    title() {
      return this.$store.state.article.title;
    },
    sidebarCollapsed() {
      return !this.$store.state.user.sidebarCollapsed;
    }
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
