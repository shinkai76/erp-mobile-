<template>
  <div id="workspace">
    <c-header></c-header>
    <div class="top-bar">
      <button type="button" @click="onOpenFilter()"><i class="fa fa-filter" aria-hidden="true"></i>过滤</button>
      <span class="top-bar-record">共{{ totalRecord }}条记录</span>
    </div>
    <ul class="bills-wrap">
      <li v-for="(value, index) in billInfo" class="bills-item">
        <div class="container-first">
          <div class="container-first-status">{{ value.state }}</div>
        </div>
        <div class="container-second">
          <div class="container-second-info">
            <span>商业伙伴{{ value.form_partner_id }}</span>
            <span>单号{{ value.form_code }}</span>
            <span>金额{{ value.form_total_amount }}</span>
          </div>
        </div>
        <div class="container-third">
          <div class="container-third-arrow" @click="onOpenBill()"><i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </li>
    </ul>
    <c-filter :filter-items="filterItems"></c-filter>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import FilterModal from '@/components/FilterModal.vue'

  export default {
    name: 'workspace',
    components: {
      'c-header': Header,
      'c-filter': FilterModal
    },
    data () {
      return {
        totalRecord: '',
        limit: 100,
        start: 0,
        billInfo: [],
        isFilter: false,
        filterItems: [{
          text: '单号',
          type: 'input-text',
          value: 'SK-123',
          key: 'form_code'
        }, {
          text: '仓库',
          type: 'select',
          value: 123,
          key: 'store_id',
          options: [{
            id: 1,
            name: '我是1'
          }, {
            id: 2,
            name: '我是2'
          }]
        }, {
          text: '金额',
          type: 'select&input-double',
          value: 123,
          key: 'store_id'
        }]
      }
    },
    created () {
      this.getList()
    },
    mounted () {
    },
    methods: {
      getList () {
        let params = {
          action: 'my_forms_ex',
          start: this.start,
          limit: this.limit
        }
        this.$axios({
          url: '/api/common',
          params: params
        }).then(res => {
          if (res.success) {
            console.log(res)
            this.totalRecord = res.total
            this.billInfo = res.root
            return
          }
          alert(res)
        })
      },
      onOpenBill () {
        alert('打开表单详情')
      },
      onOpenFilter () {
        this.$store.commit('TOGGLE_FILTER')
      }
    }
  }
</script>

<style scoped lang="less">
  @height: 0.6rem; // top-bar高度
  @padding: 0.2rem;
  #workspace {
    height: 100%;
    background-color: #ccc;

    .top-bar {
      top: 0.8rem;
      width: 100%;
      height: @height;
      position: fixed;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      padding: 0 @padding;
      align-items: center;
    }

    .bills-wrap {
      overflow-y: auto;
      margin-top: @height + 0.8rem;
      padding: 0 @padding;
      height: 100%;

      .bills-item {
        margin: 0.11rem 0;
        padding: 0.08rem 0;
        border-radius: 0.08rem;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .container {
          &-first {
            width: 25%;

            &-status {
              background: #fff;
              border-radius: 50%;
            }
          }

          &-second {
            width: 60%;

            &-info {
              span {
                display: block;
              }
            }
          }

          &-third {
            width: 15%;
            text-align: right;
            padding-right: @padding;
          }
        }
      }
    }
  }
</style>
