<template>
  <div id="Login">
    <div class="login-wrap">
      <input type="text" placeholder="用户名" name="user_name" class="login-input" v-model.trim="loginForm.user_name">
      <input type="password" placeholder="密码" name="password" class="login-input" v-model="loginForm.password">
      <input type="text" placeholder="企业ID" name="set_of_book" class="login-input" v-model.trim="loginForm.set_of_book" @enter="onLogin()">
      <button type="submit" class="login-submit" @click="onLogin()">登录</button>
    </div>
  </div>
</template>

<script>
  import { setToken, removeToken } from '@/utils/auth'
  import Cache from '@/utils/cache'
  export default {
    name: 'Login',
    data () {
      return {
        loginForm: {
          user_name: '',
          password: '',
          set_of_book: ''
        }
      }
    },
    // created() {}, // 获取数据
    mounted () { // 请求数据之后的页面其他逻辑
      removeToken()
    },
    activated () {},
    deactivated () {},
    methods: {
      async onLogin () {
        const _LoginInfo = await this.$axios({
          url: '/api/login',
          method: 'POST',
          params: this.loginForm
        })
        setToken(_LoginInfo.token)
        const _Cache = await this.$axios({
          url: '/api/cache'
        })
        console.log(Cache)
        Cache._Cache = _Cache
        window.localStorage.setItem('Cache', Cache)
        this.$store.state.userName = this.loginForm.user_name
        this.$store.state.setOfBook = this.loginForm.set_of_book
        this.$router.replace('/dashboard')
      }
    }
  }
</script>

<style scoped lang="less">
  #Login {
    height: 100%;
    .login-wrap {
      position: relative;
      width: 40%;
      min-width: 270px;
      margin: 0 auto;
      padding-top: 15vh;

      .login-input {
        border: 1px solid #ccc;
        width: 100%;
        padding: 0.1rem;
        margin: 0.1rem 0;
      }

      .login-submit {
        margin-top: 45vh;
        width: 100%;
        background-color: #ccc;
        padding: 0.1rem;

      }
    }
  }

</style>
