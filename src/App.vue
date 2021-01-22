<template>
  <v-app id="inspire" class="error">
    <v-navigation-drawer v-model="drawer" app mobile-breakpoint="900">
      <v-list class="text-center mt-4">
        <v-list-item>
          <v-list-item-avatar size="150" class="mx-auto elevation-10">
            <v-img src="/img/jesse.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item link href="https://twitter.com/Cjmaingi" target="_blank">
          <v-list-item-content>
            <v-list-item-title class="title font-weight-bold">
              Jesse Maingi
            </v-list-item-title>
            <v-list-item-subtitle>@Cjmaingi</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense nav class="px-6">
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary" flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title> ToDo App</v-toolbar-title> <br />

      <v-spacer></v-spacer>
      <search></search>
    </v-app-bar>

    <v-main>
      <!--  -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <SnackBar />
    <footer-component></footer-component>
  </v-app>
</template>

<script>
import FooterComponent from "./components/Layout/FooterComponent.vue";
import SnackBar from "./components/SharedComps/SnackBar";
import Search from "./components/Tools/Search.vue";
export default {
  data: () => ({
    drawer: null,
    twitter: "https://twitter.com/Cjmaingi",
    items: [
      { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
  }),
  mounted() {
    console.log(
      "Forget about this console. Hire me or donate sth ... i need to be able to afford a new macbook for learning Swift and iOS app development 😁. maingijesse@gmail.com"
    );
  },
  components: {
    SnackBar,
    Search,
    FooterComponent,
  },
};
</script>
