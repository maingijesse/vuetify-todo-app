import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "../views/Todo.vue";
// import goTo from "vuetify/es5/services/goto";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todos",
    component: Todo,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  mode: "history",
});

router.beforeEach((to, from, next) => {
  document.title = `Todo App - ${to.name}`;

  next();
});

// router.afterEach((to, from) => {
//   goTo(0, { duration: 500 });
// });

export default router;
