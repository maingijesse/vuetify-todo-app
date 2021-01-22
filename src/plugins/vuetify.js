import Vue from "vue";
import Vuetify from "vuetify/lib";
// import { colors } from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    light: true,
    themes: {
      light: {
        primary: "#FF008B",
        // primary: "#00d2d3",
        // primary: "#1EC9E8",
        warning: "#f53b57",
        error: "#f53b57",
        // error: "#05c46b",
        secondary: "#222f3e",
      },
    },
  },
});
