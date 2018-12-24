<template>
  <!--过滤窗口-->
  <div id="Filter" v-show="_isFilter">
    <div class="filter-mask" @click="onCloseModal()"></div>
    <div class="filter-wrap">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'FilterModal',
    methods: {

    },
    computed: {
      _isFilter () {
        return this.$store.state.isFilter
      }
    },
    methods: {
      onCloseModal() {
        this.$store.commit("TOGGLE_FILTER")
      }
    }
  }
</script>

<style scoped lang="less">

</style>
