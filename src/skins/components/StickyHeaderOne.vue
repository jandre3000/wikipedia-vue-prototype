<template>
  <div id="mw-head">
    <headroom>
      <vn-menu-icon></vn-menu-icon>
      <p1-logo id="vn-logo"></p1-logo>
      <personal-navigation></personal-navigation>
    </headroom>
  </div>
</template>

<style>
#mw-head {
  height: 44px;
  width: 100%;
  background-color: white;
}

#vn-logo {
  left: 55px;
}
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
import { headroom } from "vue-headroom";

export default {
  components: {
    headroom
  }
};
</script>
