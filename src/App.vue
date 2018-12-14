<template>
  <div id="app">
    <c-header></c-header>
    <c-side-menu></c-side-menu>
    <div class="app-main">
      <router-view />
    </div>
  </div>
</template>

<script>
  import Header from "components/Header"
  import SideMenu from "components/SideMenu"
  export default {
    name: 'App',
    components: {
      'c-header' : Header,
      'c-side-menu' : SideMenu
    }
  }
</script>

<style lang="less">
  @import "css/base";
  #app{
    height: 100%;
    .app-main {
      margin-top: 6vh;
      height: 94vh;
      overflow-y: auto;
    }
  }
</style>
