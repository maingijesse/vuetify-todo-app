import Vue from "vue";
import Vuex, { Store } from "vuex";
import Localbase from "localbase";
let db = new Localbase("db");
db.config.debug = false;
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
    deleteTasks(state) {
      state.tasks = [];
    },
    setSearch(state, value) {
      state.search = value;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, newTask) {
      //

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
      let newTask = {
        id: Date.now(),
        task: newTaskTitle,
        done: false,
        dueDate: null,
      };
      db.collection("tasks")
        .add(newTask)
        .then(() => {
          commit("addTask", newTask);
          commit("showSnackBar", "Task Added");
        });
    },
    completeTask({ state, commit }, id) {
      // console.log("Welcome");
      let task = state.tasks.filter((task) => task.id === id)[0];
      db.collection("tasks")
        .doc({ id: id })
        .update({
          done: !task.done,
        })
        .then(() => {
          commit("completeTask", id);
        });
    },
    deleteTask({ commit }, id) {
      db.collection("tasks")
        .doc({ id: id })
        .delete()
        .then(() => {
          commit("deleteTask", id);
          commit("showSnackBar", "Task Deleted");
        });
    },
    updateTaskTitle({ commit }, payload) {
      db.collection("tasks")
        .doc({ id: payload.id })
        .update({
          task: payload.title,
        })
        .then(() => {
          commit("updateTaskTitle", payload);
          commit("showSnackBar", "Task Updated");
        });
    },
    updateTaskDueDate({ commit }, payload) {
      db.collection("tasks")
        .doc({ id: payload.id })
        .update({
          dueDate: payload.dueDate,
        })
        .then(() => {
          commit("updateTaskDueDate", payload);
          commit("showSnackBar", "Due Date Updated");
        });
    },
    getTasks({ commit }) {
      // console.log("getting tasks");
      db.collection("tasks")
        .get()
        .then((tasks) => {
          commit("setTasks", tasks);
        });
    },
    deleteAllTasks({ commit }) {
      db.collection("tasks")
        .delete()
        .then(() => {
          commit("deleteTasks");
        });
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
