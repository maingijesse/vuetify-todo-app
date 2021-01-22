<template>
  <v-container>
    <v-text-field
      label="Add Task"
      counter="35"
      clearable
      v-model="newTaskTitle"
      @keyup.enter.prevent="addTask"
    >
      <template v-slot:append>
        <v-icon
          @click.prevent="addTask"
          color="primary"
          :disabled="newTaskTitleInvalid"
        >
          mdi-plus
        </v-icon>
      </template>
    </v-text-field>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // tasks: [],
      newTaskTitle: "",
    };
  },
  methods: {
    completeTask(id) {
      this.$store.commit("completeTask", id);
    },

    addTask() {
      if (!this.newTaskTitleInvalid) {
        this.$store.dispatch("addTask", this.newTaskTitle);
        this.newTaskTitle = "";
      }
    },
  },
  computed: {
    newTaskTitleInvalid() {
      return !this.newTaskTitle;
    },
  },
};
</script>

<style></style>
