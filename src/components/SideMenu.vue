<template>
  <div id="SideMenu"   @click="hidePanel">
    <div class="side-menu-wrap" id="myPanel">
      <div class="side-menu-user">
        <h4>{{ $store.state.userName }}</h4>
        <h4>{{ $store.state.setOfBook }}</h4>
      </div>
      <div class="side-menu-menu">
        <ul class="parent-ul">
          <li v-for="(value, index, key) in items" :class="value.className" @click="toViews(value)">{{ value.text }}
            <ul v-if="value.childList" class="child—ul">
              <li v-for="child in value.childList">{{ child.text }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SideMenu',
    data () {
      return {
        userName: "",
        setOfBook: "",
        items: [
          {
            text: '我的C8'
          },
          {
            text: '工作台',
            className: 'side-menu-menu_default',
            name: 'workspace'
          }, {
            text: '管理工作台',
            lcode: 'other/workspaces',
            className: 'side-menu-menu_default'
          }, {
            text: '销售单据',
            childList: [
              {
                text: '销售单'
              }
            ]
          }, {
            text: '财务单据',
            childList: [
              {
                text: '费用单'
              }
            ]
          }, {
            text: '报表中心',
            childList: [
              {
                text: '货品销售报表'
              }, {
                text: '应收应付报表'
              }
            ]
          }, {
            text: '基础资料',
            childList: [
              {
                text: '商业伙伴'
              }, {
                text: '商品资料'
              }
            ]
          }
        ]
      }
    },
    methods: {
      toViews (item) {
        this.$router.push(item.name)
      },
      hidePanel(event){
        var sp = document.getElementById('myPanel')
        if (sp) {
          if (!sp.contains(event.target)) { // 点击右侧的空白区域隐藏sideMenu
            this.$store.dispatch("CloseSideMenu")
          }
        }
      }
    }
  }
</script>

<style scoped lang="less">
  #SideMenu {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .side-menu {
      &-wrap {
        width: 70%;
        background-color: #fff;
        box-shadow: 1px 0 7px 4px #ccc;
        height: 100%;
      }

      &-user {
        height: 20%;
        text-align: center;
        padding-top: 15%;
      }

      &-menu {
        ul {
          padding-left: 10%;
        }

        li {
          padding: 0.1rem 0;
          font-size: 0.3rem;
        }
      }
    }
  }

</style>
