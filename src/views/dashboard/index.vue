<template>
  <div>
    <c-header></c-header>
    <c-sidemenu  v-show="sidemenu.opened"></c-sidemenu>
    此处是首页
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import SideMenu from '@/components/SideMenu.vue'

  export default {
    name: 'Dashboard',
    components: {
      'c-header' : Header,
      'c-sidemenu' : SideMenu
    },
    computed: {
      sidemenu() {
        return this.$store.state.sidemenu
      }
    }
  }
</script>

<style scoped lang="less">

</style>
