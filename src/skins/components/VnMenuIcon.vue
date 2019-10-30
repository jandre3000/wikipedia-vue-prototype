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
