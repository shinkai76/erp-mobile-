<template>
    <div id="workspace">
      <c-header></c-header>
        <div>
          <button type="button"><i class="fa fa-filter" aria-hidden="true"></i>过滤</button>
          共{{ totalRecord }}条记录
        </div>
    </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  export default {
    name: 'workspace',
    components: {
      'c-header' : Header
    },
    data () {
      return {
        totalRecord: "",
        limit: 100,
        start: 0
      }
    },
    created() {
      this.getList()
    },
    mounted () {
    },
    methods: {
      getList() {
        let params = {
          action: "my_forms_ex",
          start: this.start,
          limit: this.limit
        }
        this.$axios({
          url: "/api/common",
          params: params
        }).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

</style>
