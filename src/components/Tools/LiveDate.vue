<template>
  <div>
    <h1 class="">{{ date }}</h1>
  </div>
</template>

<script>
import { format } from "date-fns";

export default {
  data() {
    return {
      date: "",
    };
  },
  methods: {
    getdate() {
      this.date = format(new Date(), "do MMMM, H:mm:ss");
      setTimeout(() => {
        this.getdate();
      }, 1000);
    },
  },
  mounted() {
    this.getdate();
  },
};
</script>

<style></style>
