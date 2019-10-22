<template>
  <div>
    <h1>Phase1 skin stuff before core</h1>
    <mw-core></mw-core>
    <h1>Phase1 skin stuff after core</h1>
  </div>
</template>

<script>
import Core from "@/core/Core.vue";
export default {
  components: {
    "mw-core": Core
  }
};
</script>
