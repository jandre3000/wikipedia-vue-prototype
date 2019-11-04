<template>
  <div id="mw-head">
    <vn-menu-icon></vn-menu-icon>
    <p1-logo id="vn-logo"></p1-logo>
    <personal-navigation></personal-navigation>

    <div class="vn-page-navigation">
      <div class="vn-page-navigation-margin">
        <right-navigation></right-navigation>
        <left-navigation></left-navigation>
      </div>
    </div>
  </div>
</template>

<style scoped>
#mw-head {
  z-index: 1;
  height: 44px;
  width: 100%;
  background-color: white;
}

#vn-logo {
  left: 55px;
}
</style>
