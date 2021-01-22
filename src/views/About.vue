<template>
  <div class="about ">
    <h1>
      Todo app by
      <a href="https://maingijesse.github.io">Jesse Maingi</a>
    </h1>
    <p>
      Created using Vue, Vuex, Vue-Router, Vuetify and Sass. Feel free to reach
      me on my <a href="mailto:maingijesse@gmail.com">email</a> adress if you
      have any website project or idea we can work on together 😎.
    </p>
    <v-rating
      v-model="rating"
      background-color="teal"
      color="primary"
    ></v-rating>

    <v-btn depressed color="primary" @click="$router.push('/')"
      >Check it out</v-btn
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      rating: 4,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
