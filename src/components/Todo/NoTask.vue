<template>
  <v-container class="d-flex  align-center justify-center  centered-message">
    <v-avatar class="d-flex error align-center">
      <v-icon dark class="mx-2" large> mdi-check</v-icon>
    </v-avatar>
    <h1 class=" pa-2  font-weight-regular">
      No Tasks
    </h1>
  </v-container>
</template>
<style lang="sass">
.centered-message
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  opacity: .7
</style>
