<template>
  <v-row justify="center">
    <v-dialog persistent max-width="290" :value="true">
      <v-card>
        <v-card-title class="headline">
          Edit Task
        </v-card-title>
        <v-card-text
          >edit the task title

          <v-text-field
            v-model="taskTitle"
            @keyup.enter="saveTask"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success darken-1"
            text
            @click="saveTask"
            :disabled="taskTitleInvalid"
          >
            Save
          </v-btn>
          <v-btn color="primary darken-1" text @click="$emit('closeDialog')">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      dialog: true,
      taskTitle: null,
    };
  },
  mounted() {
    this.taskTitle = this.task.task;
  },
  computed: {
    taskTitleInvalid() {
      return !this.taskTitle || this.taskTitle === this.task.task;
    },
  },
  props: ["task"],
  methods: {
    saveTask() {
      if (!this.taskTitleInvalid) {
        // console.log("Task successfully saved");
        let payLoad = {
          id: this.task.id,
          title: this.taskTitle,
        };

        this.$store.dispatch("updateTaskTitle", payLoad);
        this.$emit("closeDialog");
      }
    },
  },
};
</script>

<style></style>
