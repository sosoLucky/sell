import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)
// state
const state = {
  count: 1
}
const getters = {
  count: state => state.count
}
const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--
}
const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement')
}
export default new Vuex.Store({
  namespaced: true,
  state,
  getters,
  mutations,
  actions
})
