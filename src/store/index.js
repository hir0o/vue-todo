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
    addTask(state, name) {
      state.tasks.push(
        {
          id: state.nextTaskId,
          name: name,
          done: false
        },
      )
      state.nextTaskId++
    },
    doneTasks(state, ids) {
      ids.forEach(id => {
        state.tasks[id].done = true
      })
    }
  },
  actions: {
    addTask({ commit }, name) {
      commit('addTask', name)// 第二引数で、値を渡すことができる
    },
    doneTasks({ commit }, ids) {
      commit('doneTasks', ids)// 第二引数で、値を渡すことができる
    }
  },
  getters: {
    tasks(state) {
      return state.tasks.filter(task => {
        return task.done == false
      })
    }
  }
})
