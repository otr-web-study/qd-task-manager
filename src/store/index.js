import Vue from 'vue';
import Vuex from 'vuex';
import { v4 } from 'uuid';
import { getLocalData } from '@/utils/localData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: getLocalData('Task-manager/list', []),
  },
  getters: {
    allTasks: (state) => state.tasks,
  },
  mutations: {
    addTask: (state, task) => {
      state.tasks.push({ ...task, id: v4() });
    },
    deleteTask: (state, id) => {
      state.tasks = state.tasks.filter((t) => t.id !== id);
    },
    updateTask: (state, task) => {
      console.log(task);
      state.tasks = state.tasks.map((t) => (t.id === task.id ? task : t));
    },
  },
  actions: {
    addTask: ({ commit }, task) => commit('addTask', task),
    deleteTask: ({ commit }, id) => commit('deleteTask', id),
    updateTask: ({ commit }, task) => commit('updateTask', task),
  },
});
