import Vue from 'vue'
import Vuex from 'vuex'

import {stateUser, stateEvent, stateCategories} from './state/index';

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    user: stateUser,
    events: stateEvent,
    categories: stateCategories,
    color: "green",
  },
  mutations: {
    ChangeColor(state, data) {
      state.color = data
    },
    ADD_EVENT(state, payload) {
      state.events.push(payload);
    },
  },
  actions: {
    createEvent ({commit, state}, payload) {
      console.log(state.events);
      commit('ADD_EVENT', payload)
    },
  },
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneToDos: state => {
      return state.events.filter(todo => todo.done)
    },
    activeTodosCount: state => {
      return state.events.filter(todo => !todo.done).length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})