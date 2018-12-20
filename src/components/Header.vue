<template>
  <div id="Header" class="header-wrap">
    <i class="fa fa-angle-left header-ico header-ico_left" aria-hidden="true" @click="onOpenSideMenu()"></i>
    C8ERP
    <i class="fa fa-bars header-ico header-ico_right" aria-hidden="true"></i>
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
  height: 0.8rem;
  width: 100%;
  top:0;
  line-height: 0.8rem;;
  background-color: #fff;
  font-size: 0.4rem;
  text-align: center;
  .header-text {
    text-align: center;
  }
  .header-ico{
    line-height: 0.8rem;;
    position: absolute;
    &_left {
      left: .3rem;
    }
    &_right {
      right: .3rem;
    }
  }
}
</style>
