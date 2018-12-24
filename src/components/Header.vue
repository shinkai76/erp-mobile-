<template>
  <div>
    <div id="Header" class="header-wrap">
      <i class="fa fa-angle-left header-ico header-ico_left" aria-hidden="true" @click="onOpenSideMenu()"></i>
      C8ERP
      <i class="fa fa-bars header-ico header-ico_right" aria-hidden="true"></i>
    </div>
    <c-sidemenu v-show="sidemenu.opened"></c-sidemenu>
  </div>
</template>

<script>
  import SideMenu from '@/components/SideMenu.vue'

  export default {
    name: 'Header',
    methods: {
      onOpenSideMenu () {
        this.$store.dispatch('ToggleSideMenu')
      }
    },
    components: {
      'c-sidemenu': SideMenu
    },
    computed: {
      sidemenu () {
        return this.$store.state.sidemenu
      }
    }
  }
</script>

<style scoped lang="less">
  @height: 0.8rem;
  @padding: 0.3rem;
  .header-wrap {
    position: fixed;
    height: @height;
    width: 100%;
    top: 0;
    line-height: @height;
    background-color: #fff;
    font-size: 0.4rem;
    text-align: center;
    border-bottom: 1px solid #ccc;
    .header-text {
      text-align: center;
    }

    .header-ico {
      line-height: @height;;
      position: absolute;

      &_left {
        left: @padding;
      }

      &_right {
        right: @padding;
      }
    }
  }
</style>
