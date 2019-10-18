import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing";
import Home from "../views/Home";
import Waiting from "../views/Waiting";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: Landing
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/waiting/:id",
    name: "waiting",
    component: Waiting
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
