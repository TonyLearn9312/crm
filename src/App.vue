<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang='scss'>
#app {
  height: 100%;
  width: 100%;
  @include Font($FontSize: 12px, $lineHeight: inherit, $color: $mainFontColor);
}
</style>

