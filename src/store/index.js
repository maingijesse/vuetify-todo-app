import Vue from "vue";
import Vuex, { Store } from "vuex";
import Localbase from "localbase";
let db = new Localbase("db");
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: null,
    tasks: [],
    snackBar: {
      show: false,
      text: "Hello World",
    },
  },
  mutations: {
    setSearch(state, value) {
      // console.log(value);
      state.search = value;
    },
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        task: newTaskTitle,
        done: false,
        dueDate: null,
      };

      state.tasks.push(newTask);
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    updateTaskTitle(state, payload) {
      // console.log(payload);
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.task = payload.title;
    },
    completeTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    showSnackBar(state, text) {
      let timeOut = 0;
      if (state.snackBar.show) {
        state.snackBar.show = false;
        timeOut = 300;
      }

      setTimeout(() => {
        state.snackBar.show = true;
        state.snackBar.text = text;
      }, timeOut);
    },
    hideSnackBar(state) {
      state.snackBar.show = false;
    },
    updateTaskDueDate(state, payload) {
      // console.log(payload);
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit("addTask", newTaskTitle);
      commit("showSnackBar", "Task Added");
    },
    deleteTask({ commit }, id) {
      commit("deleteTask", id);
      commit("showSnackBar", "Task Deleted");
    },
    updateTaskTitle({ commit }, payload) {
      commit("updateTaskTitle", payload);
      commit("showSnackBar", "Task Updated");
    },
    updateTaskDueDate({ commit }, payload) {
      commit("updateTaskDueDate", payload);
      commit("showSnackBar", "Due Date Updated");
    },
  },
  getters: {
    filteredTasks(state) {
      if (!state.search) {
        return state.tasks;
      }

      return state.tasks.filter((task) =>
        task.task.toLowerCase().includes(state.search.toLowerCase())
      );
    },
  },
  // modules: {},
});
