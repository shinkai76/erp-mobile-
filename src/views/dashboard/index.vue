<template>
  <div id="dashboard">
    <c-header></c-header>
    <div id="infos" class="infos-wrap">
      <i class="fa fa-bell-o infos-ico infos-ico_left" aria-hidden="true"></i>
      <span class="infos-title">消息通知</span>
      <i class="fa fa-angle-right infos-ico infos-ico_right" aria-hidden="true" @click="onOpenMsg"></i>
    </div>
    <div class="sections-wrap">
      <section id="bills">
        <label>
          <i class="fa fa-file-text-o label-ico" aria-hidden="true"></i> <span>常用表单</span>
        </label>
        <div class="bills-wrap">
          <c-icoslot>
            <div slot="bill_name">
              111
            </div>
          </c-icoslot>
          <c-icoslot></c-icoslot>
        </div>
      </section>
      <section id="approval">
        <label>
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i> <span>审批助手</span>
        </label>
        <!--<div class="bills-wrap">-->
        <!--<c-icoslot>-->
        <!--<div slot="bill_name">-->
        <!--111-->
        <!--</div>-->
        <!--</c-icoslot>-->
        <!--<c-icoslot></c-icoslot>-->
        <!--</div>-->
      </section>

    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import IcoSlot from '@/components/IcoSlot.vue'

  export default {
    name: 'Dashboard',
    components: {
      'c-header': Header,
      'c-icoslot': IcoSlot
    },
    methods: {
      onOpenMsg () {
        this.$router.push('msg')
      }
    }
  }
</script>

<style scoped lang="less">
  @height: 0.6rem; // top-bar高度
  #dashboard {
    height: 100%;
    background: #ccc;

    & > section {
      background: transparent;
      margin: 0.2rem;
    }

    .infos {
      &-wrap {
        background: #fff;
        height: @height;
        line-height: @height;
        width: 100%;
        position: fixed;
        top: 0.8rem;
      }

      &-ico {
        position: absolute;
        line-height: @height;

        &_left {
          left: 0.3rem;
        }

        &_right {
          right: 0.3rem;
        }
      }

      &-title {
        display: inline-block;
        margin-left: @height;
      }

    }

    .sections-wrap {
      margin-top: @height + 0.8rem;
    }

    .bills-wrap {
      padding: 0.2rem 0;
      border-radius: 10px;
      background: #fff;
      display: flex;
      flex-direction: row; // 横向排列子元素
      flex-wrap: nowrap; // 子元素不换行
      justify-content: flex-start;
    }
  }
</style>
