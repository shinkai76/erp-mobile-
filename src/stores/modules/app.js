import Cookies from 'js-cookie'

const app = {
  state: {
    sidemenu: {
      opened: !+Cookies.get('sidemenuStatus'),
      withoutAnimation: false
    },
    device: 'desktop'
  },
  mutations: {
    TOGGLE_sidemenu: state => {
      if (state.sidemenu.opened) {
        Cookies.set('sidemenuStatus', 1)
      } else {
        Cookies.set('sidemenuStatus', 0)
      }
      state.sidemenu.opened = !state.sidemenu.opened
      state.sidemenu.withoutAnimation = false
    },
    CLOSE_sidemenu: (state, withoutAnimation) => {
      Cookies.set('sidemenuStatus', 1)
      state.sidemenu.opened = false
      state.sidemenu.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    }
  },
  actions: {
    Togglesidemenu: ({ commit }) => {
      commit('TOGGLE_sidemenu')
    },
    Closesidemenu ({ commit }, { withoutAnimation }) {
      commit('CLOSE_sidemenu', withoutAnimation)
    },
    ToggleDevice ({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    }
  }
}

export default app
