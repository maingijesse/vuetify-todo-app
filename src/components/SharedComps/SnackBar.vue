<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="$store.state.snackBar.show"
      dark
      color="error"
      app
      elevation="12"
      class="px-4 mb-16"
      absolute
      timeout="1500"
    >
      {{ $store.state.snackBar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="$store.commit('hideSnackBar')"
        >
          X
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
