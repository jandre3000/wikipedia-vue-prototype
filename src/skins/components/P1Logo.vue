<template>
  <a id="vn-logo" v-bind:href="$router.options.base">
    <img v-bind:src="localizedLogoSrc" />
  </a>
</template>

<style lang="less">
#vn-logo {
  position: absolute;
  top: 6px;
  left: 24px;
  display: block;
}
#vn-logo img {
  height: 100%;
  width: 100%;
  max-height: 30px;
  max-width: 100px;
}
</style>

<script>
export default {
  asyncComputed: {
    localizedLogoSrc: function() {
      return new Promise(resolve => {
        const localUrl = `https://en.m.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-${this.$route.meta.language}.svg`;
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
