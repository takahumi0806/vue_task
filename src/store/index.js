import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos:[]
  },
  getters: {
    getTodos(state) {
      return state.todos
    },
    getDone: (state) => (status) => {
      return state.todos.filter(todo => todo.status === status)
    }
  },
  mutations: {
    setTask(state, payload) {
      const id = state.todos.length 
      store.state.todos.push({id, item: payload.task, status: '作業中'});
    },
    setStatus(state, payload) {
      if(state.todos[payload.id].status === '作業中'){
        state.todos[payload.id].status = '完了'
      } else {
        state.todos[payload.id].status = '作業中'
      }
    },
    setDelete(state, payload) {
      state.todos.splice(payload.id, 1)
      state.todos.forEach( function( todo ) {
        if( payload.id <  todo.id ){
          const number = todo.id -1
          state.todos[number].id = number
        }
      });
    }
  },
  actions: { 
    doAdd({commit},task) {commit('setTask', { task })},
    doStatus({commit},id) {commit('setStatus', { id })},
    doDelete({commit},id) {commit('setDelete', { id })}
  }
});

export default store