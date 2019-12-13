<template>
  <router-link id="vn-logo" :to="{ params: { title: 'Main_Page' } }">
    <img class="logo-globe" src="../static/images/wikipedia-globe.png" />
    <span
      class="localized-wordmark"
      v-bind:src="localizedLogoSrc"
      v-bind:style="{ backgroundImage: 'url(' + localizedLogoSrc + ')' }"
    ></span>
  </router-link>
</template>

<style lang="less">
#vn-logo {
  position: absolute;
  top: 12px;
  left: 24px;
  display: block;
}
#vn-logo .localized-wordmark {
  display: inline-block;
  height: 36px;
  width: 120px;
  background-size: 120px auto;
  background-position: 0 -98px;
  background-repeat: no-repeat;
  vertical-align: middle;
}

#vn-logo .logo-globe {
  max-height: 40px;
  max-width: 40px;
}

html[dir="rtl"] {
  #vn-logo {
    position: absolute;
    top: 6px;
    left: auto;
    right: 24px;
    display: block;
  }
}
</style>

<script>
export default {
  asyncComputed: {
    localizedLogoSrc: function() {
      return new Promise(resolve => {
        const localUrl = `https://en.wikipedia.org/static/images/project-logos/${this.$route.meta.language}wiki-2x.png`;
        const fallbackUrl = `https://en.m.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg`;
        const img = new Image();
        img.src = localUrl;
        img.onload = () => {
          return resolve(localUrl);
        };
        img.onerror = () => {
          return resolve(fallbackUrl);
        };
      });
    }
  }
};
</script>
