<template>
  <div>
    <div>
      <v-list-item
        @click="completeTask(task.id)"
        :class="{
          'error lighten-1 ': task.done,
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
          <v-list-item-action v-if="task.dueDate">
            <v-list-item-action-text>
              <v-icon small>
                mdi-calendar
              </v-icon>
              {{ task.dueDate | niceDate }}
            </v-list-item-action-text>
          </v-list-item-action>
          <v-list-item-action>
            <!--  -->
            <task-menu :task="task"></task-menu>
          </v-list-item-action>
        </template>
      </v-list-item>
      <v-divider></v-divider>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";
import TaskMenu from "../SharedComps/TaskMenu.vue";

export default {
  filters: {
    niceDate(value) {
      return format(new Date(value), "do MMM");
    },
  },
  data() {
    return {};
  },
  components: { TaskMenu },
  props: ["task"],
  methods: {
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
    },
    completeTask(id) {
      this.$store.dispatch("completeTask", id);
    },
  },
};

//  @click.stop="deleteTask(task.id)" -- on delete button
</script>

<style>
/* 

 <v-btn
              @click.stop="dialogs.delete = true"
              icon
              :class="{
                'white--text': task.done,
              }"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
*/
</style>
