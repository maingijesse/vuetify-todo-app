<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" :dark="task.done">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <edit-dialogue
      v-if="dialogs.edit"
      @closeDialog="dialogs.edit = false"
      :task="task"
    ></edit-dialogue>
    <delete-dialog
      v-if="dialogs.delete"
      :task="task"
      @closeDialog="dialogs.delete = false"
    ></delete-dialog>
    <due-date-dialogue
      v-if="dialogs.dueDate"
      :task="task"
      @closeDialog="dialogs.dueDate = false"
    >
    </due-date-dialogue>
  </div>
</template>

<script>
import DeleteDialog from "../SharedComps/DeleteDialog.vue";
import EditDialogue from "./EditDialogue.vue";
import DueDateDialogue from "./DueDateDialogue.vue";

export default {
  props: ["task"],
  data: () => ({
    dialogs: {
      delete: false,
      edit: false,
      dueDate: false,
    },
    items: [
      {
        title: "Edit",
        icon: "mdi-pencil",
        click() {
          console.log("Edit");
          this.dialogs.edit = true;
        },
      },
      {
        title: "Due Date",
        icon: "mdi-calendar",
        click() {
          // console.log("Due Date");
          this.dialogs.dueDate = true;
        },
      },
      {
        title: "Delete",
        icon: "mdi-delete",
        click() {
          console.log("Delete");
          this.dialogs.delete = true;
        },
      },
    ],
  }),
  methods: {
    handleClick(index) {
      this.items[index].click.call(this);
    },
  },
  components: {
    DeleteDialog,
    EditDialogue,
    DueDateDialogue,
  },
};
</script>

<style></style>
