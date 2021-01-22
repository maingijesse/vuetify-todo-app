<template>
  <div class="todo pa-6 pt-0">
    <add-todo-text-field></add-todo-text-field>
    <div v-if="$store.state.tasks.length">
      <list-tasks></list-tasks>
    </div>
    <div v-else>
      <no-task />
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
};
</script>
