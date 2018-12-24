<template>
  <!--过滤窗口-->
  <div id="Filter" v-show="_isFilter">
    <div class="filter-mask" @click="onCloseModal()"></div>
    <div class="filter-wrap">
      <ul>
        <li v-for="item in filterItems">
          <!--单个输入框-->
          <div v-if="item.type === 'input-text'">
            <label :for="item.key">{{ item.text }}</label>
            <input type="text" v-model="item.value" :id="item.key" />
          </div>
          <!--单个下拉选框-->
          <div v-else-if="item.type === 'select'">
            <label :for="item.key">{{ item.text }}</label>
            <select :name="item.key" :id="item.key" v-model="item.value">
              <option :value="opt.id" v-for="opt in item.options">{{ opt.name }}</option>
            </select>
          </div>
          <!--其他情况比如 包含仅包含 一个下拉选框与一或两个输入框-->
          <div v-else>
            else
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FilterModal',
    data() {
      return {
      }
    },
    mounted () {
    },
    props: {
      filterItems: {
        type: Array
      }
    },
    computed: {
      _isFilter () {
        return this.$store.state.isFilter
      }
    },
    methods: {
      onCloseModal () {
        this.$store.commit('TOGGLE_FILTER')
      }
    }
  }
</script>

<style scoped lang="less">
  #Filter {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    .filter {
      &-mask {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 3000;
      }

      &-wrap {
        width: 80%;
        min-height: 300px;
        top: 50%;
        margin-top: -150px;
        left: 50%;
        margin-left: -40%;
        position: absolute;
        background-color: #fff;
        border-radius: 0.08rem;
      }
    }
  }
</style>
