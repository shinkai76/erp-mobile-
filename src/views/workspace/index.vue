<template>
    <div id="workspace">
      <c-header></c-header>
        <div>
          <button type="button">过滤</button>
          共多少条记录
        </div>
    </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  export default {
    name: 'workspace',
    components: {
      'c-header' : Header
    }
  }
</script>

<style scoped>

</style>
