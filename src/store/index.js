import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    nextTaskId: 0,
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
    doneTasks(state, { ids }) {
      ids.forEach(id => {
        state.tasks[id].done = true
      })
    }
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
