<template>
  <v-footer padless>
    <v-card flat tile width="100%" class=" text-center secondary" dark>
      <v-card-text>
        <live-date></live-date>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text text-h6 ">
        &copy; {{ new Date().getFullYear() }} — <strong>Jesse Maingi</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import LiveDate from "../Tools/LiveDate.vue";
export default {
  components: { LiveDate },
};
</script>

<style></style>
