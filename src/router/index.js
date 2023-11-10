import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/email",
    name: "email",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EmailList.vue"),
  },
  {
    path: "/newemail",
    name: "newemail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EmailDetail.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
