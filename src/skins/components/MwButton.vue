<template>
  <button class="mw-ui-button mw-ui-quiet">
    <slot></slot>
  </button>
</template>

<style lang="less" scoped>
html[dir="ltr"] .mw-ui-button,
html[dir="rtl"] .mw-ui-button {
  font-size: 0.85em !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
}
</style>
