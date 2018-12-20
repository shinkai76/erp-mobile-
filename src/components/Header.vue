<template>
  <div id="Header" class="header-wrap">
    <i class="fa fa-angle-left header-icron header-icron_left" aria-hidden="true" @click="onOpenSideMenu()"></i>
    C8ERP
    <i class="fa fa-bars header-icron header-icron_right" aria-hidden="true"></i>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      onOpenSideMenu() {
        this.$store.dispatch('ToggleSideMenu')
      }
    }
  }
</script>

<style scoped lang="less">
.header-wrap{
  height: 6vh;
  width: 100%;
  top:0;
  background-color: #ccc;
  font-size: 0.4rem;
  line-height: 6vh;
  text-align: center;
  .header-text {
    text-align: center;
  }
  .header-icron{
    position: absolute;
    line-height: 6vh;
    &_left {
      left: .3rem;
    }
    &_right {
      right: .3rem;
    }
  }
}
</style>
