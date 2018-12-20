<template>
  <div id="SideMenu"   @click="hidePanel">
    <div class="side-menu-wrap" id="myPanel">
      <div class="side-menu-user">
        <h4>用户名</h4>
        <h4>账套号</h4>
      </div>
      <div class="side-menu-menu">
        <ul class="parent-ul">
          <li v-for="(value, index, key) in items" :class="value.className">{{ value.name }}
            <ul v-if="value.childList" class="child—ul">
              <li v-for="child in value.childList">{{ child.name }}</li>
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
        items: [
          {
            name: '我的C8'
          },
          {
            name: '工作台',
            className: 'side-menu-menu_default'
          }, {
            name: '管理工作台',
            lcode: 'other/workspaces',
            className: 'side-menu-menu_default'
          }, {
            name: '销售单据',
            childList: [
              {
                name: '销售单'
              }
            ]
          }, {
            name: '财务单据',
            childList: [
              {
                name: '费用单'
              }
            ]
          }, {
            name: '报表中心',
            childList: [
              {
                name: '货品销售报表'
              }, {
                name: '应收应付报表'
              }
            ]
          }, {
            name: '基础资料',
            childList: [
              {
                name: '商业伙伴'
              }, {
                name: '商品资料'
              }
            ]
          }
        ]
      }
    },
    methods: {
      hidePanel: function (event) {
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

    .side-menu {
      &-wrap {
        width: 70vw;
        background-color: #fff;
        box-shadow: 1px 0 7px 4px #ccc;
        height: 100vh;
      }

      &-user {
        height: 30%;
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
