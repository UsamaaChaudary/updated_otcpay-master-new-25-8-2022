import request from '@/utils/request';

const state = {
  device: "desktop",
  clientWidth: document.body.clientWidth,
  coins: []
}

const mutations = {
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
    state.clientWidth = document.body.clientWidth
  },
  SET_COINS: (state, coins) => {
    state.coins = coins;
   }
}

const actions = {
  toggleDevice({
    commit
  }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  getCoins({
    commit
  }) {
    request.get(process.env.VUE_APP_OTC_BASE_URL + "/advertisements/rate_list_all").then(res => {
      commit("SET_COINS", res.data);
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}