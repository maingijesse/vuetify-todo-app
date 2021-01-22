<template>
  <v-list flat class="pt-0">
    <task
      v-for="task in $store.getters.filteredTasks"
      :key="task.id"
      :task="task"
    />
  </v-list>
</template>

<script>
import Task from "./Task.vue";
export default {
  components: {
    Task,
  },
  methods: {},
};
</script>

<style></style>
