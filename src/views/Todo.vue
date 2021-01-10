<template>
  <div class="todo pa-6 pt-0">
    <v-container>
      <v-text-field
        ref="textfield"
        append-icon="mdi-plus-circle"
        label="Add Task"
        counter="35"
        clearable
        v-model="newTaskTitle"
        @click:append.prevent="addTask"
        @keyup.enter.prevent="addTask"
      >
      </v-text-field>
    </v-container>

    <v-list flat class="pt-0" v-if="$store.state.tasks.length">
      <div v-for="task in $store.state.tasks" :key="task.id">
        <v-list-item
          @click="completeTask(task.id)"
          :class="{
            'primary lighten-1 ': task.done,
          }"
        >
          <template>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="white"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{
                  'white--text text-decoration-line-through': task.done,
                }"
                >{{ task.task }}</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                @click.stop="deleteTask(task.id)"
                icon
                :class="{
                  'white--text': task.done,
                }"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
    <div v-else>
      <v-container
        class="d-flex flex-column align-center justify-center  centered-message"
      >
        <div class="d-flex align-center">
          <v-avatar class="d-flex primary align-center">
            <v-icon dark class="mx-2" large> mdi-check</v-icon>
          </v-avatar>
          <h1 class=" pa-2  font-weight-regular">
            No Tasks
          </h1>
        </div>
        <v-btn color="primary" @click="focus">Add some tasks above...</v-btn>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
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
    deleteTask(id) {
      this.$store.commit("deleteTask", id);
    },
    addTask() {
      this.$store.commit("addTask", this.newTaskTitle);
      this.newTaskTitle = "";
    },
    focus() {
      this.$refs.textfield.focus();
    },
  },
};
</script>

<style lang="sass">
.centered-message
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  opacity: .7
</style>
