import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Red from "../views/Red";
import Yellow from "../views/Yellow";
import Green from "../views/Green";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/red",
    name: "Red",
    component: Red
  },
  {
    path: "/yellow",
    name: "Yellow",
    component: Yellow
  },
  {
    path: "/green",
    name: "Green",
    component: Green
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
