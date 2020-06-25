import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    nextTaskId: 1,
  },
  // ステートの変更をする
  mutations: {
    addTask(state, { name }) {
      state.tasks.push(
        {
          id: state.nextTaskId,
          name,
          done: false
        },
      )
      state.nextTaskId++
    },
  },
  getters: {
    tasks(state) {
      return state.tasks
    }
  },
  actions: {
  },
  modules: {
  }
})
