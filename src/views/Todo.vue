<template>
  <div class="todo pa-md-6 pt-0">
    <add-todo-text-field></add-todo-text-field>
    <div
      v-if="$store.state.tasks.length"
      class="fix-scroll  elevation-10 pa-md-8 "
    >
      <list-tasks></list-tasks>
    </div>

    <div v-else>
      <no-task />
    </div>
    <div
      class="text-center "
      v-if="$store.state.tasks.length > 5"
      @click="$store.dispatch('deleteAllTasks')"
    >
      <v-btn elevation="18" color="secondary ma-4" @click="deleteAllTasks">
        <v-icon left>mdi-delete</v-icon> Delete All Tasks</v-btn
      >
    </div>
  </div>
</template>

<script>
import AddTodoTextField from "../components/Todo/AddTodoTextField.vue";
import ListTasks from "../components/Todo/ListTasks.vue";
import NoTask from "../components/Todo/NoTask.vue";
export default {
  name: "Todo",
  components: {
    AddTodoTextField,
    ListTasks,
    NoTask,
  },
  methods: {
    deleteAllTasks() {
      console.log("Tasks about to be deleted");
    },
  },
};
</script>

<style lang="scss" scoped>
.fix-scroll {
  max-height: 60vh !important;
  overflow-y: auto;
}
</style>
