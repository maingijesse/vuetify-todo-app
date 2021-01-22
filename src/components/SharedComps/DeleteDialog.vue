<template>
  <v-row justify="center">
    <v-dialog persistent max-width="290" :value="true">
      <v-card>
        <v-card-title class="headline">
          Delete Task?
        </v-card-title>
        <v-card-text>Are you sure you want to delete this task?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success darken-1"
            text
            @click="$store.dispatch('deleteTask', task.id)"
          >
            Yes
          </v-btn>
          <v-btn color="primary darken-1" text @click="$emit('closeDialog')">
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
    };
  },
  props: ["task"],
};
</script>

<style></style>
