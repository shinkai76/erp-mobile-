import Vue from 'vue'
import Vuex from 'vuex'
// import app from './modules/app'
// import user from './modules/user'
// import getters from './getters'
import { getToken, setToken, removeToken } from '@/utils/auth'
import Cookies from 'js-cookie'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // app,
    // user
  },
  // getters,
  state: {
    userName: "",
    setOfBook: "",
    token: "",
    isFilter: false,
    sidemenu: {
      opened: !+Cookies.get('sidemenuStatus')
    },
  },
  mutations: {
    TOGGLE_SIDEMENU: state => {
      if (state.sidemenu.opened) {
        Cookies.set('sidemenuStatus', 1)
      } else {
        Cookies.set('sidemenuStatus', 0)
      }
      state.sidemenu.opened = !state.sidemenu.opened
    },
    CLOSE_SIDEMENU: state => {
      Cookies.set('sidemenuStatus', 1)
      state.sidemenu.opened = false
    },
    TOGGLE_FILTER: state => {
      state.isFilter = !state.isFilter
    }
  },
  actions: {
    ToggleSideMenu({ commit }){
      commit('TOGGLE_SIDEMENU')
    },
    CloseSideMenu({ commit }) {
      commit('CLOSE_SIDEMENU')
    },
    ClearLogInfo({ commit }) {
      removeToken()
      commit('CLOSE_SIDEMENU')
    }
  }
})

export default store
